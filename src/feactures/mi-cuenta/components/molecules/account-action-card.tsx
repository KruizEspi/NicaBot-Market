import { NavLink } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";

type AccountActionCardProps = {
    title: string;
    description: string;
    icon: string;
    to: string;
    buttonText: string;
};

export const AccountActionCard = ({
                                      title,
                                      description,
                                      icon,
                                      to,
                                      buttonText,
                                  }: AccountActionCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                transition: "all 0.22s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 44px rgba(15, 23, 42, 0.12)",
                    borderColor: "#86efac",
                },
            }}
        >
            <Box
                sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 3,
                    backgroundColor: "#ecfdf5",
                    color: "#15803d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    mb: 2,
                }}
            >
                {icon}
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a" }}>
                {title}
            </Typography>

            <Typography
                variant="body2"
                sx={{ color: "#64748b", lineHeight: 1.7, mt: 0.8, mb: 2 }}
            >
                {description}
            </Typography>

            <Button
                component={NavLink}
                to={to}
                variant="outlined"
                sx={{
                    textTransform: "none",
                    textDecoration: "none",
                    borderRadius: 999,
                    fontWeight: 900,
                    color: "#15803d",
                    borderColor: "#86efac",
                    backgroundColor: "#f0fdf4",
                    "&:hover": {
                        borderColor: "#16a34a",
                        backgroundColor: "#dcfce7",
                    },
                }}
            >
                {buttonText}
            </Button>
        </Paper>
    );
};