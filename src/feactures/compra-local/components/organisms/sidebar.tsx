import { Box, List, Typography } from "@mui/material";

import { SidebarItem } from "../molecules/sidebar-items";
import { canAccessRoute } from "../../../../shared/auth/role-permissions";
import { useAuthStore } from "../../../../shared/store/use-auth-store";

export const Sidebar = () => {
    const { user, isAuthenticated, logout } = useAuthStore();

    const roleId = user?.role.id;

    return (
        <Box sx={{ p: 2 }}>
            <Typography
                sx={{
                    fontWeight: 950,
                    color: "#064e3b",
                    mb: 2,
                    fontSize: 18,
                }}
            >
                NicaBot Market
            </Typography>

            <List disablePadding>
                {canAccessRoute("inicio", roleId) && (
                    <SidebarItem
                        to="/"
                        primary="Inicio"
                        secondary="Resumen de la plataforma"
                    />
                )}

                {canAccessRoute("dashboard", roleId) && (
                    <SidebarItem
                        to="/dashboard"
                        primary="Dashboard"
                        secondary="Panel administrador"
                    />
                )}

                {canAccessRoute("productos", roleId) && (
                    <SidebarItem
                        to="/productos"
                        primary="Productos"
                        secondary="Buscar productos locales"
                    />
                )}

                {canAccessRoute("tiendas", roleId) && (
                    <SidebarItem
                        to="/tiendas"
                        primary="Tiendas"
                        secondary="Negocios registrados"
                    />
                )}

                {canAccessRoute("mapa", roleId) && (
                    <SidebarItem
                        to="/mapa-tiendas"
                        primary="Mapa de tiendas"
                        secondary="Ubicación de negocios"
                    />
                )}

                {canAccessRoute("favoritos", roleId) && (
                    <SidebarItem
                        to="/favoritos"
                        primary="Favoritos"
                        secondary="Productos y tiendas guardadas"
                    />
                )}

                {canAccessRoute("agregarTienda", roleId) && (
                    <SidebarItem
                        to="/agregar-tienda"
                        primary="Agregar tienda"
                        secondary="Registrar negocio"
                    />
                )}

                {canAccessRoute("reportes", roleId) && (
                    <SidebarItem
                        to="/reportes"
                        primary="Reportes"
                        secondary="Búsquedas y resultados"
                    />
                )}

                {canAccessRoute("miCuenta", roleId) && (
                    <SidebarItem
                        to="/mi-cuenta"
                        primary="Mi cuenta"
                        secondary="Perfil y configuración"
                    />
                )}

                {!isAuthenticated && (
                    <SidebarItem
                        to="/login"
                        primary="Entrar"
                        secondary="Iniciar sesión"
                    />
                )}

                {isAuthenticated && (
                    <Box
                        onClick={logout}
                        sx={{
                            mt: 2,
                            p: 1.5,
                            borderRadius: 2,
                            cursor: "pointer",
                            color: "#dc2626",
                            fontWeight: 900,
                            backgroundColor: "#fef2f2",
                            border: "1px solid #fecaca",
                            "&:hover": {
                                backgroundColor: "#fee2e2",
                            },
                        }}
                    >
                        Cerrar sesión
                    </Box>
                )}
            </List>
        </Box>
    );
};