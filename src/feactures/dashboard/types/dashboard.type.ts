export type DashboardStat = {
    title: string;
    value: string | number;
    subtitle: string;
    icon: string;
    bg: string;
    color: string;
};

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

/**
 * Estos dos tipos los dejamos para que tus componentes viejos
 * dashboard-action-card.tsx y dashboard-activity-items.tsx
 * no den error mientras vamos migrando el dashboard.
 */
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
    icon: string;
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