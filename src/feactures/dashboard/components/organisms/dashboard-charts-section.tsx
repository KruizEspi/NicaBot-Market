import { Box, Paper, Typography } from "@mui/material";
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

import type {
    DashboardCategoryData,
    DashboardMonthlySale,
    DashboardStoreStatus,
} from "../../types/dashboard.type";

type DashboardChartsSectionProps = {
    monthlySales: DashboardMonthlySale[];
    categoryProducts: DashboardCategoryData[];
    storeStatus: DashboardStoreStatus[];
};

const pieColors = ["#4cae50", "#ef4444"];

export const DashboardChartsSection = ({
                                           monthlySales,
                                           categoryProducts,
                                           storeStatus,
                                       }: DashboardChartsSectionProps) => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    lg: "2fr 1fr",
                },
                gap: 3,
                mb: 4,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#fff",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    Ventas mensuales
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Movimiento estimado de ventas dentro de la plataforma.
                </Typography>

                <Box sx={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={monthlySales}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="ventas" fill="#4cae50" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>

            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#fff",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    Estado de tiendas
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Comparación entre tiendas abiertas y cerradas.
                </Typography>

                <Box sx={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={storeStatus}
                                dataKey="cantidad"
                                nameKey="estado"
                                innerRadius={65}
                                outerRadius={100}
                                paddingAngle={4}
                            >
                                {storeStatus.map((entry, index) => (
                                    <Cell
                                        key={entry.estado}
                                        fill={pieColors[index % pieColors.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>

                <Box sx={{ display: "grid", gap: 1 }}>
                    {storeStatus.map((item, index) => (
                        <Box
                            key={item.estado}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: 14,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Box
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        backgroundColor: pieColors[index % pieColors.length],
                                    }}
                                />
                                <Typography variant="body2">{item.estado}</Typography>
                            </Box>

                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                {item.cantidad}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Paper>

            <Paper
                elevation={0}
                sx={{
                    gridColumn: {
                        xs: "auto",
                        lg: "1 / -1",
                    },
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#fff",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    Productos por categoría
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Cantidad de productos registrados por rubro comercial.
                </Typography>

                <Box sx={{ width: "100%", height: 320 }}>
                    <ResponsiveContainer>
                        <BarChart data={categoryProducts} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis type="number" />
                            <YAxis dataKey="categoria" type="category" width={100} />
                            <Tooltip />
                            <Bar dataKey="productos" fill="#2e7d32" radius={[0, 8, 8, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>
        </Box>
    );
};