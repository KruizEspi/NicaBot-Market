import { Box, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const actions = [
    {
        title: "Productos",
        description: "Explora productos ofrecidos por negocios locales.",
        path: "/productos",
        icon: "🛍️",
    },
    {
        title: "Tiendas",
        description: "Conoce los negocios registrados dentro de la plataforma.",
        path: "/tiendas",
        icon: "🏪",
    },
    {
        title: "Registrar tienda",
        description: "Agrega tu negocio y empieza a promocionar tus productos.",
        path: "/agregar-tienda",
        icon: "➕",
    },
];

export const HomeActionsSection = () => {
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                ¿Qué puedes hacer?
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(3, 1fr)",
                    },
                    gap: 3,
                }}
            >
                {actions.map((action) => (
                    <Paper
                        key={action.title}
                        component={NavLink}
                        to={action.path}
                        elevation={0}
                        sx={{
                            p: 3,
                            borderRadius: 4,
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#fff",
                            textDecoration: "none",
                            color: "inherit",
                            transition: "0.2s ease",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 14px 35px rgba(15, 23, 42, 0.12)",
                                borderColor: "#4cae50",
                            },
                        }}
                    >
                        <Typography sx={{ fontSize: 38, mb: 1 }}>{action.icon}</Typography>

                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                            {action.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {action.description}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};