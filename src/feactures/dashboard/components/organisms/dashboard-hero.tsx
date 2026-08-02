import { Box, Chip, Paper, Typography } from "@mui/material";

export const DashboardHero = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                mb: 3,
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                color: "#fff",
                background:
                    "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 28%), radial-gradient(circle at 90% 5%, rgba(250,204,21,0.25), transparent 30%)",
                },
            }}
        >
            <Box sx={{ position: "relative", zIndex: 2 }}>
                <Chip
                    label="Administrador"
                    sx={{
                        mb: 2,
                        color: "#064e3b",
                        backgroundColor: "#dcfce7",
                        fontWeight: 900,
                        borderRadius: 999,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 950,
                        fontSize: { xs: 30, md: 44 },
                        lineHeight: 1.1,
                    }}
                >
                    Dashboard General
                </Typography>

                <Typography
                    sx={{
                        mt: 1,
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 600,
                        maxWidth: 820,
                        lineHeight: 1.7,
                    }}
                >
                    Resumen administrativo de NicaBot Market: productos, tiendas, pagos
                    simulados, pedidos, delivery, comisiones y ganancias de repartidores
                    independientes.
                </Typography>
            </Box>
        </Paper>
    );
};