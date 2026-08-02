import type { UserRoleId } from "../store/use-auth-store";

export type AppRouteKey =
    | "inicio"
    | "productos"
    | "tiendas"
    | "mapa"
    | "favoritos"
    | "carrito"
    | "misPedidos"
    | "agregarTienda"
    | "agregarProducto"
    | "delivery"
    | "pedidosNegocio"
    | "miCuenta"
    | "dashboard"
    | "reportes";

export const guestPermissions: AppRouteKey[] = [
    "inicio",
    "productos",
    "tiendas",
];

export const rolePermissions: Record<UserRoleId, AppRouteKey[]> = {
    1: [
        "inicio",
        "productos",
        "tiendas",
        "mapa",
        "favoritos",
        "agregarTienda",
        "agregarProducto",
        "delivery",
        "carrito",
        "misPedidos",
        "pedidosNegocio",
        "miCuenta",
        "dashboard",
        "reportes",
    ],

    2: [
        "inicio",
        "productos",
        "tiendas",
        "mapa",
        "favoritos",
        "carrito",
        "misPedidos",
        "miCuenta",
    ],
    3: [
        "inicio",
        "productos",
        "tiendas",
        "favoritos",
        "miCuenta",
        "agregarTienda",
        "agregarProducto",
        "pedidosNegocio",
    ],

    4: [
        "inicio",
        "delivery",
        "miCuenta",
    ],
};

export const canAccessRoute = (
    routeKey: AppRouteKey,
    roleId?: UserRoleId,
) => {
    if (!roleId) {
        return guestPermissions.includes(routeKey);
    }

    return rolePermissions[roleId].includes(routeKey);
};