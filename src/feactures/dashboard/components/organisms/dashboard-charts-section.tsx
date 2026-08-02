import {
    Box,
    Divider,
    Paper,
    Typography,
} from "@mui/material";
import {
    Area,
    AreaChart,
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

import type {
    DashboardCategoryItem,
    DashboardDeliverySummary,
    DashboardPaymentSummary,
} from "../../types/dashboard.type";

type DashboardChartsSectionProps = {
    paymentSummary: DashboardPaymentSummary;
    deliverySummary: DashboardDeliverySummary;
    categories: DashboardCategoryItem[];
};

const chartColors = [
    "#15803d",
    "#22c55e",
    "#0369a1",
    "#f59e0b",
    "#dc2626",
    "#7c3aed",
];

export const DashboardChartsSection = ({
                                           paymentSummary,
                                           deliverySummary,
                                           categories,
                                       }: DashboardChartsSectionProps) => {
    const monthlySalesData = buildMonthlySales(paymentSummary.totalProcesado);

    const deliveryData = [
        {
            name: "Disponibles",
            value: deliverySummary.disponibles,
        },
        {
            name: "Activos",
            value: deliverySummary.activos,
        },
        {
            name: "Entregados",
            value: deliverySummary.entregados,
        },
    ];

    const categoryData = categories.map((category) => ({
        name: category.label,
        productos: category.value,
    }));

    const paymentData = [
        {
            name: "Ventas",
            value: paymentSummary.totalProcesado,
        },
        {
            name: "Envíos",
            value: paymentSummary.totalEnvios,
        },
        {
            name: "Comisión",
            value: paymentSummary.comisionPlataforma,
        },
    ];

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
                title="Gráficas administrativas"
                subtitle="Visualización general de ventas, delivery, categorías y pagos simulados."
            />

            <Box
                sx={{
                    mt: 3,
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        xl: "1.2fr 0.8fr",
                    },
                    gap: 3,
                }}
            >
                <ChartCard
                    title="Ventas simuladas por mes"
                    subtitle="Tendencia estimada según el total procesado."
                >
                    <Box sx={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={monthlySalesData}>
                                <defs>
                                    <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.45} />
                                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0.02} />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="month" stroke="#64748b" />
                                <YAxis stroke="#64748b" />
                                <Tooltip
                                    formatter={(value) => [`C$ ${value}`, "Ventas"]}
                                    labelStyle={{ color: "#0f172a", fontWeight: 800 }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="ventas"
                                    stroke="#15803d"
                                    strokeWidth={3}
                                    fill="url(#salesGradient)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Box>
                </ChartCard>

                <ChartCard
                    title="Estado del delivery"
                    subtitle="Distribución de solicitudes en la red de repartidores."
                >
                    <Box sx={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={deliveryData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={62}
                                    outerRadius={105}
                                    paddingAngle={4}
                                    label
                                >
                                    {deliveryData.map((entry, index) => (
                                        <Cell
                                            key={entry.name}
                                            fill={chartColors[index % chartColors.length]}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip
                                    formatter={(value) => [`${value}`, "Pedidos"]}
                                    labelStyle={{ color: "#0f172a", fontWeight: 800 }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                </ChartCard>
            </Box>

            <Box
                sx={{
                    mt: 3,
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
                    subtitle="Cantidad de productos registrados por tipo."
                >
                    <Box sx={{ height: 320 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis type="number" stroke="#64748b" />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    width={110}
                                    stroke="#64748b"
                                />
                                <Tooltip
                                    formatter={(value) => [`${value}`, "Productos"]}
                                    labelStyle={{ color: "#0f172a", fontWeight: 800 }}
                                />
                                <Bar
                                    dataKey="productos"
                                    radius={[0, 12, 12, 0]}
                                    fill="#15803d"
                                    barSize={24}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </ChartCard>

                <ChartCard
                    title="Resumen económico"
                    subtitle="Ventas, costo de envío y comisión estimada de plataforma."
                >
                    <Box sx={{ height: 320 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={paymentData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="name" stroke="#64748b" />
                                <YAxis stroke="#64748b" />
                                <Tooltip
                                    formatter={(value) => [`C$ ${value}`, "Monto"]}
                                    labelStyle={{ color: "#0f172a", fontWeight: 800 }}
                                />
                                <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                                    {paymentData.map((entry, index) => (
                                        <Cell
                                            key={entry.name}
                                            fill={chartColors[index % chartColors.length]}
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </ChartCard>
            </Box>

            <Divider sx={{ my: 3 }} />

            <SectionTitle
                title="Indicadores rápidos"
                subtitle="Resumen visual del comportamiento actual de la plataforma."
            />

            <Box
                sx={{
                    mt: 2,
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(3, minmax(0, 1fr))",
                    },
                    gap: 1.5,
                }}
            >
                <StatusBox
                    title="Disponibles"
                    value={deliverySummary.disponibles}
                    color="#15803d"
                    bg="#ecfdf5"
                />

                <StatusBox
                    title="Activos"
                    value={deliverySummary.activos}
                    color="#92400e"
                    bg="#fffbeb"
                />

                <StatusBox
                    title="Entregados"
                    value={deliverySummary.entregados}
                    color="#0369a1"
                    bg="#eff6ff"
                />
            </Box>
        </Paper>
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
                p: 2.5,
                borderRadius: 5,
                border: "1px solid #e2e8f0",
                background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 65%, #ecfdf5 100%)",
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 950, color: "#0f172a" }}>
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

type StatusBoxProps = {
    title: string;
    value: number;
    color: string;
    bg: string;
};

const StatusBox = ({ title, value, color, bg }: StatusBoxProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: bg,
                textAlign: "center",
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: 950, color }}>
                {value}
            </Typography>

            <Typography variant="body2" sx={{ color: "#0f172a", fontWeight: 900 }}>
                {title}
            </Typography>
        </Paper>
    );
};

const buildMonthlySales = (total: number) => {
    const safeTotal = total > 0 ? total : 58000;

    return [
        {
            month: "Ene",
            ventas: Math.round(safeTotal * 0.35),
        },
        {
            month: "Feb",
            ventas: Math.round(safeTotal * 0.42),
        },
        {
            month: "Mar",
            ventas: Math.round(safeTotal * 0.55),
        },
        {
            month: "Abr",
            ventas: Math.round(safeTotal * 0.7),
        },
        {
            month: "May",
            ventas: Math.round(safeTotal * 0.85),
        },
        {
            month: "Jun",
            ventas: safeTotal,
        },
    ];
};