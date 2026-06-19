import type {
    DashboardAction,
    DashboardActivity,
    DashboardCategoryData,
    DashboardMonthlySale,
    DashboardStat,
    DashboardStoreStatus,
} from "../types/dashboard.type";

export const dashboardStatsMock: DashboardStat[] = [
    {
        id: 1,
        title: "Tiendas registradas",
        value: "126",
        description: "Negocios activos en la plataforma",
        icon: "🏪",
        trend: "+18%",
    },
    {
        id: 2,
        title: "Productos publicados",
        value: "842",
        description: "Productos disponibles para clientes",
        icon: "🛍️",
        trend: "+24%",
    },
    {
        id: 3,
        title: "Ventas estimadas",
        value: "C$ 58.4K",
        description: "Movimiento comercial mensual",
        icon: "💰",
        trend: "+12%",
    },
    {
        id: 4,
        title: "Solicitudes",
        value: "14",
        description: "Tiendas pendientes de revisión",
        icon: "📋",
        trend: "-3%",
    },
];

export const dashboardActionsMock: DashboardAction[] = [
    {
        id: 1,
        title: "Ver tiendas",
        description: "Consulta los negocios registrados.",
        path: "/tiendas",
        icon: "🏪",
    },
    {
        id: 2,
        title: "Ver productos",
        description: "Explora productos locales publicados.",
        path: "/productos",
        icon: "🛍️",
    },
    {
        id: 3,
        title: "Registrar tienda",
        description: "Agrega un nuevo negocio a NicaBot Market.",
        path: "/agregar-tienda",
        icon: "➕",
    },
];

export const dashboardActivityMock: DashboardActivity[] = [
    {
        id: 1,
        title: "Nueva tienda registrada",
        description: "Pulpería El Buen Precio fue agregada a la plataforma.",
        time: "Hace 10 minutos",
    },
    {
        id: 2,
        title: "Producto actualizado",
        description: "Café molido nicaragüense cambió su estado a disponible.",
        time: "Hace 35 minutos",
    },
    {
        id: 3,
        title: "Solicitud pendiente",
        description: "Una nueva tienda espera aprobación del administrador.",
        time: "Hace 1 hora",
    },
];

export const monthlySalesMock: DashboardMonthlySale[] = [
    { month: "Ene", ventas: 12000 },
    { month: "Feb", ventas: 18000 },
    { month: "Mar", ventas: 15000 },
    { month: "Abr", ventas: 24000 },
    { month: "May", ventas: 31000 },
    { month: "Jun", ventas: 58400 },
];

export const categoryProductsMock: DashboardCategoryData[] = [
    { categoria: "Comida", productos: 180 },
    { categoria: "Ropa", productos: 130 },
    { categoria: "Tecnología", productos: 95 },
    { categoria: "Artesanía", productos: 160 },
    { categoria: "Salud", productos: 85 },
];

export const storeStatusMock: DashboardStoreStatus[] = [
    { estado: "Abiertas", cantidad: 96 },
    { estado: "Cerradas", cantidad: 30 },
];