import { Box, Paper, Typography } from "@mui/material";

export const DashboardHero = () => {
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
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                    Dashboard
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    Administra tiendas, productos y solicitudes dentro de NicaBot Market.
                </Typography>
            </Box>
            <Box
                component="img"
                src="/ave-tienda.png"
                alt="Dashboard NicaBot Market"
                sx={{
                    position: "absolute",
                    right: { xs: -60, md: 10 },
                    bottom: { xs: -30, md: -40 },
                    width: { xs: 200, sm: 300, md: 500 },
                    height: "auto",
                    objectFit: "contain",
                    opacity: { xs: 0.22, md: 1 },
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />
        </Paper>
    );
};