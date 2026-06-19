import { Box, Typography } from "@mui/material";
import type { DashboardAction } from "../../types/dashboard.type";
import { DashboardActionCard } from "../molecules/dashboard-action-card";

type DashboardActionsSectionProps = {
    actions: DashboardAction[];
};

export const DashboardActionsSection = ({
                                            actions,
                                        }: DashboardActionsSectionProps) => {
    return (
        <>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Accesos rápidos
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(3, 1fr)",
                    },
                    gap: 3,
                    mb: 4,
                }}
            >
                {actions.map((action) => (
                    <DashboardActionCard key={action.id} action={action} />
                ))}
            </Box>
        </>
    );
};