import { Box } from "@mui/material";

import { DashboardStatCard } from "../molecules/dashboard-stat-card";
import type { DashboardStat } from "../../types/dashboard.type";

type DashboardStatsSectionProps = {
    stats: DashboardStat[];
};

export const DashboardStatsSection = ({ stats }: DashboardStatsSectionProps) => {
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
                mb: 3,
            }}
        >
            {stats.map((stat) => (
                <DashboardStatCard key={stat.title} stat={stat} />
            ))}
        </Box>
    );
};