import { Box, Paper, Typography } from "@mui/material";

import { DashboardActionCard } from "../molecules/dashboard-action-card";
import type { DashboardInsight } from "../../types/dashboard.type";

type DashboardActionsSectionProps = {
    insights: DashboardInsight[];
};

const flowSteps = [
    {
        title: "Cliente compra",
        description: "Agrega productos al carrito y realiza un pago simulado.",
        icon: "🛒",
    },
    {
        title: "Pago procesado",
        description: "La plataforma registra el pedido como pagado.",
        icon: "💳",
    },
    {
        title: "Negocio prepara",
        description: "El negocio revisa el pedido y lo envía a delivery.",
        icon: "🏪",
    },
    {
        title: "Delivery disponible",
        description: "El pedido aparece para motorizados independientes.",
        icon: "📦",
    },
    {
        title: "Repartidor entrega",
        description: "Un repartidor toma el pedido y completa la entrega.",
        icon: "🛵",
    },
];

export const DashboardActionsSection = ({
                                            insights,
                                        }: DashboardActionsSectionProps) => {
    return (
        <Box sx={{ display: "grid", gap: 3 }}>
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 5,
                    border: "1px solid #e2e8f0",
                    background:
                        "linear-gradient(135deg, #ffffff 0%, #f8fafc 55%, #ecfdf5 100%)",
                    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                }}
            >
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 950, color: "#0f172a" }}>
                        Diagrama operativo
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#64748b",
                            mt: 0.5,
                            lineHeight: 1.6,
                        }}
                    >
                        Flujo completo desde la compra del cliente hasta la entrega realizada
                        por un repartidor independiente.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(5, minmax(0, 1fr))",
                        },
                        gap: 2,
                        alignItems: "stretch",
                    }}
                >
                    {flowSteps.map((step, index) => (
                        <Box
                            key={step.title}
                            sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    p: 2,
                                    borderRadius: 5,
                                    border: "1px solid #bbf7d0",
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.05)",
                                    position: "relative",
                                    zIndex: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 54,
                                        height: 54,
                                        mx: "auto",
                                        mb: 1.5,
                                        borderRadius: 4,
                                        background:
                                            "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 30,
                                    }}
                                >
                                    {step.icon}
                                </Box>

                                <Typography
                                    sx={{
                                        fontWeight: 950,
                                        color: "#0f172a",
                                        mb: 0.8,
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#64748b",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Paper>

                            {index < flowSteps.length - 1 && (
                                <Box
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        position: "absolute",
                                        right: -22,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        zIndex: 5,
                                        width: 42,
                                        height: 42,
                                        borderRadius: 999,
                                        backgroundColor: "#15803d",
                                        color: "#fff",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: 950,
                                        boxShadow: "0 12px 30px rgba(21, 128, 61, 0.28)",
                                    }}
                                >
                                    →
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Paper>

            <Paper
                elevation={0}
                sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 5,
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#fff",
                    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                }}
            >
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 950, color: "#0f172a" }}>
                        Resumen operativo
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#64748b",
                            mt: 0.5,
                            lineHeight: 1.6,
                        }}
                    >
                        Lectura rápida del estado general de NicaBot Market.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(2, minmax(0, 1fr))",
                        },
                        gap: 1.5,
                    }}
                >
                    {insights.map((insight) => (
                        <DashboardActionCard key={insight.title} insight={insight} />
                    ))}
                </Box>
            </Paper>
        </Box>
    );
};