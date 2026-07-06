import { Box } from "@mui/material";

type ProductImageProps = {
    src: string;
    alt: string;
};

export const ProductImage = ({ src, alt }: ProductImageProps) => {
    return (
        <Box
            component="img"
            src={src}
            alt={alt}
            onError={(event) => {
                event.currentTarget.src = "/IconEave.png";
            }}
            sx={{
                width: "100%",
                height: 170,
                objectFit: "contain",
                display: "block",
                borderRadius: 3,
                backgroundColor: "transparent",
            }}
        />
    );
};