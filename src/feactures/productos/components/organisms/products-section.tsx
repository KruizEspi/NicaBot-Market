import { Box, Chip, Paper, Typography } from "@mui/material";
import type { Producto } from "../../types/producto.type";
import { ProductCard } from "../molecules/product-card";

type ProductsSectionProps = {
    productos: Producto[];
};

export const ProductsSection = ({ productos }: ProductsSectionProps) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                    gap: 2,
                    flexWrap: "wrap",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Productos disponibles
                </Typography>

                <Chip
                    label={`${productos.length} productos encontrados`}
                    color="success"
                    variant="outlined"
                />
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    },
                    gap: 3,
                }}
            >
                {productos.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </Box>

            {productos.length === 0 && (
                <Paper
                    elevation={0}
                    sx={{
                        mt: 3,
                        p: 4,
                        textAlign: "center",
                        borderRadius: 4,
                        border: "1px dashed #cbd5e1",
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        No se encontraron productos
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Intenta buscar por otra categoría, producto, tienda o ubicación.
                    </Typography>
                </Paper>
            )}
        </>
    );
};