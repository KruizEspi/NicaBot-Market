import { Box } from "@mui/material";

type AppLogoProps = {
    src: string;
    alt: string;
    size?: number;
};

export const AppLogo = ({ src, alt, size = 66 }: AppLogoProps) => {
    return (
        <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
                width: size,
                height: size,
                objectFit: "contain",
                mr: 1.5,
            }}
        />
    );
};