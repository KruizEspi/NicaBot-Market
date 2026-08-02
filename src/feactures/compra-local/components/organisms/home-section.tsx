import { NavLink } from "react-router-dom";
import { Box, Button, Chip, Paper, Typography } from "@mui/material";

const actions = [
    {
        title: "Explorar productos",
        description:
            "Busca productos locales disponibles y encuentra opciones sin recorrer varias tiendas.",
        path: "/productos",
        icon: "🛍️",
        button: "Ver productos",
    },
    {
        title: "Conocer tiendas",
        description:
            "Descubre negocios registrados, su ubicación, productos y detalles principales.",
        path: "/tiendas",
        icon: "🏪",
        button: "Ver tiendas",
    },
    {
        title: "Registrar negocio",
        description:
            "Agrega tu tienda, publica productos y empieza a tener presencia digital.",
        path: "/agregar-tienda",
        icon: "➕",
        button: "Registrar tienda",
    },
    {
        title: "Carrito y pago",
        description:
            "Simula una compra completa con productos, total, envío y confirmación de pago.",
        path: "/carrito",
        icon: "🛒",
        button: "Ir al carrito",
    },
    {
        title: "Mis pedidos",
        description:
            "Consulta el avance de tus compras desde pagado hasta entregado.",
        path: "/mis-pedidos",
        icon: "📍",
        button: "Ver seguimiento",
    },
    {
        title: "Reportes",
        description:
            "Visualiza métricas, gráficas y reportes administrativos de la plataforma.",
        path: "/reportes",
        icon: "📊",
        button: "Ver reportes",
    },
];

const benefits = [
    "Reduce el tiempo de búsqueda de productos locales.",
    "Ayuda a los negocios a digitalizar su catálogo.",
    "Integra cliente, negocio, delivery y administración.",
    "Permite seguimiento del pedido en tiempo real dentro del flujo.",
    "Genera reportes administrativos para tomar mejores decisiones.",
];

export const HomeActionsSection = () => {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ mb: 3 }}>
                <Chip
                    label="Acciones principales"
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
                    ¿Qué puedes hacer en NicaBot Market?
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
                    La plataforma permite explorar productos, conectar con negocios,
                    realizar compras simuladas, enviar pedidos a delivery y consultar
                    reportes administrativos.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1.1fr 0.9fr",
                    },
                    gap: 3,
                    alignItems: "stretch",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, minmax(0, 1fr))",
                        },
                        gap: 2,
                    }}
                >
                    {actions.map((action) => (
                        <Paper
                            key={action.title}
                            component={NavLink}
                            to={action.path}
                            elevation={0}
                            sx={{
                                p: 2.5,
                                borderRadius: 5,
                                border: "1px solid #e2e8f0",
                                backgroundColor: "#fff",
                                textDecoration: "none",
                                color: "inherit",
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
                                    right: -36,
                                    top: -36,
                                    backgroundColor: "#ecfdf5",
                                }}
                            />

                            <Box sx={{ position: "relative", zIndex: 2 }}>
                                <Box
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 4,
                                        background:
                                            "linear-gradient(135deg, #ecfdf5 0%, #dcfce7 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 31,
                                        mb: 2,
                                    }}
                                >
                                    {action.icon}
                                </Box>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 950,
                                        color: "#0f172a",
                                        mb: 0.8,
                                    }}
                                >
                                    {action.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#64748b",
                                        lineHeight: 1.7,
                                        mb: 2,
                                    }}
                                >
                                    {action.description}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#15803d",
                                        fontWeight: 950,
                                    }}
                                >
                                    {action.button} →
                                </Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>

                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 6,
                        color: "#fff",
                        background:
                            "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                        boxShadow: "0 22px 60px rgba(15, 23, 42, 0.16)",
                        position: "relative",
                        overflow: "hidden",
                        height: "100%",
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
                            label="Beneficios clave"
                            sx={{
                                mb: 2,
                                borderRadius: 999,
                                color: "#064e3b",
                                backgroundColor: "#dcfce7",
                                fontWeight: 900,
                            }}
                        />

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 950,
                                lineHeight: 1.15,
                                mb: 1.5,
                            }}
                        >
                            Una solución digital para comprar, vender y administrar mejor
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.9)",
                                lineHeight: 1.7,
                                fontWeight: 600,
                                mb: 3,
                            }}
                        >
                            NicaBot Market reúne en un solo lugar las funciones principales
                            para fortalecer el comercio local.
                        </Typography>

                        <Box sx={{ display: "grid", gap: 1.3 }}>
                            {benefits.map((benefit) => (
                                <Box
                                    key={benefit}
                                    sx={{
                                        display: "flex",
                                        gap: 1.2,
                                        alignItems: "flex-start",
                                        p: 1.4,
                                        borderRadius: 3,
                                        backgroundColor: "rgba(255,255,255,0.12)",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 28,
                                            height: 28,
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
                                        sx={{
                                            color: "#fff",
                                            lineHeight: 1.6,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {benefit}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Button
                            component={NavLink}
                            to="/productos"
                            variant="contained"
                            sx={{
                                mt: 3,
                                textTransform: "none",
                                borderRadius: 999,
                                px: 3,
                                py: 1.2,
                                fontWeight: 950,
                                color: "#064e3b",
                                background:
                                    "linear-gradient(135deg, #facc15 0%, #fde047 100%)",
                                boxShadow: "0 16px 34px rgba(250, 204, 21, 0.32)",
                                textDecoration: "none",
                                "&:hover": {
                                    background:
                                        "linear-gradient(135deg, #fde047 0%, #facc15 100%)",
                                },
                            }}
                        >
                            Comenzar a explorar
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};