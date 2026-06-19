import { Box, Chip, Paper, Typography } from "@mui/material";
import type { Tienda } from "../../types/tienda.type";
import { StoreCard } from "../molecules/store-card";

type StoresSectionProps = {
    tiendas: Tienda[];
};

export const StoresSection = ({ tiendas }: StoresSectionProps) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                    gap: 2,
                    flexWrap: "wrap",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Negocios registrados
                </Typography>

                <Chip
                    label={`${tiendas.length} tiendas encontradas`}
                    color="success"
                    variant="outlined"
                />
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    },
                    gap: 3,
                }}
            >
                {tiendas.map((tienda) => (
                    <StoreCard key={tienda.id} tienda={tienda} />
                ))}
            </Box>

            {tiendas.length === 0 && (
                <Paper
                    elevation={0}
                    sx={{
                        mt: 3,
                        p: 4,
                        textAlign: "center",
                        borderRadius: 4,
                        border: "1px dashed #cbd5e1",
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        No se encontraron tiendas
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Intenta buscar por otra categoría, ubicación o nombre de negocio.
                    </Typography>
                </Paper>
            )}
        </>
    );
};