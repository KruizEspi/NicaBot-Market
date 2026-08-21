import {
    useEffect,
    useMemo,
    useRef,
} from "react";
import {
    useSearchParams,
} from "react-router-dom";
import {
    Box,
    Chip,
    Paper,
    Typography,
} from "@mui/material";

import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
} from "react-leaflet";

import L, {
    type LatLngExpression,
    type Marker as LeafletMarker,
} from "leaflet";

import "leaflet/dist/leaflet.css";


export type TiendaMapa = {
    id: number;
    nombre: string;
    categoria?: string;
    descripcion?: string;
    ubicacion?: string;
    telefono?: string;
    horario?: string;
    estado?: string;
    lat?: number | string | null;
    lng?: number | string | null;
};

type TiendasMapProps = {
    tiendas: TiendaMapa[];
};


const center: LatLngExpression = [
    12.1364,
    -86.2514,
];


const storeIcon = L.icon({
    iconUrl: "/avelocalizacion.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -34],
});


const selectedStoreIcon = L.icon({
    iconUrl: "/avelocalizacion.png",
    iconSize: [52, 52],
    iconAnchor: [26, 52],
    popupAnchor: [0, -48],
});


const convertirNumero = (
    valor: string | number | null | undefined,
): number | null => {
    if (
        valor === null ||
        valor === undefined ||
        valor === ""
    ) {
        return null;
    }

    const numero = Number(valor);

    if (!Number.isFinite(numero)) {
        return null;
    }

    return numero;
};


type MapControllerProps = {
    lat: number | null;
    lng: number | null;
};


const MapController = ({
                           lat,
                           lng,
                       }: MapControllerProps) => {
    const map = useMap();

    useEffect(() => {
        // Corrige mapas que fueron renderizados
        // mientras estaban ocultos.
        const timerInvalidate =
            window.setTimeout(() => {
                map.invalidateSize();
            }, 150);

        if (
            lat !== null &&
            lng !== null &&
            Number.isFinite(lat) &&
            Number.isFinite(lng)
        ) {
            console.log(
                "[TiendasMap] flyTo:",
                lat,
                lng,
            );

            const timerFly =
                window.setTimeout(() => {
                    map.invalidateSize();

                    map.flyTo(
                        [lat, lng],
                        17,
                        {
                            animate: true,
                            duration: 1.2,
                        },
                    );
                }, 300);

            return () => {
                window.clearTimeout(
                    timerInvalidate,
                );

                window.clearTimeout(
                    timerFly,
                );
            };
        }

        return () => {
            window.clearTimeout(
                timerInvalidate,
            );
        };
    }, [
        map,
        lat,
        lng,
    ]);

    return null;
};


type SelectedStoreMarkerProps = {
    lat: number;
    lng: number;
    nombre: string;
    ubicacion?: string;
    categoria?: string;
    estado?: string;
};


const SelectedStoreMarker = ({
                                 lat,
                                 lng,
                                 nombre,
                                 ubicacion,
                                 categoria,
                                 estado,
                             }: SelectedStoreMarkerProps) => {
    const markerRef =
        useRef<LeafletMarker | null>(null);

    useEffect(() => {
        const timer = window.setTimeout(
            () => {
                markerRef.current?.openPopup();
            },
            900,
        );

        return () => {
            window.clearTimeout(timer);
        };
    }, [lat, lng, nombre]);

    return (
        <Marker
            ref={markerRef}
            position={[lat, lng]}
            icon={selectedStoreIcon}
            zIndexOffset={1000}
        >
            <Popup>
                <Box
                    sx={{
                        minWidth: 200,
                    }}
                >
                    <Typography
                        component="div"
                        sx={{
                            fontWeight: 900,
                            color: "#166534",
                            mb: 0.5,
                        }}
                    >
                        📍 {nombre}
                    </Typography>

                    {ubicacion && (
                        <Typography
                            component="div"
                            variant="body2"
                            sx={{
                                mb: 0.5,
                            }}
                        >
                            {ubicacion}
                        </Typography>
                    )}

                    {categoria && (
                        <Typography
                            component="div"
                            variant="caption"
                            sx={{
                                display: "block",
                            }}
                        >
                            Categoría: {categoria}
                        </Typography>
                    )}

                    {estado && (
                        <Chip
                            size="small"
                            label={estado}
                            sx={{
                                mt: 1,
                                fontWeight: 700,
                            }}
                        />
                    )}
                </Box>
            </Popup>
        </Marker>
    );
};


export const TiendasMap = ({
                               tiendas,
                           }: TiendasMapProps) => {
    const [searchParams] =
        useSearchParams();

    const tiendaIdParam =
        searchParams.get(
            "tiendaId",
        );

    const latParam =
        searchParams.get("lat");

    const lngParam =
        searchParams.get("lng");

    const nombreParam =
        searchParams.get(
            "nombre",
        );

    const ubicacionParam =
        searchParams.get(
            "ubicacion",
        );

    const tiendaId =
        tiendaIdParam !== null
            ? Number(
                tiendaIdParam,
            )
            : null;

    const tiendaEncontrada =
        useMemo(() => {
            if (
                tiendaId === null ||
                !Number.isFinite(
                    tiendaId,
                )
            ) {
                return undefined;
            }

            return tiendas.find(
                (tienda) =>
                    Number(
                        tienda.id,
                    ) === tiendaId,
            );
        }, [
            tiendas,
            tiendaId,
        ]);

    /*
     * Primero usamos las coordenadas
     * enviadas directamente por NicaBot.
     *
     * Si no vienen, utilizamos las de
     * la tienda encontrada por ID.
     */
    const latSeleccionada =
        convertirNumero(
            latParam ??
            tiendaEncontrada?.lat,
        );

    const lngSeleccionada =
        convertirNumero(
            lngParam ??
            tiendaEncontrada?.lng,
        );

    const nombreSeleccionado =
        nombreParam ||
        tiendaEncontrada?.nombre ||
        "Tienda seleccionada";

    const ubicacionSeleccionada =
        ubicacionParam ||
        tiendaEncontrada?.ubicacion;

    const categoriaSeleccionada =
        tiendaEncontrada?.categoria;

    const estadoSeleccionado =
        tiendaEncontrada?.estado;


    const tiendasConUbicacion =
        useMemo(
            () =>
                tiendas.filter(
                    (tienda) => {
                        const lat =
                            convertirNumero(
                                tienda.lat,
                            );

                        const lng =
                            convertirNumero(
                                tienda.lng,
                            );

                        return (
                            lat !== null &&
                            lng !== null
                        );
                    },
                ),
            [tiendas],
        );


    useEffect(() => {
        console.log(
            "[TiendasMap] Parámetros:",
            {
                tiendaId,
                latSeleccionada,
                lngSeleccionada,
                nombreSeleccionado,
                ubicacionSeleccionada,
                tiendaEncontrada,
            },
        );
    }, [
        tiendaId,
        latSeleccionada,
        lngSeleccionada,
        nombreSeleccionado,
        ubicacionSeleccionada,
        tiendaEncontrada,
    ]);


    return (
        <Paper
            elevation={0}
            sx={{
                width: "100%",
                overflow: "hidden",
                borderRadius: 4,
                border:
                    "1px solid #e2e8f0",
                backgroundColor:
                    "#fff",
            }}
        >
            <Box
                sx={{
                    p: 2,
                    borderBottom:
                        "1px solid #e2e8f0",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 900,
                        color: "#166534",
                    }}
                >
                    Mapa de tiendas
                </Typography>

                {latSeleccionada !==
                    null &&
                    lngSeleccionada !==
                    null && (
                        <Typography
                            variant="body2"
                            sx={{
                                mt: 0.5,
                                color:
                                    "#64748b",
                            }}
                        >
                            Mostrando:{" "}
                            <strong>
                                {
                                    nombreSeleccionado
                                }
                            </strong>
                        </Typography>
                    )}
            </Box>

            <Box
                sx={{
                    width: "100%",
                    height: {
                        xs: 480,
                        md: 600,
                    },
                    position: "relative",
                }}
            >
                <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <MapController
                        lat={
                            latSeleccionada
                        }
                        lng={
                            lngSeleccionada
                        }
                    />

                    {tiendasConUbicacion.map(
                        (tienda) => {
                            const lat =
                                convertirNumero(
                                    tienda.lat,
                                );

                            const lng =
                                convertirNumero(
                                    tienda.lng,
                                );

                            if (
                                lat === null ||
                                lng === null
                            ) {
                                return null;
                            }

                            /*
                             * Si es la tienda seleccionada,
                             * no la pintamos aquí porque
                             * abajo tendrá un marcador
                             * especial más grande.
                             */
                            if (
                                tiendaId !==
                                null &&
                                Number(
                                    tienda.id,
                                ) ===
                                tiendaId
                            ) {
                                return null;
                            }

                            return (
                                <Marker
                                    key={
                                        tienda.id
                                    }
                                    position={[
                                        lat,
                                        lng,
                                    ]}
                                    icon={
                                        storeIcon
                                    }
                                >
                                    <Popup>
                                        <Box
                                            sx={{
                                                minWidth: 180,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                }}
                                            >
                                                {
                                                    tienda.nombre
                                                }
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                            >
                                                {
                                                    tienda.ubicacion
                                                }
                                            </Typography>

                                            {tienda.estado && (
                                                <Chip
                                                    label={
                                                        tienda.estado
                                                    }
                                                    size="small"
                                                    sx={{
                                                        mt: 1,
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Popup>
                                </Marker>
                            );
                        },
                    )}

                    {latSeleccionada !==
                        null &&
                        lngSeleccionada !==
                        null && (
                            <SelectedStoreMarker
                                lat={
                                    latSeleccionada
                                }
                                lng={
                                    lngSeleccionada
                                }
                                nombre={
                                    nombreSeleccionado
                                }
                                ubicacion={
                                    ubicacionSeleccionada
                                }
                                categoria={
                                    categoriaSeleccionada
                                }
                                estado={
                                    estadoSeleccionado
                                }
                            />
                        )}
                </MapContainer>
            </Box>
        </Paper>
    );
};