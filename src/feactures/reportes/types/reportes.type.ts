export type ReportStatus =
    | "Pagado"
    | "En delivery"
    | "Entregado"
    | "Pendiente";

export type ReportItem = {
    id: number;
    fecha: string;
    cliente: string;
    producto: string;
    tienda: string;
    total: number;
    envio: number;
    comisionPlataforma: number;
    gananciaRepartidor: number;
    estado: ReportStatus;
};

export type ReportMetric = {
    title: string;
    value: string | number;
    subtitle: string;
    icon: string;
    bg: string;
    color: string;
};

export type ReportChartItem = {
    name: string;
    value: number;
};

export type AdminReportSummary = {
    totalVentas: number;
    totalPedidos: number;
    totalTiendas: number;
    totalProductos: number;
    productosDisponibles: number;
    productosAgotados: number;
    tiendasAbiertas: number;
    tiendasCerradas: number;
    totalEnvios: number;
    totalComisionPlataforma: number;
    totalGananciaRepartidores: number;
    pedidosPagados: number;
    pedidosEnDelivery: number;
    pedidosEntregados: number;
    deliveryDisponibles: number;
    deliveryActivos: number;
    deliveryEntregados: number;
    totalBusquedas: number;
    busquedasConResultados: number;
    busquedasSinResultados: number;
};

export type AdminReportCharts = {
    productosPorCategoria: ReportChartItem[];
    estadoProductos: ReportChartItem[];
    estadoTiendas: ReportChartItem[];
    estadoPedidos: ReportChartItem[];
    estadoDelivery: ReportChartItem[];
    busquedas: ReportChartItem[];
};

export type ReportesTemplateProps = {
    summary: AdminReportSummary;
    metrics: ReportMetric[];
    charts: AdminReportCharts;
    reports: ReportItem[];
};

/*
 * Compatibilidad con tu reporte anterior de búsquedas.
 */
export type ReportSearchStatus = "Con resultados" | "Sin resultados";

export type SearchReportItem = {
    id: number;
    fecha: string;
    busqueda: string;
    categoria: string;
    tiendaEncontrada: string;
    ubicacion: string;
    resultados: number;
    estado: ReportSearchStatus;
};