import { tiendasMock } from "../../tiendas/data/tiendas.mock";
import { useProductosStore } from "../../productos/store/use-producto-store";
import { useCartStore } from "../../carrito/store/use-cart-store";
import { useDeliveryStore } from "../../delivery/store/use-delivery-store";
import { searchReportsMock } from "../data/reportes.mock";
import { ReportesTemplate } from "../components/templates/reportes-template";
import type {
    AdminReportCharts,
    AdminReportSummary,
    ReportChartItem,
    ReportItem,
    ReportMetric,
    ReportStatus,
} from "../types/reportes.type";

export default function ReportesPage() {
    const { productos } = useProductosStore();
    const { orders } = useCartStore();
    const { orders: deliveryOrders } = useDeliveryStore();

    const reports: ReportItem[] = orders.map((order) => {
        const firstProduct = order.items[0]?.producto;

        const relatedDelivery = deliveryOrders.find((delivery) =>
            delivery.producto.includes(firstProduct?.nombre ?? ""),
        );

        return {
            id: order.id,
            fecha: new Date(order.createdAt).toLocaleDateString(),
            cliente: order.customerName,
            producto: order.items
                .map((item) => `${item.quantity}x ${item.producto.nombre}`)
                .join(", "),
            tienda: firstProduct?.tienda ?? "Sin tienda",
            total: order.total,
            envio: order.shippingCost,
            comisionPlataforma: relatedDelivery?.comisionPlataforma ?? 0,
            gananciaRepartidor: relatedDelivery?.comisionRepartidor ?? 0,
            estado: order.status as ReportStatus,
        };
    });

    const totalVentas = reports.reduce((total, item) => total + item.total, 0);
    const totalEnvios = reports.reduce((total, item) => total + item.envio, 0);

    const totalComisionPlataforma = reports.reduce(
        (total, item) => total + item.comisionPlataforma,
        0,
    );

    const totalGananciaRepartidores = reports.reduce(
        (total, item) => total + item.gananciaRepartidor,
        0,
    );

    const productosDisponibles = productos.filter(
        (producto) => producto.estado === "Disponible",
    ).length;

    const productosAgotados = productos.filter(
        (producto) => producto.estado === "Agotado",
    ).length;

    const tiendasAbiertas = tiendasMock.filter(
        (tienda) => tienda.estado === "Abierto",
    ).length;

    const tiendasCerradas = tiendasMock.filter(
        (tienda) => tienda.estado === "Cerrado",
    ).length;

    const pedidosPagados = reports.filter(
        (item) => item.estado === "Pagado",
    ).length;

    const pedidosEnDelivery = reports.filter(
        (item) => item.estado === "En delivery",
    ).length;

    const pedidosEntregados = reports.filter(
        (item) => item.estado === "Entregado",
    ).length;

    const deliveryDisponibles = deliveryOrders.filter(
        (order) => order.estado === "Disponible",
    ).length;

    const deliveryActivos = deliveryOrders.filter(
        (order) =>
            order.estado === "Aceptado" ||
            order.estado === "En camino a tienda" ||
            order.estado === "Recogido" ||
            order.estado === "En camino al cliente",
    ).length;

    const deliveryEntregados = deliveryOrders.filter(
        (order) => order.estado === "Entregado",
    ).length;

    const busquedasConResultados = searchReportsMock.filter(
        (item) => item.estado === "Con resultados",
    ).length;

    const busquedasSinResultados = searchReportsMock.filter(
        (item) => item.estado === "Sin resultados",
    ).length;

    const productosPorCategoria = productos.reduce<Record<string, number>>(
        (acc, producto) => {
            acc[producto.categoria] = (acc[producto.categoria] || 0) + 1;
            return acc;
        },
        {},
    );

    const toChartItems = (items: Record<string, number>): ReportChartItem[] =>
        Object.entries(items).map(([name, value]) => ({
            name,
            value,
        }));

    const summary: AdminReportSummary = {
        totalVentas,
        totalPedidos: reports.length,
        totalTiendas: tiendasMock.length,
        totalProductos: productos.length,
        productosDisponibles,
        productosAgotados,
        tiendasAbiertas,
        tiendasCerradas,
        totalEnvios,
        totalComisionPlataforma,
        totalGananciaRepartidores,
        pedidosPagados,
        pedidosEnDelivery,
        pedidosEntregados,
        deliveryDisponibles,
        deliveryActivos,
        deliveryEntregados,
        totalBusquedas: searchReportsMock.length,
        busquedasConResultados,
        busquedasSinResultados,
    };

    const metrics: ReportMetric[] = [
        {
            title: "Total vendido",
            value: `C$ ${summary.totalVentas}`,
            subtitle: "Pagos simulados procesados",
            icon: "💳",
            bg: "#ecfdf5",
            color: "#15803d",
        },
        {
            title: "Pedidos",
            value: summary.totalPedidos,
            subtitle: "Pedidos generados",
            icon: "🧾",
            bg: "#eff6ff",
            color: "#0369a1",
        },
        {
            title: "Tiendas",
            value: summary.totalTiendas,
            subtitle: "Negocios registrados",
            icon: "🏪",
            bg: "#f0fdf4",
            color: "#166534",
        },
        {
            title: "Productos",
            value: summary.totalProductos,
            subtitle: "Productos publicados",
            icon: "🛍️",
            bg: "#f8fafc",
            color: "#0f172a",
        },
        {
            title: "Comisión plataforma",
            value: `C$ ${summary.totalComisionPlataforma}`,
            subtitle: "Por delivery",
            icon: "📈",
            bg: "#fef2f2",
            color: "#b91c1c",
        },
        {
            title: "Ganancia repartidores",
            value: `C$ ${summary.totalGananciaRepartidores}`,
            subtitle: "Ingreso generado",
            icon: "💵",
            bg: "#fefce8",
            color: "#a16207",
        },
        {
            title: "Búsquedas",
            value: summary.totalBusquedas,
            subtitle: "Consultas realizadas",
            icon: "🔎",
            bg: "#f0f9ff",
            color: "#075985",
        },
        {
            title: "Delivery activos",
            value: summary.deliveryActivos,
            subtitle: "Entregas en proceso",
            icon: "🛵",
            bg: "#fffbeb",
            color: "#92400e",
        },
    ];

    const charts: AdminReportCharts = {
        productosPorCategoria: toChartItems(productosPorCategoria),
        estadoProductos: [
            { name: "Disponibles", value: productosDisponibles },
            { name: "Agotados", value: productosAgotados },
        ],
        estadoTiendas: [
            { name: "Abiertas", value: tiendasAbiertas },
            { name: "Cerradas", value: tiendasCerradas },
        ],
        estadoPedidos: [
            { name: "Pagados", value: pedidosPagados },
            { name: "En delivery", value: pedidosEnDelivery },
            { name: "Entregados", value: pedidosEntregados },
        ],
        estadoDelivery: [
            { name: "Disponibles", value: deliveryDisponibles },
            { name: "Activos", value: deliveryActivos },
            { name: "Entregados", value: deliveryEntregados },
        ],
        busquedas: [
            { name: "Con resultados", value: busquedasConResultados },
            { name: "Sin resultados", value: busquedasSinResultados },
        ],
    };

    return (
        <ReportesTemplate
            summary={summary}
            metrics={metrics}
            charts={charts}
            reports={reports}
        />
    );
}