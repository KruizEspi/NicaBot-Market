import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Typography,
} from "@mui/material";
import type { Producto } from "../../types/producto.type";
import { ProductImage } from "../atoms/product-image";

type ProductCardProps = {
    producto: Producto;
};

export const ProductCard = ({ producto }: ProductCardProps) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                transition: "0.2s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 35px rgba(15, 23, 42, 0.12)",
                },
            }}
        >
            <CardContent>
                <ProductImage src={producto.imagen} alt={producto.nombre} />

                <Box sx={{ mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {producto.nombre}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {producto.categoria}
                    </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {producto.descripcion}
                </Typography>

                <Typography variant="body2" sx={{ mb: 0.5 }}>
                    🏪 {producto.tienda}
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                    📍 {producto.ubicacion}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: "#2e7d32",
                        }}
                    >
                        C$ {producto.precio}
                    </Typography>

                    <Chip
                        size="small"
                        label={producto.estado}
                        color={producto.estado === "Disponible" ? "success" : "default"}
                    />
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    disabled={producto.estado === "Agotado"}
                    sx={{
                        textTransform: "none",
                        backgroundColor: "#4cae50",
                        "&:hover": {
                            backgroundColor: "#3f9844",
                        },
                    }}
                >
                    Ver producto
                </Button>
            </CardContent>
        </Card>
    );
};