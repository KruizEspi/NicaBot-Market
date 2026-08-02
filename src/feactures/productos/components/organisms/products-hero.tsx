import { Box, Paper, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

type ProductsHeroProps = {
    search: string;
    onSearchChange: (value: string) => void;
};

export const ProductsHero = ({ search, onSearchChange }: ProductsHeroProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3, md: 4 },
                mb: 3,
                borderRadius: 4,
                background:
                    "linear-gradient(135deg, #e8f5e9 0%, #ffffff 55%, #dcfce7 100%)",
                border: "1px solid #dbeafe",
                minHeight: { xs: "auto", md: 230 },
            }}
        >
            <Box
                sx={{
                    maxWidth: { xs: "100%", md: "65%" },
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        mb: 1,
                        color: "#0f172a",
                    }}
                >
                    Productos locales
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        mb: 3,
                        maxWidth: 620,
                        lineHeight: 1.7,
                    }}
                >
                    Busca productos ofrecidos por negocios registrados en NicaBot Market.
                </Typography>

                <TextField
                    label="Buscar producto, categoría, tienda o ubicación"
                    value={search}
                    onChange={(event) => onSearchChange(event.target.value)}
                    sx={{
                        width: { xs: "100%", sm: 420, md: 460 },
                        maxWidth: "100%",
                        backgroundColor: "#fff",
                        borderRadius: 2,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                        },
                    }}
                />
            </Box>

            <MotionBox
                initial={{
                    opacity: 0,
                    x: 90,
                    scale: 0.9,
                    rotate: -6,
                }}
                animate={{
                    opacity: 1,
                    x: [0, -10, 0, 8, 0],
                    y: [0, -6, 0],
                    scale: 1,
                    rotate: [-2, 2, -1, 1, -2],
                }}
                transition={{
                    opacity: {
                        duration: 0.7,
                        ease: "easeOut",
                    },
                    scale: {
                        duration: 0.7,
                        ease: "easeOut",
                    },
                    x: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    rotate: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                sx={{
                    position: "absolute",
                    right: { xs: -60, md: 20 },
                    bottom: { xs: -30, md: 40 },
                    width: { xs: 200, sm: 280, md: 430 },
                    height: "auto",
                    opacity: { xs: 0.25, md: 1 },
                    pointerEvents: "none",
                    zIndex: 1,
                    transformOrigin: "center bottom",
                }}
            >
                <Box
                    component="img"
                    src="/ave-producto.png"
                    alt="Ave producto"
                    sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        display: "block",
                    }}
                />
            </MotionBox>
        </Paper>
    );
};