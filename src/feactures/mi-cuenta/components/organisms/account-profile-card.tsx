import { Avatar, Box, Button, Chip, Paper, Typography } from "@mui/material";

export const AccountProfileCard = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                overflow: "hidden",
                borderRadius: 5,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    minHeight: 210,
                    p: { xs: 3, md: 4 },
                    background:
                        "linear-gradient(135deg, #064e3b 0%, #15803d 50%, #22c55e 100%)",
                    color: "#fff",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 28%), radial-gradient(circle at 90% 5%, rgba(250,204,21,0.25), transparent 30%)",
                    },
                }}
            >
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Chip
                        label="Cuenta activa"
                        size="small"
                        sx={{
                            mb: 3,
                            fontWeight: 900,
                            color: "#064e3b",
                            backgroundColor: "#facc15",
                            borderRadius: 999,
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexWrap: "wrap",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 92,
                                height: 92,
                                backgroundColor: "#facc15",
                                color: "#064e3b",
                                fontSize: 34,
                                fontWeight: 950,
                                border: "5px solid rgba(255,255,255,0.85)",
                                boxShadow: "0 18px 38px rgba(0,0,0,0.25)",
                            }}
                        >
                            K
                        </Avatar>

                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 950,
                                    lineHeight: 1.1,
                                    fontSize: { xs: 30, md: 44 },
                                }}
                            >
                                Kenia Ruiz
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1,
                                    color: "rgba(255,255,255,0.9)",
                                    fontWeight: 600,
                                }}
                            >
                                Cliente de NicaBot Market
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    p: { xs: 3, md: 4 },
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(4, minmax(0, 1fr))",
                    },
                    gap: 2,
                }}
            >
                <InfoItem title="Correo" value="kenia@nicabot.com" icon="📧" />
                <InfoItem title="Teléfono" value="8888-0000" icon="📞" />
                <InfoItem title="Rol" value="Cliente" icon="👤" />
                <InfoItem title="Ubicación" value="Managua" icon="📍" />
            </Box>
        </Paper>
    );
};

type InfoItemProps = {
    title: string;
    value: string;
    icon: string;
};

const InfoItem = ({ title, value, icon }: InfoItemProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#f8fafc",
            }}
        >
            <Typography sx={{ fontSize: 24, mb: 1 }}>{icon}</Typography>

            <Typography
                variant="caption"
                sx={{
                    color: "#64748b",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.4,
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    mt: 0.5,
                    color: "#0f172a",
                    fontWeight: 900,
                }}
            >
                {value}
            </Typography>
        </Paper>
    );
};