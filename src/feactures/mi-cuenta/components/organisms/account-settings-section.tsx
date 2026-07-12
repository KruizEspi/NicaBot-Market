import { Box, Button, Paper, Typography } from "@mui/material";

export const AccountSettingsSection = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 5,
                border: "1px solid #e2e8f0",
                background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #ecfdf5 100%)",
                boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: 2,
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a" }}>
                        Configuración de cuenta
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#64748b",
                            mt: 0.7,
                            lineHeight: 1.6,
                        }}
                    >
                        Administra tus datos, preferencias y sesión dentro de NicaBot Market.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.2,
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            borderRadius: 999,
                            fontWeight: 900,
                            color: "#15803d",
                            borderColor: "#86efac",
                            backgroundColor: "#fff",
                            "&:hover": {
                                borderColor: "#16a34a",
                                backgroundColor: "#f0fdf4",
                            },
                        }}
                    >
                        Editar perfil
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            borderRadius: 999,
                            fontWeight: 900,
                            color: "#0369a1",
                            borderColor: "#bae6fd",
                            backgroundColor: "#fff",
                            "&:hover": {
                                borderColor: "#38bdf8",
                                backgroundColor: "#f0f9ff",
                            },
                        }}
                    >
                        Cambiar contraseña
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            borderRadius: 999,
                            fontWeight: 900,
                            background:
                                "linear-gradient(135deg, #dc2626 0%, #f97316 100%)",
                            boxShadow: "0 12px 28px rgba(220, 38, 38, 0.25)",
                            "&:hover": {
                                background:
                                    "linear-gradient(135deg, #b91c1c 0%, #ea580c 100%)",
                            },
                        }}
                    >
                        Cerrar sesión
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};