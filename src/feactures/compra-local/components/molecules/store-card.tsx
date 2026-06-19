import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Typography,
} from "@mui/material";
import type { Tienda } from "../../types/tienda.type";
import { StoreAvatar } from "../atoms/store-avatar";

type StoreCardProps = {
    tienda: Tienda;
};

export const StoreCard = ({ tienda }: StoreCardProps) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                transition: "0.2s ease",
                backgroundColor: "#fff",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 35px rgba(15, 23, 42, 0.12)",
                },
            }}
        >
            <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <StoreAvatar name={tienda.nombre} />

                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {tienda.nombre}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {tienda.categoria}
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {tienda.descripcion}
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                    📍 {tienda.ubicacion}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <Chip
                        size="small"
                        label={tienda.estado}
                        color={tienda.estado === "Abierto" ? "success" : "default"}
                    />

                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#4cae50",
                            "&:hover": {
                                backgroundColor: "#3f9844",
                            },
                        }}
                    >
                        Ver tienda
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};