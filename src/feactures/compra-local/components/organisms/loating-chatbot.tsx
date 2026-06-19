import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";

type FloatingChatbotProps = {
    open: boolean;
    onToggle: () => void;
};

export const FloatingChatbot = ({ open, onToggle }: FloatingChatbotProps) => {
    return (
        <Box
            sx={{
                position: "fixed",
                right: 24,
                bottom: 24,
                zIndex: 1200,
            }}
        >
            {open && (
                <Paper
                    elevation={8}
                    sx={{
                        width: { xs: 300, sm: 360 },
                        height: 430,
                        mb: 2,
                        borderRadius: 4,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            p: 2,
                            backgroundColor: "#4cae50",
                            color: "#fff",
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            NicaBot Asistente
                        </Typography>

                        <Typography variant="caption">En espera para ayudarte</Typography>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            p: 2,
                            backgroundColor: "#f8fafc",
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                border: "1px solid #e2e8f0",
                                mb: 2,
                            }}
                        >
                            <Typography variant="body2">
                                Hola 👋 Soy NicaBot. Cuando esté activo podré ayudarte a buscar
                                productos, tiendas y recomendaciones locales.
                            </Typography>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: 3,
                                backgroundColor: "#e8f5e9",
                                border: "1px solid #c8e6c9",
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                Estado actual: chatbot en espera...
                            </Typography>
                        </Paper>
                    </Box>

                    <Box
                        sx={{
                            p: 2,
                            borderTop: "1px solid #e2e8f0",
                            backgroundColor: "#fff",
                        }}
                    >
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="El asistente estará disponible pronto..."
                            disabled
                        />
                    </Box>
                </Paper>
            )}

            <IconButton
                onClick={onToggle}
                sx={{
                    width: 64,
                    height: 64,
                    backgroundColor: "#4cae50",
                    color: "#fff",
                    boxShadow: "0 12px 30px rgba(76, 174, 80, 0.35)",
                    "&:hover": {
                        backgroundColor: "#3f9844",
                    },
                }}
            >
                💬
            </IconButton>
        </Box>
    );
};