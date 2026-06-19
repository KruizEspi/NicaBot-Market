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
                height: 160,
                objectFit: "contain",
                backgroundColor: "#f8fafc",
                borderRadius: 3,
                mb: 2,
            }}
        />
    );
};