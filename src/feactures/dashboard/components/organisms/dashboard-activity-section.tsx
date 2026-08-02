import { Box, Divider, Paper, Typography } from "@mui/material";

import { DashboardActivityItem } from "../molecules/dashboard-activity-items";
import type {
    DashboardDeliveryItem,
    DashboardRecentOrder,
} from "../../types/dashboard.type";

type DashboardActivitySectionProps = {
    recentOrders: DashboardRecentOrder[];
    recentDelivery: DashboardDeliveryItem[];
};

export const DashboardActivitySection = ({
                                             recentOrders,
                                             recentDelivery,
                                         }: DashboardActivitySectionProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 5,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
            }}
        >
            <SectionTitle
                title="Pedidos recientes"
                subtitle="Últimos pedidos pagados dentro de la plataforma."
            />

            <Box sx={{ display: "grid", gap: 1.5, mt: 2 }}>
                {recentOrders.length > 0 ? (
                    recentOrders.map((order) => (
                        <DashboardActivityItem
                            key={order.id}
                            title={order.title}
                            subtitle={order.subtitle}
                            amount={order.amount}
                            status={order.status}
                        />
                    ))
                ) : (
                    <EmptyState
                        icon="🧾"
                        title="No hay pedidos pagados"
                        subtitle="Cuando un cliente pague un carrito, aparecerá aquí."
                    />
                )}
            </Box>

            <Divider sx={{ my: 3 }} />

            <SectionTitle
                title="Delivery reciente"
                subtitle="Últimas solicitudes disponibles o tomadas."
            />

            <Box sx={{ display: "grid", gap: 1.5, mt: 2 }}>
                {recentDelivery.length > 0 ? (
                    recentDelivery.map((delivery) => (
                        <DashboardActivityItem
                            key={delivery.id}
                            title={delivery.title}
                            subtitle={delivery.subtitle}
                            amount={delivery.amount}
                            status={delivery.status}
                            type="delivery"
                        />
                    ))
                ) : (
                    <EmptyState
                        icon="🛵"
                        title="No hay solicitudes delivery"
                        subtitle="Cuando el negocio envíe un pedido, aparecerá aquí."
                    />
                )}
            </Box>
        </Paper>
    );
};

type SectionTitleProps = {
    title: string;
    subtitle: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
    return (
        <Box>
            <Typography variant="h5" sx={{ fontWeight: 950, color: "#0f172a" }}>
                {title}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    color: "#64748b",
                    mt: 0.5,
                    lineHeight: 1.6,
                }}
            >
                {subtitle}
            </Typography>
        </Box>
    );
};

type EmptyStateProps = {
    icon: string;
    title: string;
    subtitle: string;
};

const EmptyState = ({ icon, title, subtitle }: EmptyStateProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 4,
                border: "1px dashed #86efac",
                backgroundColor: "#f8fafc",
                textAlign: "center",
            }}
        >
            <Typography sx={{ fontSize: 38, mb: 1 }}>{icon}</Typography>

            <Typography sx={{ fontWeight: 900, color: "#0f172a" }}>
                {title}
            </Typography>

            <Typography variant="body2" sx={{ color: "#64748b", mt: 0.5 }}>
                {subtitle}
            </Typography>
        </Paper>
    );
};