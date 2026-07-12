import { Paper, Typography, Box } from "@mui/material";

type AccountStatCardProps = {
    title: string;
    value: number | string;
    icon: string;
    description: string;
    bg: string;
    color: string;
};

export const AccountStatCard = ({
                                    title,
                                    value,
                                    icon,
                                    description,
                                    bg,
                                    color,
                                }: AccountStatCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                background: bg,
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
            }}
        >
            <Box
                sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    mb: 2,
                    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
                }}
            >
                {icon}
            </Box>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 950,
                    color,
                    lineHeight: 1,
                    mb: 0.7,
                }}
            >
                {value}
            </Typography>

            <Typography sx={{ fontWeight: 900, color: "#0f172a", mb: 0.5 }}>
                {title}
            </Typography>

            <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.6 }}>
                {description}
            </Typography>
        </Paper>
    );
};