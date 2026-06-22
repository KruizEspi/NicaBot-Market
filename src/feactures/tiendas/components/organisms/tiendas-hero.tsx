import {Box, Paper, TextField, Typography} from "@mui/material";

type TiendasHeroProps = {
    search: string;
    onSearchChange: (value: string) => void;
};

export const TiendasHero = ({ search, onSearchChange }: TiendasHeroProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3, md: 4 },
                mb: 3,
                borderRadius: 4,
                background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
                border: "1px solid #dbeafe",
                minHeight: { xs: "auto", md: 230 },
            }}
        >
            <Box
                sx={{
                    maxWidth: { xs: "100%", md: "65%" },
                    position: "relative",
                    zIndex: 2,
                }}
            ><Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                Tiendas
            </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Explora los negocios registrados en NicaBot Market.
                </Typography>

                <TextField
                    fullWidth
                    label="Buscar tienda, categoría, ubicación o descripción"
                    value={search}
                    onChange={(event) => onSearchChange(event.target.value)}
                    sx={{
                        backgroundColor: "#fff",
                        borderRadius: 2,
                    }}
                /></Box>
            <Box
                component="img"
                src="/AveTienda.png"
                alt="Ave tienda"
                sx={{
                    position: "absolute",
                    right: { xs: -60, md: 20 },
                    bottom: { xs: -30, md: 40 },
                    width: { xs: 200, sm: 280, md: 430 },
                    height: "auto",
                    objectFit: "contain",
                    opacity: { xs: 0.25, md: 1 },
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />


        </Paper>
    );
};