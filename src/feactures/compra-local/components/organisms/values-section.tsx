import { Box, Paper, Typography } from "@mui/material";

const values = [
    {
        title: "Innovación",
        description:
            "Aplicamos tecnología para mejorar la forma en que los negocios locales llegan a sus clientes.",
        icon: "💡",
    },
    {
        title: "Confianza",
        description:
            "Promovemos un entorno seguro y transparente para negocios y consumidores.",
        icon: "🤝",
    },
    {
        title: "Comercio local",
        description:
            "Apoyamos el crecimiento de emprendedores, tiendas y servicios de la comunidad.",
        icon: "🏪",
    },
    {
        title: "Accesibilidad",
        description:
            "Diseñamos una plataforma sencilla para que más negocios puedan digitalizarse.",
        icon: "📱",
    },
];

export const ValuesSection = () => {
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Nuestros valores
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        lg: "repeat(4, 1fr)",
                    },
                    gap: 3,
                }}
            >
                {values.map((value) => (
                    <Paper
                        key={value.title}
                        elevation={0}
                        sx={{
                            p: 3,
                            borderRadius: 4,
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#fff",
                            transition: "0.2s ease",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 14px 35px rgba(15, 23, 42, 0.10)",
                            },
                        }}
                    >
                        <Typography sx={{ fontSize: 34, mb: 1 }}>{value.icon}</Typography>

                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                            {value.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {value.description}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};