import { Box, Paper, Typography } from "@mui/material";
import type { DashboardActivity } from "../../types/dashboard.type";

type DashboardActivityItemProps = {
    activity: DashboardActivity;
};

export const DashboardActivityItem = ({
                                          activity,
                                      }: DashboardActivityItemProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 3,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
            }}
        >
            <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {activity.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {activity.description}
                </Typography>

                <Typography
                    variant="caption"
                    sx={{
                        display: "block",
                        mt: 1,
                        color: "#64748b",
                    }}
                >
                    {activity.time}
                </Typography>
            </Box>
        </Paper>
    );
};