import { Box } from "@mui/material";

type DashboardStatIconProps = {
    icon: string;
};

export const DashboardStatIcon = ({ icon }: DashboardStatIconProps) => {
    return (
        <Box
            sx={{
                width: 48,
                height: 48,
                borderRadius: 3,
                backgroundColor: "#e8f5e9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
            }}
        >
            {icon}
        </Box>
    );
};