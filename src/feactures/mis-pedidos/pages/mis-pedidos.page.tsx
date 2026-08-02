import {
    Box,
    Chip,
    Paper,
    Typography,
} from "@mui/material";

import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { useCartStore } from "../../carrito/store/use-cart-store";
import { useDeliveryStore } from "../../delivery/store/use-delivery-store";
import type { DeliveryStatus } from "../../delivery/types/delivery.types";

const timelineSteps: DeliveryStatus[] = [
    "Disponible",
    "Aceptado",
    "En camino a tienda",
    "Recogido",
    "En camino al cliente",
    "Entregado",
];

export default function MisPedidosPage() {
    const { orders } = useCartStore();
    const { orders: deliveryOrders } = useDeliveryStore();

    return (
        <Box sx={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
            <AppHeader />

            <Box sx={{ display: "flex" }}>
                <Box
                    component="aside"
                    sx={{
                        width: 280,
                        flexShrink: 0,
                        minHeight: "calc(100vh - 86px)",
                        backgroundColor: "#fff",
                        borderRight: "1px solid #e2e8f0",
                        position: "sticky",
                        top: 86,
                        alignSelf: "flex-start",
                        display: { xs: "none", md: "block" },
                        overflowY: "auto",
                    }}
                >
                    <Sidebar />
                </Box>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            mb: 3,
                            p: { xs: 3, md: 4 },
                            borderRadius: 5,
                            color: "#fff",
                            background:
                                "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 28%), radial-gradient(circle at 90% 5%, rgba(250,204,21,0.25), transparent 30%)",
                            },
                        }}
                    >
                        <Box sx={{ position: "relative", zIndex: 2 }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 950,
                                    fontSize: { xs: 30, md: 44 },
                                    lineHeight: 1.1,
                                }}
                            >
                                Mis pedidos
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1,
                                    color: "rgba(255,255,255,0.9)",
                                    fontWeight: 600,
                                    maxWidth: 760,
                                    lineHeight: 1.7,
                                }}
                            >
                                Consulta el estado de tus compras y el seguimiento del delivery
                                hasta que el pedido sea entregado.
                            </Typography>
                        </Box>
                    </Paper>

                    {orders.length > 0 ? (
                        <Box sx={{ display: "grid", gap: 3 }}>
                            {orders.map((order) => {
                                const deliveryOrder = deliveryOrders.find(
                                    (delivery) => delivery.customerOrderId === order.id,
                                );

                                const currentStatus = deliveryOrder?.estado ?? order.status;

                                return (
                                    <Paper
                                        key={order.id}
                                        elevation={0}
                                        sx={{
                                            p: { xs: 2.5, md: 3 },
                                            borderRadius: 5,
                                            border: "1px solid #e2e8f0",
                                            backgroundColor: "#fff",
                                            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: { xs: "flex-start", md: "center" },
                                                gap: 2,
                                                flexDirection: { xs: "column", md: "row" },
                                                mb: 3,
                                            }}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: 950,
                                                        color: "#0f172a",
                                                    }}
                                                >
                                                    Pedido #{order.id}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "#64748b",
                                                        mt: 0.5,
                                                    }}
                                                >
                                                    Total pagado: C$ {order.total} · Envío: C${" "}
                                                    {order.shippingCost}
                                                </Typography>
                                            </Box>

                                            <OrderStatusChip status={String(currentStatus)} />
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "grid",
                                                gap: 1.5,
                                                mb: 3,
                                            }}
                                        >
                                            {order.items.map((item) => (
                                                <Paper
                                                    key={item.producto.id}
                                                    elevation={0}
                                                    sx={{
                                                        p: 2,
                                                        borderRadius: 4,
                                                        border: "1px solid #e2e8f0",
                                                        backgroundColor: "#f8fafc",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        gap: 2,
                                                        flexWrap: "wrap",
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography sx={{ fontWeight: 900 }}>
                                                            {item.quantity}x {item.producto.nombre}
                                                        </Typography>

                                                        <Typography
                                                            variant="body2"
                                                            sx={{ color: "#64748b" }}
                                                        >
                                                            Tienda: {item.producto.tienda}
                                                        </Typography>
                                                    </Box>

                                                    <Typography
                                                        sx={{
                                                            fontWeight: 950,
                                                            color: "#15803d",
                                                        }}
                                                    >
                                                        C$ {item.producto.precio * item.quantity}
                                                    </Typography>
                                                </Paper>
                                            ))}
                                        </Box>

                                        {deliveryOrder ? (
                                            <>
                                                <Box
                                                    sx={{
                                                        mb: 2,
                                                        p: 2,
                                                        borderRadius: 4,
                                                        border: "1px solid #bbf7d0",
                                                        backgroundColor: "#f0fdf4",
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 900,
                                                            color: "#064e3b",
                                                        }}
                                                    >
                                                        Delivery asignado
                                                    </Typography>

                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: "#166534",
                                                            mt: 0.5,
                                                            lineHeight: 1.6,
                                                        }}
                                                    >
                                                        Origen: {deliveryOrder.tiendaUbicacion}
                                                    </Typography>

                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: "#166534",
                                                            lineHeight: 1.6,
                                                        }}
                                                    >
                                                        Destino: {deliveryOrder.clienteUbicacion}
                                                    </Typography>
                                                </Box>

                                                <OrderTimeline currentStatus={deliveryOrder.estado} />
                                            </>
                                        ) : (
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    p: 2,
                                                    borderRadius: 4,
                                                    border: "1px dashed #facc15",
                                                    backgroundColor: "#fffbeb",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontWeight: 900,
                                                        color: "#92400e",
                                                    }}
                                                >
                                                    Tu pedido ya fue pagado
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "#92400e",
                                                        mt: 0.5,
                                                        lineHeight: 1.6,
                                                    }}
                                                >
                                                    El negocio aún no lo ha enviado a delivery. Cuando el
                                                    negocio lo envíe, podrás ver el seguimiento aquí.
                                                </Typography>
                                            </Paper>
                                        )}
                                    </Paper>
                                );
                            })}
                        </Box>
                    ) : (
                        <Paper
                            elevation={0}
                            sx={{
                                p: 5,
                                borderRadius: 5,
                                textAlign: "center",
                                border: "1px dashed #86efac",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Typography sx={{ fontSize: 42, mb: 1 }}>📦</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 900 }}>
                                Aún no tienes pedidos
                            </Typography>

                            <Typography variant="body2" sx={{ color: "#64748b", mt: 1 }}>
                                Cuando realices una compra, podrás ver el seguimiento de tu
                                pedido en esta sección.
                            </Typography>
                        </Paper>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

type OrderTimelineProps = {
    currentStatus: DeliveryStatus;
};

const OrderTimeline = ({ currentStatus }: OrderTimelineProps) => {
    const currentIndex = timelineSteps.indexOf(currentStatus);

    return (
        <Box
            sx={{
                mt: 3,
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: `repeat(${timelineSteps.length}, minmax(0, 1fr))`,
                },
                gap: 1.5,
            }}
        >
            {timelineSteps.map((step, index) => {
                const isCompleted = index < currentIndex;
                const isCurrent = index === currentIndex;
                const isPending = index > currentIndex;

                return (
                    <Paper
                        key={step}
                        elevation={0}
                        sx={{
                            p: 2,
                            borderRadius: 4,
                            border: isCurrent
                                ? "2px solid #15803d"
                                : "1px solid #e2e8f0",
                            backgroundColor: isCompleted
                                ? "#ecfdf5"
                                : isCurrent
                                    ? "#f0fdf4"
                                    : "#f8fafc",
                            textAlign: "center",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                width: 42,
                                height: 42,
                                mx: "auto",
                                mb: 1,
                                borderRadius: 999,
                                backgroundColor: isCompleted
                                    ? "#15803d"
                                    : isCurrent
                                        ? "#22c55e"
                                        : "#e2e8f0",
                                color: isPending ? "#64748b" : "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 950,
                            }}
                        >
                            {isCompleted ? "✓" : index + 1}
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 900,
                                color: isPending ? "#64748b" : "#0f172a",
                                lineHeight: 1.4,
                            }}
                        >
                            {step}
                        </Typography>
                    </Paper>
                );
            })}
        </Box>
    );
};

type OrderStatusChipProps = {
    status: string;
};

const OrderStatusChip = ({ status }: OrderStatusChipProps) => {
    const isDelivered = status === "Entregado";
    const isPaid = status === "Pagado";
    const isActive =
        status === "Aceptado" ||
        status === "Disponible" ||
        status === "En delivery" ||
        status === "En camino a tienda" ||
        status === "Recogido" ||
        status === "En camino al cliente";

    return (
        <Chip
            label={status}
            sx={{
                fontWeight: 900,
                borderRadius: 999,
                color: isDelivered
                    ? "#075985"
                    : isPaid
                        ? "#064e3b"
                        : isActive
                            ? "#92400e"
                            : "#475569",
                backgroundColor: isDelivered
                    ? "#e0f2fe"
                    : isPaid
                        ? "#dcfce7"
                        : isActive
                            ? "#fef3c7"
                            : "#f1f5f9",
            }}
        />
    );
};