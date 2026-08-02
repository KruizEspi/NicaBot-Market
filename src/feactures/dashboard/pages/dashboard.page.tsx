import { tiendasMock } from "../../tiendas/data/tiendas.mock";
import { useProductosStore } from "../../productos/store/use-producto-store";
import { useCartStore } from "../../carrito/store/use-cart-store";
import { useDeliveryStore } from "../../delivery/store/use-delivery-store";
import { DashboardTemplate } from "../templates/dashboard-template";
import type {
    DashboardCategoryItem,
    DashboardDeliveryItem,
    DashboardInsight,
    DashboardRecentOrder,
    DashboardStat,
} from "../types/dashboard.type";

export default function DashboardPage() {
    const { productos } = useProductosStore();
    const { orders } = useCartStore();
    const { orders: deliveryOrders } = useDeliveryStore();

    const totalProductos = productos.length;
    const totalTiendas = tiendasMock.length;

    const totalVendido = orders.reduce((total, order) => total + order.total, 0);

    const pedidosPagados = orders.filter(
        (order) => order.status === "Pagado",
    ).length;

    const pedidosEnDelivery = orders.filter(
        (order) => order.status === "En delivery",
    ).length;

    const totalEnvios = deliveryOrders.length;

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

    const gananciaRepartidores = deliveryOrders.reduce(
        (total, order) => total + order.comisionRepartidor,
        0,
    );

    const comisionPlataforma = deliveryOrders.reduce(
        (total, order) => total + order.comisionPlataforma,
        0,
    );

    const totalEnviosPagados = orders.reduce(
        (total, order) => total + order.shippingCost,
        0,
    );

    const productosPorCategoria = productos.reduce<Record<string, number>>(
        (acc, producto) => {
            acc[producto.categoria] = (acc[producto.categoria] || 0) + 1;
            return acc;
        },
        {},
    );

    const categories: DashboardCategoryItem[] = Object.entries(
        productosPorCategoria,
    )
        .map(([label, value]) => ({
            label,
            value,
        }))
        .slice(0, 6);

    const recentOrders: DashboardRecentOrder[] = orders.slice(0, 5).map(
        (order) => ({
            id: order.id,
            title: `Pedido #${order.id}`,
            subtitle: `${order.customerName} · ${order.items.length} producto(s)`,
            amount: `C$ ${order.total}`,
            status: order.status,
        }),
    );

    const recentDelivery: DashboardDeliveryItem[] = deliveryOrders
        .slice(0, 5)
        .map((order) => ({
            id: order.id,
            title: `Delivery #${order.id}`,
            subtitle: `${order.tienda} → ${order.clienteUbicacion}`,
            amount: `C$ ${order.comisionRepartidor}`,
            status: order.estado,
        }));

    const stats: DashboardStat[] = [
        {
            title: "Total vendido",
            value: `C$ ${totalVendido}`,
            subtitle: "Pagos simulados procesados",
            icon: "💳",
            bg: "#ecfdf5",
            color: "#15803d",
        },
        {
            title: "Pedidos pagados",
            value: pedidosPagados,
            subtitle: "Listos para preparar",
            icon: "🧾",
            bg: "#eff6ff",
            color: "#0369a1",
        },
        {
            title: "Pedidos en delivery",
            value: pedidosEnDelivery,
            subtitle: "Enviados a repartidores",
            icon: "🛵",
            bg: "#fffbeb",
            color: "#92400e",
        },
        {
            title: "Comisión plataforma",
            value: `C$ ${comisionPlataforma}`,
            subtitle: "Por entregas gestionadas",
            icon: "📈",
            bg: "#fef2f2",
            color: "#b91c1c",
        },
        {
            title: "Tiendas registradas",
            value: totalTiendas,
            subtitle: "Negocios locales activos",
            icon: "🏪",
            bg: "#f0fdf4",
            color: "#166534",
        },
        {
            title: "Productos publicados",
            value: totalProductos,
            subtitle: "Catálogo disponible",
            icon: "🛍️",
            bg: "#f8fafc",
            color: "#0f172a",
        },
        {
            title: "Ganancia repartidores",
            value: `C$ ${gananciaRepartidores}`,
            subtitle: "Ingreso estimado",
            icon: "💵",
            bg: "#fefce8",
            color: "#a16207",
        },
        {
            title: "Solicitudes delivery",
            value: totalEnvios,
            subtitle: "Pedidos en red delivery",
            icon: "📦",
            bg: "#f0f9ff",
            color: "#075985",
        },
    ];

    const insights: DashboardInsight[] = [
        {
            icon: "💳",
            title: "Pagos simulados",
            text: `La plataforma ha procesado C$ ${totalVendido} en pagos simulados.`,
        },
        {
            icon: "🏪",
            title: "Comercio local",
            text: `Actualmente existen ${totalTiendas} tiendas y ${totalProductos} productos registrados.`,
        },
        {
            icon: "🛵",
            title: "Delivery independiente",
            text: `Hay ${deliveryDisponibles} pedidos disponibles y ${deliveryActivos} entregas activas.`,
        },
        {
            icon: "📈",
            title: "Comisiones",
            text: `La plataforma estima C$ ${comisionPlataforma} en comisión y C$ ${gananciaRepartidores} para repartidores.`,
        },
    ];

    return (
        <DashboardTemplate
            stats={stats}
            paymentSummary={{
                totalProcesado: totalVendido,
                totalEnvios: totalEnviosPagados,
                comisionPlataforma,
            }}
            deliverySummary={{
                disponibles: deliveryDisponibles,
                activos: deliveryActivos,
                entregados: deliveryEntregados,
            }}
            recentOrders={recentOrders}
            recentDelivery={recentDelivery}
            categories={categories}
            insights={insights}
        />
    );
}