import { Box, Chip, Paper, Typography } from "@mui/material";

type DashboardActivityItemProps = {
    title: string;
    subtitle: string;
    amount: string;
    status: string;
    type?: "order" | "delivery";
};

export const DashboardActivityItem = ({
                                          title,
                                          subtitle,
                                          amount,
                                          status,
                                          type = "order",
                                      }: DashboardActivityItemProps) => {
    const isDelivery = type === "delivery";

    return (
        <Paper
            elevation={0}
            sx={{
                p: 1.8,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#f8fafc",
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                alignItems: "center",
                flexWrap: "wrap",
            }}
        >
            <Box>
                <Typography sx={{ fontWeight: 900, color: "#0f172a" }}>
                    {title}
                </Typography>

                <Typography variant="body2" sx={{ color: "#64748b" }}>
                    {subtitle}
                </Typography>
            </Box>

            <Box sx={{ textAlign: "right" }}>
                <Typography sx={{ fontWeight: 950, color: "#15803d" }}>
                    {amount}
                </Typography>

                <Chip
                    label={status}
                    size="small"
                    sx={{
                        mt: 0.5,
                        borderRadius: 999,
                        fontWeight: 900,
                        color: isDelivery ? "#92400e" : "#064e3b",
                        backgroundColor: isDelivery ? "#fef3c7" : "#dcfce7",
                    }}
                />
            </Box>
        </Paper>
    );
};