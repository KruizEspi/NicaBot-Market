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
    const isAvailable = producto.estado === "Disponible";

    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 5,
                overflow: "hidden",
                position: "relative",
                border: "1px solid #e2e8f0",
                background:
                    "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                transition: "all 0.25s ease",
                boxShadow: "0 10px 28px rgba(15, 23, 42, 0.06)",
                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 22px 55px rgba(15, 23, 42, 0.16)",
                    borderColor: "#86efac",
                },
                "&:hover .product-image-wrap": {
                    transform: "scale(1.03)",
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: -70,
                    right: -70,
                    width: 170,
                    height: 170,
                    borderRadius: "50%",
                    backgroundColor: "rgba(34, 197, 94, 0.12)",
                    pointerEvents: "none",
                }}
            />

            <CardContent
                sx={{
                    p: 2.4,
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        mb: 2,
                        p: 1.5,
                        borderRadius: 4,
                        background:
                            "linear-gradient(135deg, #f0fdf4 0%, #ffffff 65%)",
                        border: "1px solid #dcfce7",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="product-image-wrap"
                        sx={{
                            transition: "all 0.25s ease",
                        }}
                    >
                        <ProductImage src={producto.imagen} alt={producto.nombre} />
                    </Box>

                    <Chip
                        label={producto.categoria}
                        size="small"
                        sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            fontWeight: 800,
                            borderRadius: 999,
                            color: "#166534",
                            backgroundColor: "#dcfce7",
                            border: "1px solid #86efac",
                            boxShadow: "0 8px 18px rgba(22, 163, 74, 0.18)",
                        }}
                    />

                    <Chip
                        size="small"
                        label={producto.estado}
                        color={isAvailable ? "success" : "default"}
                        sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            fontWeight: 800,
                            borderRadius: 999,
                            backgroundColor: isAvailable ? "#16a34a" : "#e5e7eb",
                            color: isAvailable ? "#fff" : "#475569",
                            boxShadow: isAvailable
                                ? "0 8px 18px rgba(22, 163, 74, 0.25)"
                                : "none",
                        }}
                    />
                </Box>

                <Box sx={{ mb: 1.4 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 900,
                            color: "#0f172a",
                            lineHeight: 1.2,
                            mb: 0.6,
                        }}
                    >
                        {producto.nombre}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#64748b",
                            lineHeight: 1.6,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: 44,
                        }}
                    >
                        {producto.descripcion}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gap: 1,
                        mb: 2,
                        p: 1.5,
                        borderRadius: 3,
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            minWidth: 0,
                        }}
                    >
                        <Box
                            sx={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                backgroundColor: "#ecfdf5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            🏪
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                color: "#334155",
                                fontWeight: 700,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {producto.tienda}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            minWidth: 0,
                        }}
                    >
                        <Box
                            sx={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                backgroundColor: "#eff6ff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            📍
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                color: "#64748b",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {producto.ubicacion}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                        gap: 1,
                    }}
                >
                    <Box>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#64748b",
                                fontWeight: 700,
                            }}
                        >
                            Precio
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 950,
                                color: "#15803d",
                                lineHeight: 1.1,
                            }}
                        >
                            C$ {producto.precio}
                        </Typography>
                    </Box>

                    <Chip
                        label={isAvailable ? "En stock" : "Agotado"}
                        size="small"
                        sx={{
                            fontWeight: 900,
                            borderRadius: 999,
                            color: isAvailable ? "#166534" : "#991b1b",
                            backgroundColor: isAvailable ? "#dcfce7" : "#fee2e2",
                            border: `1px solid ${isAvailable ? "#86efac" : "#fecaca"}`,
                        }}
                    />
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    disabled={!isAvailable}
                    sx={{
                        textTransform: "none",
                        borderRadius: 999,
                        py: 1.15,
                        fontWeight: 900,
                        background: isAvailable
                            ? "linear-gradient(135deg, #15803d 0%, #22c55e 100%)"
                            : undefined,
                        boxShadow: isAvailable
                            ? "0 12px 28px rgba(22, 163, 74, 0.28)"
                            : "none",
                        "&:hover": {
                            background: isAvailable
                                ? "linear-gradient(135deg, #166534 0%, #16a34a 100%)"
                                : undefined,
                            boxShadow: isAvailable
                                ? "0 16px 34px rgba(22, 163, 74, 0.38)"
                                : "none",
                            transform: isAvailable ? "translateY(-1px)" : "none",
                        },
                    }}
                >
                    {isAvailable ? "Ver producto" : "No disponible"}
                </Button>
            </CardContent>
        </Card>
    );
};