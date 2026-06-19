import { Box, Paper, Typography } from "@mui/material";

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
                background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
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
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                    Registrar tienda
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    Completa la información de tu negocio para aparecer en NicaBot Market
                    y permitir que los clientes encuentren tus productos.
                </Typography>
            </Box>

            <Box
                component="img"
                src="/ave-tienda.png"
                alt="Registrar tienda"
                sx={{
                    position: "absolute",
                    right: { xs: -60, md: 20 },
                    bottom: { xs: -30, md: -10 },
                    width: { xs: 200, sm: 280, md: 420 },
                    height: "auto",
                    objectFit: "contain",
                    opacity: { xs: 0.25, md: 1 },
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />
        </Paper>
    );
};