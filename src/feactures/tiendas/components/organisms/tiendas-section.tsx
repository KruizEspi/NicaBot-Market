import { Box, Chip, Paper, Typography } from "@mui/material";
import type { Tienda } from "../../types/tienda.type";
import { TiendasCard } from "../molecules/tiendas-card";

type TiendasSectionProps = {
    tiendas: Tienda[];
};

export const TiendasSection = ({ tiendas }: TiendasSectionProps) => {
    const totalTiendas = tiendas.length;

    const tiendasAbiertas = tiendas.filter(
        (tienda) => tienda.estado === "Abierto",
    ).length;

    const categoriasUnicas = new Set(
        tiendas.map((tienda) => tienda.categoria),
    ).size;

    return (
        <Box sx={{ width: "100%", minWidth: 0 }}>
            <Paper
                elevation={0}
                sx={{
                    mb: 3,
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    background:
                        "linear-gradient(135deg, #ffffff 0%, #f8fafc 55%, #ecfdf5 100%)",
                    boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        right: -80,
                        top: -80,
                        width: 190,
                        height: 190,
                        borderRadius: "50%",
                        backgroundColor: "rgba(34, 197, 94, 0.12)",
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        right: 70,
                        bottom: -90,
                        width: 160,
                        height: 160,
                        borderRadius: "50%",
                        backgroundColor: "rgba(250, 204, 21, 0.18)",
                    }}
                />

                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        alignItems: { xs: "flex-start", md: "center" },
                        justifyContent: "space-between",
                        gap: 2,
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 1,
                                flexWrap: "wrap",
                            }}
                        >
                            <Chip
                                label="Directorio local"
                                size="small"
                                sx={{
                                    fontWeight: 800,
                                    color: "#166534",
                                    backgroundColor: "#dcfce7",
                                    borderRadius: 999,
                                }}
                            />

                            <Chip
                                label="NicaBot Market"
                                size="small"
                                variant="outlined"
                                sx={{
                                    fontWeight: 800,
                                    borderRadius: 999,
                                    borderColor: "#86efac",
                                    color: "#15803d",
                                    backgroundColor: "#ffffff",
                                }}
                            />
                        </Box>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 900,
                                color: "#0f172a",
                                lineHeight: 1.2,
                            }}
                        >
                            Negocios registrados
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                mt: 0.7,
                                color: "#64748b",
                                maxWidth: 580,
                                lineHeight: 1.6,
                            }}
                        >
                            Explora tiendas, emprendimientos y negocios locales registrados en
                            la plataforma.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: { xs: "flex-start", md: "flex-end" },
                            gap: 1.5,
                        }}
                    >
                        <StatBox
                            label="Encontradas"
                            value={totalTiendas}
                            borderColor="#bbf7d0"
                            bgColor="#f0fdf4"
                            labelColor="#166534"
                            valueColor="#14532d"
                        />

                        <StatBox
                            label="Abiertas"
                            value={tiendasAbiertas}
                            borderColor="#bae6fd"
                            bgColor="#f0f9ff"
                            labelColor="#0369a1"
                            valueColor="#075985"
                        />

                        <StatBox
                            label="Categorías"
                            value={categoriasUnicas}
                            borderColor="#fde68a"
                            bgColor="#fffbeb"
                            labelColor="#92400e"
                            valueColor="#78350f"
                        />
                    </Box>
                </Box>
            </Paper>

            {tiendas.length > 0 ? (
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, minmax(0, 1fr))",
                            lg: "repeat(3, minmax(0, 1fr))",
                        },
                        gap: 3,
                        width: "100%",
                        minWidth: 0,
                        overflow: "hidden",
                    }}
                >
                    {tiendas.map((tienda) => (
                        <Box
                            key={tienda.id}
                            sx={{
                                minWidth: 0,
                                transition: "all 0.22s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                },
                            }}
                        >
                            <TiendasCard tienda={tienda} />
                        </Box>
                    ))}
                </Box>
            ) : (
                <Paper
                    elevation={0}
                    sx={{
                        mt: 3,
                        p: { xs: 4, md: 6 },
                        textAlign: "center",
                        borderRadius: 5,
                        border: "1px dashed #86efac",
                        background:
                            "linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #ecfdf5 100%)",
                        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.06)",
                    }}
                >
                    <Box
                        sx={{
                            width: 82,
                            height: 82,
                            mx: "auto",
                            mb: 2,
                            borderRadius: "50%",
                            backgroundColor: "#dcfce7",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 38,
                        }}
                    >
                        🏪
                    </Box>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 900,
                            color: "#0f172a",
                            mb: 1,
                        }}
                    >
                        No se encontraron tiendas
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#64748b",
                            maxWidth: 420,
                            mx: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Intenta buscar por otro nombre, categoría o ubicación. También
                        puedes limpiar los filtros para ver todos los negocios registrados.
                    </Typography>
                </Paper>
            )}
        </Box>
    );
};

type StatBoxProps = {
    label: string;
    value: number;
    borderColor: string;
    bgColor: string;
    labelColor: string;
    valueColor: string;
};

const StatBox = ({
                     label,
                     value,
                     borderColor,
                     bgColor,
                     labelColor,
                     valueColor,
                 }: StatBoxProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                px: 2,
                py: 1.2,
                minWidth: 120,
                borderRadius: 3,
                border: `1px solid ${borderColor}`,
                backgroundColor: bgColor,
            }}
        >
            <Typography
                variant="caption"
                sx={{
                    color: labelColor,
                    fontWeight: 700,
                }}
            >
                {label}
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    color: valueColor,
                    fontWeight: 900,
                    lineHeight: 1.1,
                }}
            >
                {value}
            </Typography>
        </Paper>
    );
};