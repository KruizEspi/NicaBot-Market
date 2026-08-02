import { Box, Chip, Paper, Typography } from "@mui/material";

const objectives = [
    {
        title: "Facilitar la búsqueda",
        description:
            "Permitir que los usuarios encuentren productos y tiendas locales desde una sola plataforma.",
        icon: "🔎",
    },
    {
        title: "Digitalizar negocios",
        description:
            "Ayudar a pequeños negocios a tener presencia digital, publicar productos y recibir pedidos.",
        icon: "🏪",
    },
    {
        title: "Mejorar la compra",
        description:
            "Integrar carrito, pago simulado y seguimiento para representar un flujo completo de compra.",
        icon: "🛒",
    },
    {
        title: "Conectar delivery",
        description:
            "Permitir que pedidos preparados por negocios sean tomados por repartidores independientes.",
        icon: "🛵",
    },
    {
        title: "Administrar con datos",
        description:
            "Ofrecer dashboard, métricas y reportes PDF para controlar la actividad general de la plataforma.",
        icon: "📊",
    },
];

export const ObjectivesSection = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 3, md: 4 },
                mb: 4,
                borderRadius: 6,
                border: "1px solid #bbf7d0",
                background:
                    "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                color: "#fff",
                boxShadow: "0 22px 60px rgba(15, 23, 42, 0.16)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 18% 15%, rgba(255,255,255,0.22), transparent 25%), radial-gradient(circle at 88% 10%, rgba(250,204,21,0.28), transparent 30%)",
                },
            }}
        >
            <Box sx={{ position: "relative", zIndex: 2 }}>
                <Chip
                    label="Objetivos"
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
                        fontSize: { xs: 29, md: 40 },
                        lineHeight: 1.15,
                        letterSpacing: -0.7,
                        maxWidth: 880,
                    }}
                >
                    Objetivos principales de NicaBot Market
                </Typography>

                <Typography
                    sx={{
                        mt: 1,
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.8,
                        maxWidth: 880,
                        fontWeight: 600,
                    }}
                >
                    La plataforma busca mejorar la forma en que los clientes encuentran
                    productos, los negocios venden y la administración controla el
                    comportamiento general del sistema.
                </Typography>

                <Box
                    component="ul"
                    sx={{
                        mt: 3,
                        m: 0,
                        pl: 0,
                        listStyle: "none",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(2, minmax(0, 1fr))",
                            xl: "repeat(5, minmax(0, 1fr))",
                        },
                        gap: 2,
                    }}
                >
                    {objectives.map((objective, index) => (
                        <Box component="li" key={objective.title}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2,
                                    borderRadius: 5,
                                    height: "90%",
                                    backgroundColor: "rgba(255,255,255,0.94)",
                                    border: "1px solid rgba(255,255,255,0.36)",
                                    color: "#0f172a",
                                    boxShadow: "0 12px 34px rgba(15, 23, 42, 0.12)",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        gap: 1,
                                        mb: 1.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 4,
                                            backgroundColor: "#ecfdf5",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 28,
                                        }}
                                    >
                                        {objective.icon}
                                    </Box>

                                    <Box
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: "50%",
                                            backgroundColor: "#15803d",
                                            color: "#fff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 950,
                                            flexShrink: 0,
                                        }}
                                    >
                                        {index + 1}
                                    </Box>
                                </Box>

                                <Typography
                                    sx={{
                                        fontWeight: 950,
                                        color: "#064e3b",
                                        mb: 0.8,
                                    }}
                                >
                                    {objective.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#64748b",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {objective.description}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
};