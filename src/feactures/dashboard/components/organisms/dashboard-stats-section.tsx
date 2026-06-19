import { Box, Typography } from "@mui/material";
import type { DashboardStat } from "../../types/dashboard.type";
import { DashboardStatCard } from "../molecules/dashboard-stat-card";

type DashboardStatsSectionProps = {
    stats: DashboardStat[];
};

export const DashboardStatsSection = ({ stats }: DashboardStatsSectionProps) => {
    return (
        <>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Resumen general
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        lg: "repeat(4, 1fr)",
                    },
                    gap: 3,
                    mb: 4,
                }}
            >
                {stats.map((stat) => (
                    <DashboardStatCard key={stat.id} stat={stat} />
                ))}
            </Box>
        </>
    );
};