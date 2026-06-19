import { Box, Typography } from "@mui/material";
import type { DashboardActivity } from "../../types/dashboard.type";
import { DashboardActivityItem } from "../molecules/dashboard-activity-items";

type DashboardActivitySectionProps = {
    activities: DashboardActivity[];
};

export const DashboardActivitySection = ({activities,}: DashboardActivitySectionProps) => {
    return (
        <>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Actividad reciente
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gap: 2,
                }}
            >
                {activities.map((activity) => (
                    <DashboardActivityItem key={activity.id} activity={activity} />
                ))}
            </Box>
        </>
    );
};