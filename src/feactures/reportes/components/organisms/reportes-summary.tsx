import { Box, Paper, Typography } from "@mui/material";

import type { ReportMetric } from "../../types/reportes.type";

type ReportesSummaryProps = {
    metrics: ReportMetric[];
};

export const ReportesSummary = ({ metrics }: ReportesSummaryProps) => {
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
            {metrics.map((metric) => (
                <SummaryCard key={metric.title} metric={metric} />
            ))}
        </Box>
    );
};

type SummaryCardProps = {
    metric: ReportMetric;
};

const SummaryCard = ({ metric }: SummaryCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                borderRadius: 5,
                border: "1px solid #e2e8f0",
                backgroundColor: metric.bg,
                boxShadow: "0 14px 36px rgba(15, 23, 42, 0.06)",
                transition: "all 0.22s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 22px 48px rgba(15, 23, 42, 0.12)",
                },
            }}
        >
            <Box
                sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 4,
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    mb: 2,
                    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
                }}
            >
                {metric.icon}
            </Box>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 950,
                    color: metric.color,
                    lineHeight: 1,
                    mb: 0.7,
                }}
            >
                {metric.value}
            </Typography>

            <Typography sx={{ color: "#0f172a", fontWeight: 900 }}>
                {metric.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "#64748b", mt: 0.5 }}>
                {metric.subtitle}
            </Typography>
        </Paper>
    );
};