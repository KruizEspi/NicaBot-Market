import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { Tienda } from "../../types/tienda.type";

type TiendaContactDialogProps = {
    open: boolean;
    tienda: Tienda;
    onClose: () => void;
};

export const TiendaContactDialog = ({
                                        open,
                                        tienda,
                                        onClose,
                                    }: TiendaContactDialogProps) => {
    const cleanPhone = tienda.telefono.replace(/\D/g, "");
    const phoneWithCode = `505${cleanPhone}`;

    const handleWhatsApp = () => {
        const message = `Hola, vi su tienda ${tienda.nombre} en NicaBot Market y me gustaría consultar información.`;

        window.open(
            `https://wa.me/${phoneWithCode}?text=${encodeURIComponent(message)}`,
            "_blank",
        );
    };

    const handleCall = () => {
        window.location.href = `tel:+${phoneWithCode}`;
    };

    const handleOpenMap = () => {
        window.open(`https://www.google.com/maps?q=${tienda.lat},${tienda.lng}`, "_blank");
    };

    const handleCopyPhone = async () => {
        await navigator.clipboard.writeText(`+${phoneWithCode}`);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="xs"
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: 5,
                    overflow: "hidden",
                },
            }}
        >
            <DialogTitle
                sx={{
                    background:
                        "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                    color: "#fff",
                    fontWeight: 900,
                    pr: 6,
                }}
            >
                Contactar tienda

                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 12,
                        top: 10,
                        color: "#fff",
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 3 }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        {tienda.nombre}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#64748b" }}>
                        {tienda.ubicacion}
                    </Typography>
                </Box>

                <Stack spacing={1.5}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleWhatsApp}
                        sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            borderRadius: 3,
                            py: 1.3,
                            fontWeight: 900,
                            backgroundColor: "#22c55e",
                            "&:hover": {
                                backgroundColor: "#16a34a",
                            },
                        }}
                    >
                        💬 Enviar mensaje por WhatsApp
                    </Button>

                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleCall}
                        sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            borderRadius: 3,
                            py: 1.3,
                            fontWeight: 800,
                        }}
                    >
                        📞 Llamar a la tienda
                    </Button>

                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleOpenMap}
                        sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            borderRadius: 3,
                            py: 1.3,
                            fontWeight: 800,
                        }}
                    >
                        📍 Ver ubicación en Google Maps
                    </Button>

                    <Button
                        fullWidth
                        variant="text"
                        onClick={handleCopyPhone}
                        sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            borderRadius: 3,
                            py: 1.3,
                            fontWeight: 800,
                            color: "#475569",
                        }}
                    >
                        📋 Copiar teléfono
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};