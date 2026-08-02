import {
    Box,
    Button,
    Chip,
    Paper,
    Typography,
} from "@mui/material";

import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { tiendasMock } from "../../tiendas/data/tiendas.mock";
import { useCartStore } from "../store/use-cart-store";
import { useDeliveryStore } from "../../delivery/store/use-delivery-store";
import type { DeliveryOrder } from "../../delivery/types/delivery.types";


export default function PedidosNegocioPage() {
    const { orders, markOrderAsSentToDelivery } = useCartStore();
    const { addDeliveryOrder } = useDeliveryStore();

    const handleSendToDelivery = (orderId: number) => {
        const order = orders.find((item) => item.id === orderId);

        if (!order) return;

        const firstProduct = order.items[0]?.producto;

        if (!firstProduct) return;

        const tienda = tiendasMock.find(
            (item) => item.nombre === firstProduct.tienda,
        );

        const deliveryCost = order.shippingCost;
        const repartidorCommission = Math.round(deliveryCost * 0.8);
        const platformCommission = deliveryCost - repartidorCommission;

        const deliveryOrder: DeliveryOrder = {
            id: Date.now(),
            customerOrderId: order.id,
            producto: order.items
                .map((item) => `${item.quantity}x ${item.producto.nombre}`)
                .join(", "),
            tienda: firstProduct.tienda,
            tiendaUbicacion: tienda?.ubicacion ?? firstProduct.ubicacion,
            cliente: order.customerName,
            clienteUbicacion: order.deliveryAddress,
            distanciaKm: 3.5,
            costoEnvio: deliveryCost,
            comisionRepartidor: repartidorCommission,
            comisionPlataforma: platformCommission,
            estado: "Disponible",
        };

        addDeliveryOrder(deliveryOrder);
        markOrderAsSentToDelivery(order.id);
    };

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
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 950,
                                fontSize: { xs: 30, md: 44 },
                                lineHeight: 1.1,
                            }}
                        >
                            Pedidos del negocio
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1,
                                color: "rgba(255,255,255,0.9)",
                                fontWeight: 600,
                                maxWidth: 760,
                            }}
                        >
                            Revisa pedidos pagados y envíalos a NicaBot Delivery para que un
                            repartidor independiente pueda tomarlos.
                        </Typography>
                    </Paper>

                    {orders.length > 0 ? (
                        <Box sx={{ display: "grid", gap: 2 }}>
                            {orders.map((order) => (
                                <Paper
                                    key={order.id}
                                    elevation={0}
                                    sx={{
                                        p: 2.5,
                                        borderRadius: 5,
                                        border: "1px solid #e2e8f0",
                                        backgroundColor: "#fff",
                                        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            gap: 2,
                                            flexWrap: "wrap",
                                            mb: 2,
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 900 }}>
                                                Pedido #{order.id}
                                            </Typography>

                                            <Typography variant="body2" sx={{ color: "#64748b" }}>
                                                Cliente: {order.customerName}
                                            </Typography>

                                            <Typography variant="body2" sx={{ color: "#64748b" }}>
                                                Entrega: {order.deliveryAddress}
                                            </Typography>
                                        </Box>

                                        <Chip
                                            label={order.status}
                                            sx={{
                                                fontWeight: 900,
                                                borderRadius: 999,
                                                color:
                                                    order.status === "Pagado" ? "#064e3b" : "#075985",
                                                backgroundColor:
                                                    order.status === "Pagado" ? "#dcfce7" : "#e0f2fe",
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{ display: "grid", gap: 1, mb: 2 }}>
                                        {order.items.map((item) => (
                                            <Box
                                                key={item.producto.id}
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    gap: 2,
                                                    borderBottom: "1px solid #e2e8f0",
                                                    pb: 1,
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: 800 }}>
                                                    {item.quantity}x {item.producto.nombre}
                                                </Typography>

                                                <Typography sx={{ fontWeight: 900 }}>
                                                    C$ {item.producto.precio * item.quantity}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: 2,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 950, color: "#15803d" }}>
                                            Total pagado: C$ {order.total}
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            disabled={order.status !== "Pagado"}
                                            onClick={() => handleSendToDelivery(order.id)}
                                            sx={{
                                                textTransform: "none",
                                                borderRadius: 999,
                                                fontWeight: 900,
                                                background:
                                                    "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                            }}
                                        >
                                            Enviar a delivery
                                        </Button>
                                    </Box>
                                </Paper>
                            ))}
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
                                No hay pedidos pagados todavía
                            </Typography>

                            <Typography variant="body2" sx={{ color: "#64748b", mt: 1 }}>
                                Cuando un cliente pague un carrito, el pedido aparecerá aquí.
                            </Typography>
                        </Paper>
                    )}
                </Box>
            </Box>
        </Box>
    );
}