import { Paper, TextField, Typography } from "@mui/material";

type TiendasHeroProps = {
    search: string;
    onSearchChange: (value: string) => void;
};

export const TiendasHero = ({ search, onSearchChange }: TiendasHeroProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 3, md: 4 },
                mb: 3,
                borderRadius: 4,
                background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
                border: "1px solid #dbeafe",
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
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
            />
        </Paper>
    );
};