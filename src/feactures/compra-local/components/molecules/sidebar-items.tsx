import { ListItemButton, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

type SidebarItemProps = {
    primary: string;
    secondary?: string;
    to?: string;
};

export const SidebarItem = ({ primary, secondary, to }: SidebarItemProps) => {
    const content = (
        <ListItemText
            primary={
                <Typography sx={{ fontSize: secondary ? 16 : 15, fontWeight: 600 }}>
                    {primary}
                </Typography>
            }
            secondary={
                secondary ? (
                    <Typography sx={{ fontSize: 13, color: "#64748b" }}>
                        {secondary}
                    </Typography>
                ) : undefined
            }
        />
    );

    if (!to) {
        return (
            <ListItemButton
                sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    py: secondary ? 1.4 : 1.2,
                }}
            >
                {content}
            </ListItemButton>
        );
    }

    return (
        <ListItemButton
            component={NavLink}
            to={to}
            sx={{
                borderRadius: 2,
                mb: 0.5,
                py: secondary ? 1.4 : 1.2,
                color: "inherit",
                textDecoration: "none",
                "&.active": {
                    backgroundColor: "#e8f5e9",
                },
                "&.active:hover": {
                    backgroundColor: "#dff3e1",
                },
            }}
        >
            {content}
        </ListItemButton>
    );
};