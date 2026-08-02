import {
    Box,
    Paper,
    Typography,
} from "@mui/material";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import type { AdminReportCharts } from "../../types/reportes.type";

type ReportesChartsProps = {
    charts: AdminReportCharts;
};

const colors = [
    "#15803d",
    "#22c55e",
    "#0369a1",
    "#f59e0b",
    "#dc2626",
    "#7c3aed",
];

export const ReportesCharts = ({ charts }: ReportesChartsProps) => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    xl: "1fr 1fr",
                },
                gap: 3,
            }}
        >
            <ChartCard
                title="Productos por categoría"
                subtitle="Distribución del catálogo de productos."
            >
                <Box sx={{ height: 320 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={charts.productosPorCategoria} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis type="number" stroke="#64748b" />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={120}
                                stroke="#64748b"
                            />
                            <Tooltip />
                            <Bar dataKey="value" fill="#15803d" radius={[0, 12, 12, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </ChartCard>

            <ChartCard
                title="Estado de productos"
                subtitle="Productos disponibles y agotados."
            >
                <PieBox data={charts.estadoProductos} />
            </ChartCard>

            <ChartCard
                title="Estado de tiendas"
                subtitle="Tiendas abiertas y cerradas."
            >
                <PieBox data={charts.estadoTiendas} />
            </ChartCard>

            <ChartCard
                title="Estado de pedidos"
                subtitle="Pedidos pagados, en delivery y entregados."
            >
                <PieBox data={charts.estadoPedidos} />
            </ChartCard>

            <ChartCard
                title="Estado de delivery"
                subtitle="Solicitudes disponibles, activas y completadas."
            >
                <PieBox data={charts.estadoDelivery} />
            </ChartCard>

            <ChartCard
                title="Búsquedas"
                subtitle="Consultas con resultados y sin resultados."
            >
                <PieBox data={charts.busquedas} />
            </ChartCard>
        </Box>
    );
};

type ChartCardProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
};

const ChartCard = ({ title, subtitle, children }: ChartCardProps) => {
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
            <Typography variant="h5" sx={{ fontWeight: 950, color: "#0f172a" }}>
                {title}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    color: "#64748b",
                    mt: 0.5,
                    mb: 2,
                    lineHeight: 1.6,
                }}
            >
                {subtitle}
            </Typography>

            {children}
        </Paper>
    );
};

type PieBoxProps = {
    data: {
        name: string;
        value: number;
    }[];
};

const PieBox = ({ data }: PieBoxProps) => {
    return (
        <Box sx={{ height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={62}
                        outerRadius={105}
                        paddingAngle={4}
                        label
                    >
                        {data.map((item, index) => (
                            <Cell key={item.name} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </Box>
    );
};