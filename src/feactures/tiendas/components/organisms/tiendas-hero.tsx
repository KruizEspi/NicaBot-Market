import { Box, Paper, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

type TiendasHeroProps = {
    search: string;
    onSearchChange: (value: string) => void;
};

export const TiendasHero = ({ search, onSearchChange }: TiendasHeroProps) => {
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
                    Tiendas locales
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
                    Explora los negocios registrados en NicaBot Market y encuentra tiendas
                    cercanas, categorías, productos y servicios disponibles.
                </Typography>

                <TextField
                    fullWidth
                    label="Buscar tienda, categoría, ubicación o descripción"
                    value={search}
                    onChange={(event) => onSearchChange(event.target.value)}
                    sx={{
                        width: { xs: "100%", sm: 460, md: 520 },
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
                    scale: 0.78,
                    y: 40,
                    rotate: 8,
                }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.03, 1],
                    y: [0, -10, 0],
                    rotate: [0, -2.5, 2.5, -1.5, 0],
                }}
                transition={{
                    opacity: {
                        duration: 0.75,
                        ease: "easeOut",
                    },
                    scale: {
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    y: {
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    rotate: {
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                whileHover={{
                    scale: 1.05,
                    rotate: -3,
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
                    src="/AveTienda.png"
                    alt="Ave tienda"
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