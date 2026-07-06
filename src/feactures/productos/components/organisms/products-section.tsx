import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

import type { Producto } from "../../types/producto.type";
import { ProductCard } from "../molecules/product-card";

type ProductsSectionProps = {
    productos: Producto[];
};

export const ProductsSection = ({ productos }: ProductsSectionProps) => {
    const totalProductos = productos.length;

    const productosDisponibles = productos.filter(
        (producto) => producto.estado === "Disponible",
    ).length;

    const categoriasUnicas = new Set(
        productos.map((producto) => producto.categoria),
    ).size;

    return (
        <Box>
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
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                mb: 1,
                                alignItems: "center",
                            }}
                        >
                            <Chip
                                label="Catálogo local"
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
                        </Stack>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 900,
                                color: "#0f172a",
                                lineHeight: 1.2,
                            }}
                        >
                            Productos disponibles
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                mt: 0.7,
                                color: "#64748b",
                                maxWidth: 560,
                            }}
                        >
                            Explora productos publicados por negocios locales y encuentra
                            opciones disponibles cerca de tu zona.
                        </Typography>
                    </Box>

                    <Stack
                        direction="row"
                        spacing={1.5}
                        sx={{
                            flexWrap: "wrap",
                            justifyContent: { xs: "flex-start", md: "flex-end" },
                            gap: 1.5,
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                px: 2,
                                py: 1.2,
                                minWidth: 120,
                                borderRadius: 3,
                                border: "1px solid #bbf7d0",
                                backgroundColor: "#f0fdf4",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{ color: "#166534", fontWeight: 700 }}
                            >
                                Encontrados
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ color: "#14532d", fontWeight: 900, lineHeight: 1.1 }}
                            >
                                {totalProductos}
                            </Typography>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                px: 2,
                                py: 1.2,
                                minWidth: 120,
                                borderRadius: 3,
                                border: "1px solid #bae6fd",
                                backgroundColor: "#f0f9ff",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{ color: "#0369a1", fontWeight: 700 }}
                            >
                                Disponibles
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ color: "#075985", fontWeight: 900, lineHeight: 1.1 }}
                            >
                                {productosDisponibles}
                            </Typography>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                px: 2,
                                py: 1.2,
                                minWidth: 120,
                                borderRadius: 3,
                                border: "1px solid #fde68a",
                                backgroundColor: "#fffbeb",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{ color: "#92400e", fontWeight: 700 }}
                            >
                                Categorías
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ color: "#78350f", fontWeight: 900, lineHeight: 1.1 }}
                            >
                                {categoriasUnicas}
                            </Typography>
                        </Paper>
                    </Stack>
                </Box>
            </Paper>

            {productos.length > 0 ? (
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                            xl: "repeat(4, 1fr)",
                        },
                        gap: 3,
                    }}
                >
                    {productos.map((producto) => (
                        <Box
                            key={producto.id}
                            sx={{
                                transition: "all 0.22s ease",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                },
                            }}
                        >
                            <ProductCard producto={producto} />
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
                        🛍️
                    </Box>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 900,
                            color: "#0f172a",
                            mb: 1,
                        }}
                    >
                        No se encontraron productos
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
                        Intenta buscar por otra categoría, producto, tienda o ubicación.
                        También puedes limpiar los filtros para ver todos los productos.
                    </Typography>
                </Paper>
            )}
        </Box>
    );
};