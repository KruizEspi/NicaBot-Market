import { Paper, Typography } from "@mui/material";

type DeliveryStatCardProps = {
    title: string;
    value: string | number;
    icon: string;
    bg: string;
    color: string;
};

export const DeliveryStatCard = ({
                                     title,
                                     value,
                                     icon,
                                     bg,
                                     color,
                                 }: DeliveryStatCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: bg,
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
            }}
        >
            <Typography sx={{ fontSize: 30, mb: 1 }}>{icon}</Typography>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 950,
                    color,
                    lineHeight: 1,
                    mb: 0.5,
                }}
            >
                {value}
            </Typography>

            <Typography sx={{ color: "#0f172a", fontWeight: 900 }}>
                {title}
            </Typography>
        </Paper>
    );
};