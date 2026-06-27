import {
    AppBar,
    Avatar,
    Box,
    Button,
    Chip,
    Toolbar,
    Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppLogo } from "../atoms/app-logo";

export const AppHeader = () => {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background:
                    "linear-gradient(135deg, #064e3b 0%, #15896d 42%, #22c55e 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.28)",
                boxShadow: "0 18px 45px rgba(6, 78, 59, 0.38)",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.25), transparent 24%), radial-gradient(circle at 85% 0%, rgba(250,204,21,0.22), transparent 28%)",
                    pointerEvents: "none",
                },
            }}
        >
            <Toolbar
                sx={{
                    position: "relative",
                    zIndex: 2,
                    minHeight: "88px !important",
                    px: { xs: 2, md: 4 },
                    display: "flex",
                    gap: 2,
                }}
            >
                <Box
                    component={NavLink}
                    to="/"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.6,
                        textDecoration: "none",
                        color: "#fff",
                        flexGrow: 1,
                        minWidth: 0,
                    }}
                >
                    <Box
                        sx={{
                            width: 66,
                            height: 66,
                            borderRadius: 4,
                            backgroundColor: "rgba(255,255,255,0.22)",
                            border: "1px solid rgba(255,255,255,0.36)",
                            boxShadow:
                                "0 10px 24px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.35)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backdropFilter: "blur(12px)",
                            flexShrink: 0,
                        }}
                    >
                        <AppLogo src="/IconEave.png" alt="NICABOT MARKET" size={54} />
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: 18, md: 24 },
                                    fontWeight: 950,
                                    letterSpacing: 0.6,
                                    lineHeight: 1,
                                    whiteSpace: "nowrap",
                                    textShadow: "0 2px 8px rgba(0,0,0,0.22)",
                                }}
                            >
                                NICABOT MARKET
                            </Typography>

                            <Chip
                                label="Beta"
                                size="small"
                                sx={{
                                    display: { xs: "none", sm: "inline-flex" },
                                    height: 22,
                                    fontSize: 11,
                                    fontWeight: 900,
                                    color: "#064e3b",
                                    backgroundColor: "#facc15",
                                    boxShadow: "0 6px 14px rgba(250,204,21,0.35)",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                display: { xs: "none", sm: "block" },
                                mt: 0.5,
                                fontSize: 13,
                                color: "rgba(255,255,255,0.94)",
                                fontWeight: 600,
                            }}
                        >
                            Comercio local inteligente para negocios y clientes
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        gap: 1.5,
                        px: 2,
                        py: 1,
                        borderRadius: 999,
                        backgroundColor: "rgba(6,78,59,0.36)",
                        border: "1px solid rgba(255,255,255,0.28)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                    }}
                >
                    <Avatar
                        sx={{
                            width: 34,
                            height: 34,
                            backgroundColor: "#facc15",
                            color: "#064e3b",
                            fontWeight: 900,
                            fontSize: 15,
                        }}
                    >
                        N
                    </Avatar>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: 13,
                                fontWeight: 900,
                                color: "#fff",
                                lineHeight: 1.1,
                            }}
                        >
                            Invitado
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 11,
                                color: "rgba(255,255,255,0.86)",
                                lineHeight: 1.1,
                            }}
                        >
                            Sin sesión activa
                        </Typography>
                    </Box>
                </Box>

                <Button
                    component={NavLink}
                    to="/login"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        textTransform: "none",
                        textDecoration: "none",
                        fontWeight: 900,
                        px: { xs: 2.4, md: 3.4 },
                        py: 1.15,
                        borderRadius: 999,
                        background: "linear-gradient(135deg, #facc15 0%, #f97316 100%)",
                        color: "#1c1917",
                        boxShadow:
                            "0 14px 30px rgba(249,115,22,0.36), inset 0 1px 0 rgba(255,255,255,0.45)",
                        border: "1px solid rgba(255,255,255,0.55)",
                        transition: "all 0.22s ease",
                        whiteSpace: "nowrap",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: "-80%",
                            width: "60%",
                            height: "100%",
                            background:
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                            transform: "skewX(-20deg)",
                            transition: "left 0.45s ease",
                        },
                        "&:hover": {
                            background: "linear-gradient(135deg, #fde047 0%, #fb923c 100%)",
                            color: "#111827",
                            transform: "translateY(-2px)",
                            boxShadow:
                                "0 18px 38px rgba(249,115,22,0.48), inset 0 1px 0 rgba(255,255,255,0.7)",
                        },
                        "&:hover::before": {
                            left: "120%",
                        },
                    }}
                >
                    Entrar →
                </Button>
            </Toolbar>
        </AppBar>
    );
};