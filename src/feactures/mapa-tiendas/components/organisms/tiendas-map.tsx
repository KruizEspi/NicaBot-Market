import { Box, Chip, Paper, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { type LatLngExpression } from "leaflet";

import type { Tienda } from "../../../tiendas/types/tienda.type";

type TiendasMapProps = {
    tiendas: Tienda[];
};

const center: LatLngExpression = [12.1364, -86.2514];

const storeIcon = L.icon({
    iconUrl: "/avelocalizacion.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -34],
});

export const TiendasMap = ({ tiendas }: TiendasMapProps) => {
    const tiendasConUbicacion = tiendas.filter(
        (tienda) =>
            typeof tienda.lat === "number" && typeof tienda.lng === "number",
    );

    return (
        <Paper
            elevation={0}
            sx={{
                mb: 3,
                p: 2,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: 2,
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        Mapa de tiendas
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#64748b" }}>
                        Ubicación aproximada de los negocios registrados.
                    </Typography>
                </Box>

                <Chip
                    label={`${tiendasConUbicacion.length} tiendas en el mapa`}
                    color="success"
                    variant="outlined"
                    sx={{ fontWeight: 800 }}
                />
            </Box>

            <Box
                sx={{
                    height: { xs: 360, md: 860 },
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    "& .leaflet-container": {
                        height: "100%",
                        width: "100%",
                    },
                }}
            >
                <MapContainer
                    center={center}
                    zoom={12}
                    scrollWheelZoom={true}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {tiendasConUbicacion.map((tienda) => {
                        const position: LatLngExpression = [tienda.lat, tienda.lng];

                        return (
                            <Marker key={tienda.id} position={position} icon={storeIcon}>
                                <Popup>
                                    <Box sx={{ minWidth: 190 }}>
                                        <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                                            {tienda.nombre}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#64748b", mb: 1 }}
                                        >
                                            {tienda.categoria}
                                        </Typography>

                                        <Chip
                                            label={tienda.estado}
                                            size="small"
                                            color={tienda.estado === "Abierto" ? "success" : "default"}
                                            sx={{ fontWeight: 800, mb: 1 }}
                                        />

                                        <Typography variant="body2">
                                            📍 {tienda.ubicacion}
                                        </Typography>

                                        <Typography variant="body2">
                                            📞 {tienda.telefono}
                                        </Typography>
                                    </Box>
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </Box>
        </Paper>
    );
};