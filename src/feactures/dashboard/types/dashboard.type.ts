export type DashboardStat = {
    id: number;
    title: string;
    value: string;
    description: string;
    icon: string;
    trend?: string;
};

export type DashboardAction = {
    id: number;
    title: string;
    description: string;
    path: string;
    icon: string;
};

export type DashboardActivity = {
    id: number;
    title: string;
    description: string;
    time: string;
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