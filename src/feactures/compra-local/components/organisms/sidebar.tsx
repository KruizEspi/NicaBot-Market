import { Box, Divider, List, Typography } from "@mui/material";
import { SidebarItem } from "../molecules/sidebar-items";

export const Sidebar = () => {
    return (
        <Box sx={{ width: 280 }}>
            <Box
                sx={{
                    p: 2,
                    borderBottom: "1px solid #e2e8f0",
                    backgroundColor: "#fff",
                }}
            >
                <Box
                    component="img"
                    src="/FondoAve.png"
                    alt="NicaBot Market"
                    sx={{
                        width: "100%",
                        height: 150,
                        objectFit: "contain",
                        display: "block",
                        borderRadius: 3,
                        backgroundColor: "#f8fafc",
                    }}
                />

                <Typography
                    variant="h6"
                    sx={{
                        mt: 2,
                        fontWeight: "bold",
                        color: "#1e293b",
                    }}
                >
                    NicaBot Market
                </Typography>

                <Typography variant="body2" sx={{ color: "#64748b" }}>
                    Marketplace local con asistencia inteligente.
                </Typography>
            </Box>

            <List sx={{ p: 1 }}>
                <SidebarItem
                    to="/"
                    primary="Inicio"
                    secondary="Resumen de la plataforma"
                />

                <SidebarItem
                    to="/dashboard"
                    primary="Dashboard"
                    secondary="Panel de administración"
                />

                <SidebarItem
                    to="/productos"
                    primary="Productos"
                    secondary="Buscar productos locales"
                />

                <SidebarItem
                    to="/tiendas"
                    primary="Tiendas"
                    secondary="Negocios registrados"
                />

                <SidebarItem
                    to="/agregar-tienda"
                    primary="Agregar tienda"
                    secondary="Registrar un negocio"
                />
            </List>

            <Divider />

            <List sx={{ p: 1 }}>
                <SidebarItem primary="Favoritos" />
                <SidebarItem primary="Mi cuenta" />
                <SidebarItem primary="Configuración" />
            </List>
        </Box>
    );
};