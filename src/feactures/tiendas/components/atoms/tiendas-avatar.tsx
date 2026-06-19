import { Avatar } from "@mui/material";

type TiendaAvatarProps = {
    name: string;
};

export const TiendaAvatar = ({ name }: TiendaAvatarProps) => {
    return (
        <Avatar
            sx={{
                bgcolor: "#4cae50",
                width: 52,
                height: 52,
                mr: 2,
                fontWeight: "bold",
            }}
        >
            {name.charAt(0)}
        </Avatar>
    );
};