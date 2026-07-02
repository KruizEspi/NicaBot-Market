import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const banners = [
    {
        title: "Promociona tu tienda",
        description:
            "Haz que más clientes descubran tus productos dentro de NicaBot Market.",
        buttonText: "Registrar tienda",
        path: "/agregar-tienda",
        image: "/ave-tienda.png",
        badge: "Anuncio",
        background:
            "linear-gradient(135deg, #064e3b 0%, #15803d 52%, #22c55e 100%)",
    },
    {
        title: "Ofertas de negocios locales",
        description:
            "Encuentra productos, comida, ropa, tecnología y servicios cerca de ti.",
        buttonText: "Ver productos",
        path: "/productos",
        image: "/ave-tienda.png",
        badge: "Destacado",
        background:
            "linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #38bdf8 100%)",
    },
];

export const AdsBannerSection = () => {
    return (
        <Box sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        lg: "repeat(2, 1fr)",
                    },
                    gap: 3,
                }}
            >
                {banners.map((banner) => (
                    <Paper
                        key={banner.title}
                        elevation={0}
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            minHeight: 210,
                            borderRadius: 5,
                            p: { xs: 3, md: 4 },
                            color: "#fff",
                            background: banner.background,
                            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                right: -80,
                                top: -90,
                                width: 240,
                                height: 240,
                                borderRadius: "50%",
                                backgroundColor: "rgba(255,255,255,0.14)",
                            }}
                        />

                        <Box
                            sx={{
                                position: "absolute",
                                left: -70,
                                bottom: -100,
                                width: 220,
                                height: 220,
                                borderRadius: "50%",
                                backgroundColor: "rgba(255,255,255,0.10)",
                            }}
                        />

                        <Box
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                maxWidth: { xs: "100%", md: "65%" },
                            }}
                        >
                            <Chip
                                label={banner.badge}
                                size="small"
                                sx={{
                                    mb: 2,
                                    backgroundColor: "#facc15",
                                    color: "#1c1917",
                                    fontWeight: 900,
                                }}
                            />

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 900,
                                    mb: 1,
                                    textShadow: "0 2px 8px rgba(0,0,0,0.22)",
                                }}
                            >
                                {banner.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "rgba(255,255,255,0.9)",
                                    lineHeight: 1.7,
                                    mb: 2.5,
                                }}
                            >
                                {banner.description}
                            </Typography>

                            <Button
                                component={NavLink}
                                to={banner.path}
                                sx={{
                                    textTransform: "none",
                                    borderRadius: 999,
                                    px: 3,
                                    py: 1,
                                    fontWeight: 900,
                                    background:
                                        "linear-gradient(135deg, #facc15 0%, #f97316 100%)",
                                    color: "#1c1917",
                                    boxShadow: "0 12px 26px rgba(0,0,0,0.22)",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(135deg, #fde047 0%, #fb923c 100%)",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                {banner.buttonText}
                            </Button>
                        </Box>

                        <Box
                            component="img"
                            src={banner.image}
                            alt={banner.title}
                            sx={{
                                position: "absolute",
                                right: { xs: -55, md: 15 },
                                bottom: { xs: -35, md: -20 },
                                width: { xs: 180, md: 260 },
                                height: "auto",
                                objectFit: "contain",
                                opacity: { xs: 0.25, md: 0.95 },
                                zIndex: 1,
                                pointerEvents: "none",
                            }}
                        />
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};