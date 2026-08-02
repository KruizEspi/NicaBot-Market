import { Paper, Typography } from "@mui/material";

import { DashboardStatIcon } from "../atoms/dashboard-stat-icon";
import type { DashboardStat } from "../../types/dashboard.type";

type DashboardStatCardProps = {
    stat: DashboardStat;
};

export const DashboardStatCard = ({ stat }: DashboardStatCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                borderRadius: 5,
                border: "1px solid #e2e8f0",
                backgroundColor: stat.bg,
                boxShadow: "0 14px 36px rgba(15, 23, 42, 0.06)",
                transition: "all 0.22s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 22px 48px rgba(15, 23, 42, 0.12)",
                },
            }}
        >
            <DashboardStatIcon icon={stat.icon} />

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 950,
                    color: stat.color,
                    lineHeight: 1,
                    mb: 0.7,
                }}
            >
                {stat.value}
            </Typography>

            <Typography sx={{ color: "#0f172a", fontWeight: 900 }}>
                {stat.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "#64748b", mt: 0.5 }}>
                {stat.subtitle}
            </Typography>
        </Paper>
    );
};