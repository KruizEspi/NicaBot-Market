export type DashboardStat = {
    id?: number;
    title: string;
    value: string | number;

    /*
     * Campos del dashboard nuevo
     */
    subtitle?: string;
    bg?: string;
    color?: string;

    /*
     * Campos del dashboard anterior
     */
    description?: string;
    trend?: string;

    icon: string;
};

export type DashboardAction = {
    id: number;
    title: string;
    description: string;
    icon: string;
    path: string;
};

export type DashboardActivity = {
    id: number;
    title: string;
    description: string;
    time: string;
    icon?: string;
};

export type DashboardMonthlySale = {
    month: string;
    ventas: number;
};

export type DashboardCategoryData = {
    categoria: string;
    productos: number;
};

export type DashboardStoreStatus = {
    estado: string;
    cantidad: number;
};

/*
 * Tipos del dashboard nuevo
 */

export type DashboardRecentOrder = {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    status: string;
};

export type DashboardDeliveryItem = {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    status: string;
};

export type DashboardCategoryItem = {
    label: string;
    value: number;
};

export type DashboardPaymentSummary = {
    totalProcesado: number;
    totalEnvios: number;
    comisionPlataforma: number;
};

export type DashboardDeliverySummary = {
    disponibles: number;
    activos: number;
    entregados: number;
};

export type DashboardInsight = {
    icon: string;
    title: string;
    text: string;
};

export type DashboardTemplateProps = {
    stats: DashboardStat[];
    paymentSummary: DashboardPaymentSummary;
    deliverySummary: DashboardDeliverySummary;
    recentOrders: DashboardRecentOrder[];
    recentDelivery: DashboardDeliveryItem[];
    categories: DashboardCategoryItem[];
    insights: DashboardInsight[];
};