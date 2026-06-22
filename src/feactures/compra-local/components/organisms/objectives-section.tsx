import { Box, Paper, Typography } from "@mui/material";

const objectives = [
    "Facilitar la búsqueda de productos y tiendas locales desde una sola plataforma.",
    "Ayudar a pequeños negocios a tener mayor presencia digital.",
    "Promover el consumo local y la conexión entre clientes y emprendedores.",
    "Integrar asistencia inteligente para mejorar la experiencia del usuario.",
];

export const ObjectivesSection = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 3, md: 4 },
                mb: 3,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Objetivos de la plataforma
            </Typography>

            <Box
                component="ul"
                sx={{
                    m: 0,
                    pl: 0,
                    listStyle: "none",
                    display: "grid",
                    gap: 2,
                }}
            >
                {objectives.map((objective, index) => (
                    <Box
                        component="li"
                        key={objective}
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                backgroundColor: "#e8f5e9",
                                color: "#2e7d32",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                                flexShrink: 0,
                            }}
                        >
                            {index + 1}
                        </Box>

                        <Typography variant="body1" color="text.secondary">
                            {objective}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
};