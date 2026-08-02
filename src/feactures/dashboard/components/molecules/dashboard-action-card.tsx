import { Box, Paper, Typography } from "@mui/material";

import type { DashboardInsight } from "../../types/dashboard.type";

type DashboardActionCardProps = {
    insight: DashboardInsight;
};

export const DashboardActionCard = ({ insight }: DashboardActionCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                display: "flex",
                gap: 1.5,
                alignItems: "flex-start",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.05)",
            }}
        >
            <Box
                sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 3,
                    backgroundColor: "#ecfdf5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 23,
                    flexShrink: 0,
                }}
            >
                {insight.icon}
            </Box>

            <Box>
                <Typography sx={{ fontWeight: 950, color: "#0f172a" }}>
                    {insight.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#64748b",
                        mt: 0.4,
                        lineHeight: 1.6,
                    }}
                >
                    {insight.text}
                </Typography>
            </Box>
        </Paper>
    );
};