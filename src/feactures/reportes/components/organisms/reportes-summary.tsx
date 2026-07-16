import { Box, Paper, Typography } from "@mui/material";

import type { SearchReportItem } from "../../types/reportes.type";

type ReportesSummaryProps = {
    reports: SearchReportItem[];
};

export const ReportesSummary = ({ reports }: ReportesSummaryProps) => {
    const totalBusquedas = reports.length;

    const totalResultados = reports.reduce(
        (total, item) => total + item.resultados,
        0,
    );

    const conResultados = reports.filter(
        (item) => item.estado === "Con resultados",
    ).length;

    const sinResultados = reports.filter(
        (item) => item.estado === "Sin resultados",
    ).length;

    return (
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
            <SummaryCard
                title="Búsquedas"
                value={totalBusquedas}
                icon="🔎"
                bg="#ecfdf5"
                color="#15803d"
            />

            <SummaryCard
                title="Resultados"
                value={totalResultados}
                icon="📦"
                bg="#eff6ff"
                color="#0369a1"
            />

            <SummaryCard
                title="Con resultados"
                value={conResultados}
                icon="✅"
                bg="#f0fdf4"
                color="#166534"
            />

            <SummaryCard
                title="Sin resultados"
                value={sinResultados}
                icon="⚠️"
                bg="#fffbeb"
                color="#92400e"
            />
        </Box>
    );
};

type SummaryCardProps = {
    title: string;
    value: number;
    icon: string;
    bg: string;
    color: string;
};

const SummaryCard = ({ title, value, icon, bg, color }: SummaryCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: bg,
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
            }}
        >
            <Typography sx={{ fontSize: 28, mb: 1 }}>{icon}</Typography>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 950,
                    color,
                    lineHeight: 1,
                    mb: 0.5,
                }}
            >
                {value}
            </Typography>

            <Typography sx={{ color: "#0f172a", fontWeight: 900 }}>
                {title}
            </Typography>
        </Paper>
    );
};