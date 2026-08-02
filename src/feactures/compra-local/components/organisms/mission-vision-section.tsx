import { Box, Chip, Paper, Typography } from "@mui/material";

const missionVisionItems = [
    {
        title: "Misión",
        badge: "Propósito",
        icon: "🎯",
        description:
            "Impulsar el crecimiento de pequeños y medianos negocios locales mediante una plataforma digital accesible, moderna y confiable que permita promocionar productos, recibir pedidos, conectar con clientes y fortalecer el comercio comunitario.",
        points: [
            "Digitalizar negocios locales",
            "Facilitar la búsqueda de productos",
            "Conectar clientes, tiendas y repartidores",
        ],
    },
    {
        title: "Visión",
        badge: "Proyección",
        icon: "🚀",
        description:
            "Ser una plataforma referente en Nicaragua para la digitalización del comercio local, promoviendo innovación, inclusión tecnológica y nuevas oportunidades para emprendedores, consumidores y repartidores independientes.",
        points: [
            "Comercio local más visible",
            "Compras más rápidas e inteligentes",
            "Administración con datos y reportes",
        ],
    },
];

export const MissionVisionSection = () => {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ mb: 3 }}>
                <Chip
                    label="Identidad de la plataforma"
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
                    Una plataforma creada para fortalecer el comercio local
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
                    NicaBot Market busca resolver una necesidad real: ayudar a los clientes
                    a encontrar productos más rápido y permitir que los negocios locales
                    tengan mayor presencia digital.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(2, minmax(0, 1fr))",
                    },
                    gap: 3,
                }}
            >
                {missionVisionItems.map((item) => (
                    <Paper
                        key={item.title}
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 6,
                            border: "1px solid #bbf7d0",
                            background:
                                "linear-gradient(135deg, #ffffff 0%, #f8fafc 58%, #ecfdf5 100%)",
                            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                            height: "100%",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.22s ease",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                width: 150,
                                height: 150,
                                borderRadius: "50%",
                                right: -55,
                                top: -55,
                                backgroundColor: "#dcfce7",
                            }}
                        />

                        <Box sx={{ position: "relative", zIndex: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: 2,
                                    alignItems: "flex-start",
                                    mb: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 62,
                                        height: 62,
                                        borderRadius: 5,
                                        background:
                                            "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 34,
                                        boxShadow: "0 16px 34px rgba(21, 128, 61, 0.25)",
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Chip
                                    label={item.badge}
                                    sx={{
                                        borderRadius: 999,
                                        fontWeight: 900,
                                        color: "#064e3b",
                                        backgroundColor: "#dcfce7",
                                    }}
                                />
                            </Box>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 950,
                                    color: "#064e3b",
                                    mb: 1.5,
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#475569",
                                    lineHeight: 1.8,
                                    fontWeight: 600,
                                    mb: 2.5,
                                }}
                            >
                                {item.description}
                            </Typography>

                            <Box sx={{ display: "grid", gap: 1.2 }}>
                                {item.points.map((point) => (
                                    <Box
                                        key={point}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.2,
                                            p: 1.3,
                                            borderRadius: 3,
                                            backgroundColor: "#fff",
                                            border: "1px solid #e2e8f0",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: "50%",
                                                backgroundColor: "#dcfce7",
                                                color: "#15803d",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 950,
                                                flexShrink: 0,
                                            }}
                                        >
                                            ✓
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#0f172a", fontWeight: 800 }}
                                        >
                                            {point}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};