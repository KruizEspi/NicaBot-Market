import {
    Avatar,
    Box,
    Chip,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

type FloatingChatbotProps = {
    open: boolean;
    onToggle: () => void;
};

export const FloatingChatbot = ({ open, onToggle }: FloatingChatbotProps) => {
    return (
        <Box
            sx={{
                position: "fixed",
                right: { xs: 16, md: 24 },
                bottom: { xs: 16, md: 24 },
                zIndex: 1200,
            }}
        >
            {open && (
                <Paper
                    elevation={0}
                    sx={{
                        width: { xs: "calc(100vw - 32px)", sm: 390 },
                        height: { xs: 480, sm: 520 },
                        mb: 2,
                        borderRadius: 5,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid rgba(34, 197, 94, 0.28)",
                        background:
                            "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                        boxShadow:
                            "0 28px 80px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(255,255,255,0.6)",
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            p: 2,
                            color: "#fff",
                            background:
                                "linear-gradient(135deg, #064e3b 0%, #15803d 45%, #22c55e 100%)",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.25), transparent 26%), radial-gradient(circle at 85% 20%, rgba(250,204,21,0.22), transparent 28%)",
                                pointerEvents: "none",
                            },
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1.5}
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={1.5}
                                sx={{ alignItems: "center" }}
                            >
                                <Avatar
                                    sx={{
                                        width: 46,
                                        height: 46,
                                        backgroundColor: "#facc15",
                                        color: "#064e3b",
                                        fontWeight: 900,
                                        boxShadow: "0 10px 24px rgba(0,0,0,0.22)",
                                    }}
                                >
                                    N
                                </Avatar>

                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 900,
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        NicaBot Asistente
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        spacing={0.7}
                                        sx={{ alignItems: "center", mt: 0.5 }}
                                    >
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                backgroundColor: "#facc15",
                                                boxShadow: "0 0 12px rgba(250,204,21,0.95)",
                                            }}
                                        />

                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "rgba(255,255,255,0.88)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Modo espera inteligente
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>

                            <IconButton
                                size="small"
                                onClick={onToggle}
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "rgba(255,255,255,0.14)",
                                    border: "1px solid rgba(255,255,255,0.22)",
                                    "&:hover": {
                                        backgroundColor: "rgba(255,255,255,0.22)",
                                    },
                                }}
                            >
                                ✕
                            </IconButton>
                        </Stack>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            p: 2,
                            overflowY: "auto",
                            background:
                                "radial-gradient(circle at top right, rgba(34,197,94,0.10), transparent 30%), #f8fafc",
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 1.7,
                                mb: 1.5,
                                maxWidth: "88%",
                                borderRadius: "18px 18px 18px 6px",
                                backgroundColor: "#fff",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#0f172a",
                                    lineHeight: 1.6,
                                }}
                            >
                                Hola 👋 Soy <strong>NicaBot</strong>, tu asistente para buscar
                                productos, tiendas y recomendaciones locales.
                            </Typography>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 1.7,
                                mb: 1.5,
                                maxWidth: "92%",
                                borderRadius: "18px 18px 18px 6px",
                                backgroundColor: "#ecfdf5",
                                border: "1px solid #bbf7d0",
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#166534",
                                    lineHeight: 1.6,
                                    fontWeight: 600,
                                }}
                            >
                                Cuando esté activo podré ayudarte a encontrar productos por
                                nombre, categoría, tienda o ubicación.
                            </Typography>
                        </Paper>

                        <Box
                            sx={{
                                mt: 2,
                                p: 1.5,
                                borderRadius: 4,
                                backgroundColor: "#fff",
                                border: "1px solid #e2e8f0",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    display: "block",
                                    mb: 1,
                                    color: "#64748b",
                                    fontWeight: 800,
                                    textTransform: "uppercase",
                                    letterSpacing: 0.6,
                                }}
                            >
                                Próximas funciones
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    flexWrap: "wrap",
                                    gap: 1,
                                }}
                            >
                                <Chip
                                    label="Buscar productos"
                                    size="small"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#166534",
                                        backgroundColor: "#dcfce7",
                                    }}
                                />

                                <Chip
                                    label="Recomendar tiendas"
                                    size="small"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#075985",
                                        backgroundColor: "#e0f2fe",
                                    }}
                                />

                                <Chip
                                    label="Ofertas locales"
                                    size="small"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#92400e",
                                        backgroundColor: "#fef3c7",
                                    }}
                                />

                                <Chip
                                    label="Asistencia IA"
                                    size="small"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#6d28d9",
                                        backgroundColor: "#ede9fe",
                                    }}
                                />
                            </Stack>
                        </Box>

                        <Box
                            sx={{
                                mt: 2,
                                p: 1.5,
                                borderRadius: 4,
                                background:
                                    "linear-gradient(135deg, #064e3b 0%, #15803d 100%)",
                                color: "#fff",
                                boxShadow: "0 14px 32px rgba(21,128,61,0.25)",
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 0.5,
                                }}
                            >
                                Estado del asistente
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{
                                    color: "rgba(255,255,255,0.84)",
                                    lineHeight: 1.5,
                                    display: "block",
                                }}
                            >
                                Chatbot en espera. El módulo de inteligencia estará disponible
                                próximamente.
                            </Typography>
                        </Box>
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
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 999,
                                    backgroundColor: "#f8fafc",
                                    fontWeight: 600,
                                },
                            }}
                        />
                    </Box>
                </Paper>
            )}

            <IconButton
                onClick={onToggle}
                sx={{
                    position: "relative",
                    width: 68,
                    height: 68,
                    background:
                        "linear-gradient(135deg, #064e3b 0%, #16a34a 55%, #22c55e 100%)",
                    color: "#fff",
                    boxShadow:
                        "0 18px 42px rgba(21,128,61,0.45), 0 0 0 8px rgba(34,197,94,0.12)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    overflow: "hidden",
                    transition: "all 0.22s ease",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: -8,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(250,204,21,0.35), transparent 60%)",
                        opacity: open ? 0.4 : 1,
                    },
                    "&:hover": {
                        transform: "translateY(-4px) scale(1.03)",
                        boxShadow:
                            "0 24px 54px rgba(21,128,61,0.55), 0 0 0 10px rgba(34,197,94,0.16)",
                    },
                }}
            >
                <Box
                    component="img"
                    src={open ? "/ave-chatbot.png" : "/ave-chatbot.png"}
                    alt={open ? "Cerrar chat" : "NicaBot"}
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        width: open ? 30 : 48,
                        height: open ? 30 : 48,
                        objectFit: "contain",
                        transition: "all 0.2s ease",
                    }}
                />
            </IconButton>
        </Box>
    );
};