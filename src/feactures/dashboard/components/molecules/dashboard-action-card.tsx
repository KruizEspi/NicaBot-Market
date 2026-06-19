import { Box, Card, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import type { DashboardAction } from "../../types/dashboard.type";

type DashboardActionCardProps = {
    action: DashboardAction;
};

export const DashboardActionCard = ({ action }: DashboardActionCardProps) => {
    return (
        <Card
            component={NavLink}
            to={action.path}
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                textDecoration: "none",
                color: "inherit",
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
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        backgroundColor: "#e8f5e9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                        mb: 2,
                    }}
                >
                    {action.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {action.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {action.description}
                </Typography>
            </CardContent>
        </Card>
    );
};