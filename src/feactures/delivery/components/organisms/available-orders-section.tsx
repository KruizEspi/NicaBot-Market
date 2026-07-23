import { Box, Paper, Typography } from "@mui/material";

import { useDeliveryStore } from "../../store/use-delivery-store";
import { DeliveryOrderCard } from "../molecules/delivery-order-card";

export const AvailableOrdersSection = () => {
    const { orders, takeOrder } = useDeliveryStore();

    const availableOrders = orders.filter(
        (order) => order.estado === "Disponible",
    );

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}
            >
                Pedidos disponibles
            </Typography>

            {availableOrders.length > 0 ? (
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            lg: "repeat(2, minmax(0, 1fr))",
                        },
                        gap: 2,
                    }}
                >
                    {availableOrders.map((order) => (
                        <DeliveryOrderCard
                            key={order.id}
                            order={order}
                            onTake={takeOrder}
                        />
                    ))}
                </Box>
            ) : (
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        textAlign: "center",
                        borderRadius: 5,
                        border: "1px dashed #86efac",
                        backgroundColor: "#fff",
                    }}
                >
                    <Typography sx={{ fontSize: 42, mb: 1 }}>🛵</Typography>

                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        No hay pedidos disponibles
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#64748b", mt: 1 }}>
                        Cuando una tienda solicite delivery, los pedidos aparecerán aquí.
                    </Typography>
                </Paper>
            )}
        </Box>
    );
};