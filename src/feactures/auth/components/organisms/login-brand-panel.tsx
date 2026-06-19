import { Box, Chip, Paper, Typography } from "@mui/material";

export const LoginBrandPanel = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                minHeight: 620,
                borderRadius: 6,
                background:
                    "linear-gradient(145deg, #2e7d32 0%, #4cae50 45%, #7bc67d 100%)",
                color: "#fff",
                p: 5,
                display: {
                    xs: "none",
                    md: "flex",
                },
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ position: "relative", zIndex: 3 }}>
                <Chip
                    label="Marketplace local"
                    sx={{
                        backgroundColor: "rgba(255,255,255,0.18)",
                        color: "#fff",
                        fontWeight: "bold",
                        mb: 3,
                        backdropFilter: "blur(8px)",
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        maxWidth: 500,
                        lineHeight: 1.1,
                        mb: 2,
                    }}
                >
                    Conecta tu negocio con clientes de tu zona
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 480,
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.7,
                    }}
                >
                    Administra tiendas, productos y solicitudes desde una plataforma
                    sencilla, moderna y pensada para negocios locales.
                </Typography>
            </Box>

            <Box
                component="img"
                src="/FondoAve.png"
                alt="NicaBot"
                sx={{
                    position: "center",
                    borderRadius: 6,
                    right: { md: -35, lg: -10 },
                    bottom: { md: 20, lg: 10 },
                    width: { md: 420, lg: 550 },
                    height: "auto",
                    objectFit: "contain",
                    opacity: 0.95,
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    right: -120,
                    bottom: -120,
                    width: 360,
                    height: 360,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    zIndex: 0,
                }}
            />

            <Box
                sx={{
                    position: "relative",
                    zIndex: 3,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 2,
                    mt: 4,
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        borderRadius: 4,
                        backgroundColor: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        +120
                    </Typography>
                    <Typography variant="caption">Tiendas</Typography>
                </Box>

                <Box
                    sx={{
                        p: 2,
                        borderRadius: 4,
                        backgroundColor: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        +800
                    </Typography>
                    <Typography variant="caption">Productos</Typography>
                </Box>

                <Box
                    sx={{
                        p: 2,
                        borderRadius: 4,
                        backgroundColor: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        24/7
                    </Typography>
                    <Typography variant="caption">Asistente</Typography>
                </Box>
            </Box>
        </Paper>
    );
};