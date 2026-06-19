import { Box, Typography } from "@mui/material";

export const AuthLogo = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
                component="img"
                src="/IconEave.png"
                alt="NicaBot Market"
                sx={{
                    width: 64,
                    height: 64,
                    objectFit: "contain",
                }}
            />

            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        lineHeight: 1.1,
                    }}
                >
                    NICABOT
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#64748b",
                        fontWeight: 500,
                    }}
                >
                    MARKET
                </Typography>
            </Box>
        </Box>
    );
};