import { Box, Divider, List, Typography } from "@mui/material";

import { SidebarItem } from "../molecules/sidebar-items";
import { canAccessRoute } from "../../../../shared/auth/role-permissions";
import { useAuthStore } from "../../../../shared/store/use-auth-store";

export const Sidebar = () => {
    const { user, isAuthenticated, logout } = useAuthStore();

    const roleId = user?.role.id;

    const showPrincipal =
        canAccessRoute("inicio", roleId) || canAccessRoute("dashboard", roleId);

    const showExplorar =
        canAccessRoute("productos", roleId) ||
        canAccessRoute("tiendas", roleId) ||
        canAccessRoute("mapa", roleId) ||
        canAccessRoute("favoritos", roleId);

    const showCompras =
        canAccessRoute("carrito", roleId) ||
        canAccessRoute("misPedidos", roleId);

    const showNegocio =
        canAccessRoute("agregarTienda", roleId) ||
        canAccessRoute("agregarProducto", roleId) ||
        canAccessRoute("pedidosNegocio", roleId);

    const showOperacion =
        canAccessRoute("delivery", roleId) ||
        canAccessRoute("reportes", roleId);

    const showCuenta =
        canAccessRoute("miCuenta", roleId) || !isAuthenticated || isAuthenticated;

    return (
        <Box
            sx={{
                p: 2,
                height: "calc(100vh - 86px)",
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: 4,
                    background:
                        "linear-gradient(135deg, #ecfdf5 0%, #f8fafc 60%, #ffffff 100%)",
                    border: "1px solid #bbf7d0",
                    flexShrink: 0,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 950,
                        color: "#064e3b",
                        fontSize: 19,
                        lineHeight: 1.1,
                    }}
                >
                    NicaBot Market
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        mt: 0.6,
                        color: "#64748b",
                        fontWeight: 700,
                    }}
                >
                    {user?.role.name ?? "Invitado"}
                </Typography>
            </Box>

            <List
                disablePadding
                sx={{
                    flex: 1,
                    minHeight: 0,
                    display: "grid",
                    alignContent: "start",
                    gap: 1.5,
                    overflowY: "auto",
                    overflowX: "hidden",
                    pr: 0.8,
                    pb: 2,

                    "&::-webkit-scrollbar": {
                        width: 8,
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#f1f5f9",
                        borderRadius: 999,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#86efac",
                        borderRadius: 999,
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#22c55e",
                    },
                }}
            >
                {showPrincipal && (
                    <SidebarSection title="Principal">
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
                    </SidebarSection>
                )}

                {showExplorar && (
                    <SidebarSection title="Explorar">
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
                    </SidebarSection>
                )}

                {showCompras && (
                    <SidebarSection title="Compras">
                        {canAccessRoute("carrito", roleId) && (
                            <SidebarItem
                                to="/carrito"
                                primary="Carrito"
                                secondary="Pago simulado"
                            />
                        )}

                        {canAccessRoute("misPedidos", roleId) && (
                            <SidebarItem
                                to="/mis-pedidos"
                                primary="Mis pedidos"
                                secondary="Seguimiento de compras"
                            />
                        )}
                    </SidebarSection>
                )}

                {showNegocio && (
                    <SidebarSection title="Negocio">
                        {canAccessRoute("agregarTienda", roleId) && (
                            <SidebarItem
                                to="/agregar-tienda"
                                primary="Agregar tienda"
                                secondary="Registrar negocio"
                            />
                        )}

                        {canAccessRoute("agregarProducto", roleId) && (
                            <SidebarItem
                                to="/agregar-producto"
                                primary="Agregar producto"
                                secondary="Vincular producto a tienda"
                            />
                        )}

                        {canAccessRoute("pedidosNegocio", roleId) && (
                            <SidebarItem
                                to="/pedidos-negocio"
                                primary="Pedidos negocio"
                                secondary="Enviar pedidos a delivery"
                            />
                        )}
                    </SidebarSection>
                )}

                {showOperacion && (
                    <SidebarSection title="Operación">
                        {canAccessRoute("delivery", roleId) && (
                            <SidebarItem
                                to="/delivery"
                                primary="Delivery"
                                secondary="Pedidos disponibles"
                            />
                        )}

                        {canAccessRoute("reportes", roleId) && (
                            <SidebarItem
                                to="/reportes"
                                primary="Reportes"
                                secondary="Administración general"
                            />
                        )}
                    </SidebarSection>
                )}

                {showCuenta && (
                    <SidebarSection title="Cuenta">
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
                                    mt: 0.5,
                                    p: 1.5,
                                    borderRadius: 3,
                                    cursor: "pointer",
                                    color: "#dc2626",
                                    fontWeight: 900,
                                    backgroundColor: "#fef2f2",
                                    border: "1px solid #fecaca",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "#fee2e2",
                                        transform: "translateX(4px)",
                                    },
                                }}
                            >
                                Cerrar sesión
                            </Box>
                        )}
                    </SidebarSection>
                )}
            </List>
        </Box>
    );
};

type SidebarSectionProps = {
    title: string;
    children: React.ReactNode;
};

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
    return (
        <Box>
            <Typography
                variant="caption"
                sx={{
                    display: "block",
                    mb: 0.8,
                    px: 1,
                    color: "#64748b",
                    fontWeight: 950,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                }}
            >
                {title}
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gap: 0.7,
                }}
            >
                {children}
            </Box>

            <Divider sx={{ mt: 1.5, borderColor: "#e2e8f0" }} />
        </Box>
    );
};