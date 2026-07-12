import { Box, Typography } from "@mui/material";
import { AccountActionCard } from "../molecules/account-action-card";

export const AccountActionsSection = () => {
    return (
        <Box>
            <Typography
                variant="h5"
                sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}
            >
                Accesos rápidos
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(2, minmax(0, 1fr))",
                        lg: "repeat(4, minmax(0, 1fr))",
                    },
                    gap: 2,
                }}
            >
                <AccountActionCard
                    title="Mis favoritos"
                    description="Consulta los productos y tiendas que guardaste."
                    icon="❤️"
                    to="/favoritos"
                    buttonText="Ver favoritos"
                />

                <AccountActionCard
                    title="Explorar productos"
                    description="Busca productos disponibles en negocios locales."
                    icon="🛒"
                    to="/productos"
                    buttonText="Ver productos"
                />

                <AccountActionCard
                    title="Explorar tiendas"
                    description="Revisa los comercios registrados en la plataforma."
                    icon="🏪"
                    to="/tiendas"
                    buttonText="Ver tiendas"
                />

                <AccountActionCard
                    title="Registrar tienda"
                    description="Agrega un nuevo negocio al directorio local."
                    icon="➕"
                    to="/agregar-tienda"
                    buttonText="Agregar tienda"
                />
            </Box>
        </Box>
    );
};