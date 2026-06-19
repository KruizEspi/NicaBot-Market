import { Avatar } from "@mui/material";

type StoreAvatarProps = {
    name: string;
};

export const StoreAvatar = ({ name }: StoreAvatarProps) => {
    return (
        <Avatar
            sx={{
                bgcolor: "#4cae50",
                width: 48,
                height: 48,
                mr: 2,
                fontWeight: "bold",
            }}
        >
            {name.charAt(0)}
        </Avatar>
    );
};