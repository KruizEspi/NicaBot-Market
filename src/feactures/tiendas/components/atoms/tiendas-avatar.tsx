import { Avatar } from "@mui/material";

type TiendaAvatarProps = {
    name: string;
};

export const TiendaAvatar = ({ name }: TiendaAvatarProps) => {
    return (
        <Avatar
            sx={{
                bgcolor: "#4cae50",
                width: 50,
                height: 50,
                mr: -0.1,
                fontWeight: "bold",
            }}
        >
            {name.charAt(0)}
        </Avatar>
    );
};