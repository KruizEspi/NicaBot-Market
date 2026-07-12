import { Box, Typography } from "@mui/material";
import { useFavoritesStore } from "../../../favoritos/store/use-favorites-store";
import { AccountStatCard } from "../molecules/account-stat-card";

export const AccountStatsSection = () => {
    const { favoriteProducts, favoriteStores } = useFavoritesStore();

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}
            >
                Resumen de actividad
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(3, minmax(0, 1fr))",
                    },
                    gap: 2,
                }}
            >
                <AccountStatCard
                    title="Productos favoritos"
                    value={favoriteProducts.length}
                    icon="🛍️"
                    description="Productos guardados para consultar después."
                    bg="linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)"
                    color="#15803d"
                />

                <AccountStatCard
                    title="Tiendas favoritas"
                    value={favoriteStores.length}
                    icon="🏪"
                    description="Negocios locales marcados como favoritos."
                    bg="linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)"
                    color="#0369a1"
                />

                <AccountStatCard
                    title="Consultas recientes"
                    value={12}
                    icon="🤖"
                    description="Interacciones estimadas con la plataforma."
                    bg="linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)"
                    color="#92400e"
                />
            </Box>
        </Box>
    );
};