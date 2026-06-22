import { Box, Paper, Typography } from "@mui/material";

export const MissionVisionSection = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(2, 1fr)",
                },
                gap: 3,
                mb: 3,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#fff",
                    height: "100%",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#2e7d32", mb: 2 }}
                >
                    Misión
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Impulsar el crecimiento de pequeños y medianos negocios locales
                    mediante una plataforma digital accesible, moderna y confiable que
                    permita promocionar productos, conectar con clientes y fortalecer el
                    comercio comunitario.
                </Typography>
            </Paper>

            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#fff",
                    height: "100%",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#2e7d32", mb: 2 }}
                >
                    Visión
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Ser una plataforma referente en Nicaragua para la digitalización del
                    comercio local, promoviendo la innovación, la inclusión tecnológica y
                    el acceso a nuevas oportunidades para emprendedores y consumidores.
                </Typography>
            </Paper>
        </Box>
    );
};