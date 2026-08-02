import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const HomeHero = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3, md: 4 },
                mb: 3,
                borderRadius: 5,
                background:
                    "linear-gradient(135deg, #e8f5e9 0%, #ffffff 55%, #dcfce7 100%)",
                border: "1px solid #dbeafe",
                minHeight: { xs: "auto", md: 300 },
            }}
        >
            <Box
                sx={{
                    maxWidth: { xs: "100%", md: "62%" },
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Chip
                    label="Marketplace local inteligente"
                    sx={{
                        mb: 2,
                        backgroundColor: "#dcfce7",
                        color: "#166534",
                        fontWeight: "bold",
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        color: "#1e293b",
                        lineHeight: 1.1,
                        mb: 2,
                    }}
                >
                    Bienvenido a NicaBot Market
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        mb: 3,
                        maxWidth: 620,
                        lineHeight: 1.8,
                    }}
                >
                    Una plataforma digital creada para conectar negocios locales con
                    clientes de su comunidad, facilitando la búsqueda de productos,
                    tiendas y servicios mediante una experiencia moderna y asistida.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                        component={NavLink}
                        to="/productos"
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            borderRadius: 999,
                            px: 3,
                            py: 1.2,
                            backgroundColor: "#4cae50",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "#3f9844",
                            },
                        }}
                    >
                        Explorar productos
                    </Button>

                    <Button
                        component={NavLink}
                        to="/agregar-tienda"
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            borderRadius: 999,
                            px: 3,
                            py: 1.2,
                            color: "#2e7d32",
                            borderColor: "#4cae50",
                            fontWeight: "bold",
                            "&:hover": {
                                borderColor: "#2e7d32",
                                backgroundColor: "#e8f5e9",
                            },
                        }}
                    >
                        Registrar mi tienda
                    </Button>
                </Box>
            </Box>

            <MotionBox
                initial={{
                    opacity: 0,
                    x: 120,
                    y: 30,
                    scale: 0.92,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -14, 0],
                    scale: 1,
                    rotate: [0, 1.5, 0],
                }}
                transition={{
                    opacity: {
                        duration: 0.8,
                        ease: "easeOut",
                    },
                    x: {
                        duration: 0.8,
                        ease: "easeOut",
                    },
                    scale: {
                        duration: 0.8,
                        ease: "easeOut",
                    },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                sx={{
                    position: "absolute",
                    right: { xs: -70, md: 20 },
                    bottom: { xs: -40, md: -25 },
                    width: { xs: 220, sm: 300, md: 680 },
                    height: "auto",
                    opacity: { xs: 0.22, md: 1 },
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            >
                <Box
                    component="img"
                    src="/AveSalu.png"
                    alt="NicaBot Market"
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