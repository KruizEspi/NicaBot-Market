import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppLogo } from "../atoms/app-logo";

export const AppHeader = () => {
    return (
        <AppBar sx={{ backgroundColor: "#4cae50" }} position="sticky">
            <Toolbar sx={{ minHeight: "86px !important" }}>
                <AppLogo src="/IconEave.png" alt="NICABOT MARKET" size={66} />

                <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
                    NICABOT MARKET
                </Typography>

                <Button
                    component={NavLink}
                    to="/login"
                    color="inherit"
                    sx={{
                        textTransform: "none",
                        textDecoration: "none",
                        fontWeight: 700,
                        px: 3,
                        py: 1,
                        borderRadius: 999,
                        backgroundColor: "#fff",
                        color: "#2e7d32",
                        boxShadow: "0 8px 20px rgba(15, 23, 42, 0.18)",
                        border: "1px solid rgba(255,255,255,0.6)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                            backgroundColor: "#e8f5e9",
                            color: "#1b5e20",
                            transform: "translateY(-2px)",
                            boxShadow: "0 12px 26px rgba(15, 23, 42, 0.24)",
                        },
                    }}
                >
                    Entrar
                </Button>
            </Toolbar>
        </AppBar>
    );
};