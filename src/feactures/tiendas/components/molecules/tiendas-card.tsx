import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Typography,
} from "@mui/material";

import type { Tienda } from "../../types/tienda.type";
import { TiendaAvatar } from "../atoms/tiendas-avatar";

type TiendasCardProps = {
    tienda: Tienda;
};

export const TiendasCard = ({ tienda }: TiendasCardProps) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                transition: "0.2s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 35px rgba(15, 23, 42, 0.12)",
                },
            }}
        >
            <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TiendaAvatar name={tienda.nombre} />

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

                <Typography variant="body2" sx={{ mb: 1 }}>
                    📍 {tienda.ubicacion}
                </Typography>

                <Typography variant="body2" sx={{ mb: 1 }}>
                    📞 {tienda.telefono}
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                    🕒 {tienda.horario}
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