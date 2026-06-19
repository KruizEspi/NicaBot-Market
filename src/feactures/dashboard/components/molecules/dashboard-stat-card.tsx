import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import type { DashboardStat } from "../../types/dashboard.type";
import { DashboardStatIcon } from "../atoms/dashboard-stat-icon";

type DashboardStatCardProps = {
    stat: DashboardStat;
};

export const DashboardStatCard = ({ stat }: DashboardStatCardProps) => {
    const isPositive = !stat.trend?.startsWith("-");

    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                background: "linear-gradient(135deg, #ffffff, #f8fafc)",
                transition: "0.2s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 35px rgba(15, 23, 42, 0.12)",
                },
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        mb: 2,
                    }}
                >
                    <DashboardStatIcon icon={stat.icon} />

                    {stat.trend && (
                        <Chip
                            size="small"
                            label={stat.trend}
                            color={isPositive ? "success" : "error"}
                            variant="outlined"
                        />
                    )}
                </Box>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        color: "#1e293b",
                        mb: 0.5,
                    }}
                >
                    {stat.value}
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {stat.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {stat.description}
                </Typography>
            </CardContent>
        </Card>
    );
};