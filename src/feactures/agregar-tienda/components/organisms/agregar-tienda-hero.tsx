import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const AgregarTiendaHero = () => {
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
                minHeight: { xs: "auto", md: 220 },
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
                    Registrar tienda
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        maxWidth: 620,
                        lineHeight: 1.7,
                    }}
                >
                    Completa la información de tu negocio para aparecer en NicaBot Market,
                    publicar tus productos, recibir pedidos y conectar con nuevos clientes.
                </Typography>
            </Box>

            <MotionBox
                initial={{
                    opacity: 0,
                    y: 90,
                    scale: 0.75,
                    rotate: -10,
                }}
                animate={{
                    opacity: 1,
                    y: [0, -8, 0, -4, 0],
                    scale: [1, 1.04, 1],
                    rotate: [0, 2, -2, 1, 0],
                }}
                transition={{
                    opacity: {
                        duration: 0.75,
                        ease: "easeOut",
                    },
                    y: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    scale: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    rotate: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                sx={{
                    position: "absolute",
                    right: { xs: -60, md: 20 },
                    bottom: { xs: -30, md: -10 },
                    width: { xs: 200, sm: 280, md: 420 },
                    height: "auto",
                    opacity: { xs: 0.25, md: 1 },
                    pointerEvents: "none",
                    zIndex: 1,
                    transformOrigin: "center bottom",
                }}
            >
                <Box
                    component="img"
                    src="/ave-tienda.png"
                    alt="Registrar tienda"
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