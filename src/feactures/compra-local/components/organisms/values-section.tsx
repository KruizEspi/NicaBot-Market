import { Box, Chip, Paper, Typography } from "@mui/material";

const values = [
    {
        title: "Innovación",
        description:
            "Aplicamos tecnología, chatbot, reportes y seguimiento para modernizar la compra local.",
        icon: "💡",
        highlight: "Tecnología útil",
    },
    {
        title: "Confianza",
        description:
            "Promovemos una experiencia clara para clientes, negocios y repartidores.",
        icon: "🤝",
        highlight: "Proceso transparente",
    },
    {
        title: "Comercio local",
        description:
            "Apoyamos el crecimiento de emprendedores, tiendas y servicios de la comunidad.",
        icon: "🏪",
        highlight: "Más visibilidad",
    },
    {
        title: "Accesibilidad",
        description:
            "Diseñamos una plataforma sencilla para que más negocios puedan digitalizarse.",
        icon: "📱",
        highlight: "Fácil de usar",
    },
    {
        title: "Eficiencia",
        description:
            "Reducimos el tiempo de búsqueda de productos y facilitamos el proceso de compra.",
        icon: "⚡",
        highlight: "Menos tiempo",
    },
    {
        title: "Administración",
        description:
            "Integramos dashboard, métricas y reportes para tomar mejores decisiones.",
        icon: "📊",
        highlight: "Datos claros",
    },
];

export const ValuesSection = () => {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ mb: 3 }}>
                <Chip
                    label="Valores"
                    sx={{
                        mb: 1.5,
                        borderRadius: 999,
                        color: "#064e3b",
                        backgroundColor: "#dcfce7",
                        fontWeight: 900,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 950,
                        color: "#0f172a",
                        fontSize: { xs: 29, md: 40 },
                        lineHeight: 1.15,
                        letterSpacing: -0.7,
                    }}
                >
                    Valores que hacen más fuerte la plataforma
                </Typography>

                <Typography
                    sx={{
                        mt: 1,
                        color: "#64748b",
                        lineHeight: 1.8,
                        maxWidth: 880,
                        fontWeight: 600,
                    }}
                >
                    NicaBot Market no solo muestra productos. También mejora la relación
                    entre clientes, negocios, repartidores y administración.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, minmax(0, 1fr))",
                        lg: "repeat(3, minmax(0, 1fr))",
                    },
                    gap: 2,
                }}
            >
                {values.map((value) => (
                    <Paper
                        key={value.title}
                        elevation={0}
                        sx={{
                            p: 2.5,
                            borderRadius: 5,
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#fff",
                            boxShadow: "0 14px 36px rgba(15, 23, 42, 0.05)",
                            transition: "all 0.22s ease",
                            position: "relative",
                            overflow: "hidden",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 22px 48px rgba(15, 23, 42, 0.12)",
                                borderColor: "#86efac",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "50%",
                                right: -32,
                                top: -32,
                                backgroundColor: "#ecfdf5",
                            }}
                        />

                        <Box sx={{ position: "relative", zIndex: 2 }}>
                            <Box
                                sx={{
                                    width: 58,
                                    height: 58,
                                    borderRadius: 4,
                                    background:
                                        "linear-gradient(135deg, #ecfdf5 0%, #dcfce7 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 32,
                                    mb: 2,
                                }}
                            >
                                {value.icon}
                            </Box>

                            <Chip
                                label={value.highlight}
                                size="small"
                                sx={{
                                    mb: 1.2,
                                    borderRadius: 999,
                                    color: "#15803d",
                                    backgroundColor: "#dcfce7",
                                    fontWeight: 900,
                                }}
                            />

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 950, color: "#0f172a", mb: 1 }}
                            >
                                {value.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#64748b",
                                    lineHeight: 1.7,
                                }}
                            >
                                {value.description}
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};