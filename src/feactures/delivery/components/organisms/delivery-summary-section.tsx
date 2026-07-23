import { Box, Typography } from "@mui/material";

import { useDeliveryStore } from "../../store/use-delivery-store";
import { DeliveryStatCard } from "../molecules/delivery-stat-card";

export const DeliverySummarySection = () => {
    const { orders, currentRepartidorId } = useDeliveryStore();

    const availableOrders = orders.filter(
        (order) => order.estado === "Disponible",
    );

    const myOrders = orders.filter(
        (order) => order.repartidorId === currentRepartidorId,
    );

    const deliveredOrders = myOrders.filter(
        (order) => order.estado === "Entregado",
    );

    const estimatedEarnings = myOrders.reduce(
        (total, order) => total + order.comisionRepartidor,
        0,
    );

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}
            >
                Resumen del repartidor
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, minmax(0, 1fr))",
                        lg: "repeat(4, minmax(0, 1fr))",
                    },
                    gap: 2,
                }}
            >
                <DeliveryStatCard
                    title="Pedidos disponibles"
                    value={availableOrders.length}
                    icon="📦"
                    bg="#ecfdf5"
                    color="#15803d"
                />

                <DeliveryStatCard
                    title="Mis entregas"
                    value={myOrders.length}
                    icon="🛵"
                    bg="#eff6ff"
                    color="#0369a1"
                />

                <DeliveryStatCard
                    title="Entregados"
                    value={deliveredOrders.length}
                    icon="✅"
                    bg="#f0fdf4"
                    color="#166534"
                />

                <DeliveryStatCard
                    title="Ganancia estimada"
                    value={`C$ ${estimatedEarnings}`}
                    icon="💵"
                    bg="#fffbeb"
                    color="#92400e"
                />
            </Box>
        </Box>
    );
};