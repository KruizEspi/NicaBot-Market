import { Box, Paper, Typography } from "@mui/material";

import { useDeliveryStore } from "../../store/use-delivery-store";
import { DeliveryOrderCard } from "../molecules/delivery-order-card";

export const MyDeliveriesSection = () => {
    const { orders, currentRepartidorId, updateOrderStatus } =
        useDeliveryStore();

    const myOrders = orders.filter(
        (order) => order.repartidorId === currentRepartidorId,
    );

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}
            >
                Mis entregas
            </Typography>

            {myOrders.length > 0 ? (
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
                    {myOrders.map((order) => (
                        <DeliveryOrderCard
                            key={order.id}
                            order={order}
                            isMine
                            onUpdateStatus={updateOrderStatus}
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
                        border: "1px dashed #bae6fd",
                        backgroundColor: "#fff",
                    }}
                >
                    <Typography sx={{ fontSize: 42, mb: 1 }}>📦</Typography>

                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        Aún no tienes entregas asignadas
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#64748b", mt: 1 }}>
                        Toma un pedido disponible para iniciar una entrega.
                    </Typography>
                </Paper>
            )}
        </Box>
    );
};