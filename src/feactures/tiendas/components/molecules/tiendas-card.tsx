import {
    Box,
    Button,
    Card,
    CardContent,
    Chip, IconButton,
    Typography,
} from "@mui/material";

import type { Tienda } from "../../types/tienda.type";
import { TiendaAvatar } from "../atoms/tiendas-avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavoritesStore } from "../../../favoritos/store/use-favorites-store";

type TiendasCardProps = {
    tienda: Tienda;
};

export const TiendasCard = ({ tienda }: TiendasCardProps) => {
    const isOpen = tienda.estado === "Abierto";

    const { isStoreFavorite, toggleStoreFavorite } = useFavoritesStore();

    const isFavorite = isStoreFavorite(tienda.id);

    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                border: "1px solid #e2e8f0",
                background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                boxShadow: "0 10px 26px rgba(15, 23, 42, 0.06)",
                transition: "all 0.25s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.14)",
                    borderColor: "#86efac",
                },
                "&:hover .store-avatar-wrap": {
                    transform: "scale(1.05)",
                },
            }}
        >
            <Box
                sx={{
                    height: 78,
                    position: "relative",
                    background:
                        "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 28%), radial-gradient(circle at 90% 10%, rgba(250,204,21,0.22), transparent 30%)",
                    },
                }}
            />

            <Chip
                size="small"
                label={tienda.estado}
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 68,
                    zIndex: 3,
                    fontWeight: 900,
                    borderRadius: 999,
                    color: isOpen ? "#064e3b" : "#475569",
                    backgroundColor: isOpen ? "#facc15" : "#e5e7eb",
                    boxShadow: isOpen
                        ? "0 8px 18px rgba(250, 204, 21, 0.35)"
                        : "none",
                }}
            />

            <IconButton
                onClick={() => toggleStoreFavorite(tienda)}
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    zIndex: 5,
                    width: 40,
                    height: 40,
                    backgroundColor: isFavorite ? "#fee2e2" : "rgba(255,255,255,0.92)",
                    color: isFavorite ? "#dc2626" : "#064e3b",
                    border: "1px solid rgba(255,255,255,0.45)",
                    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.18)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                        backgroundColor: "#fee2e2",
                        color: "#dc2626",
                        transform: "scale(1.05)",
                    },
                }}
            >
                {isFavorite ? (
                    <FavoriteIcon fontSize="small" />
                ) : (
                    <FavoriteBorderIcon fontSize="small" />
                )}
            </IconButton>
            <CardContent
                sx={{
                    p: 2.4,
                    pt: 0,
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "anchor-center",
                        gap: 1.5,
                        mt: -8,
                        mb: 2,
                    }}
                >
                    <Box
                        className="store-avatar-wrap"
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",

                            backgroundColor: "#fff",
                            border: "4px solid #fff",
                            boxShadow: "0 12px 28px rgba(15, 23, 42, 0.18)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.25s ease",
                            flexShrink: 0,
                        }}
                    >
                        <TiendaAvatar name={tienda.nombre} />
                    </Box>

                    <Box sx={{ minWidth: 0, pb: 0.5 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 900,
                                color: "#fcfdff",
                                lineHeight: 1.15,
                                fontSize: { xs: 18, md: 20 },
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {tienda.nombre}
                        </Typography>

                        <Chip
                            label={tienda.categoria}
                            size="small"
                            sx={{
                                mt: 0.7,
                                height: 24,
                                fontWeight: 800,
                                borderRadius: 999,
                                color: "#166534",
                                backgroundColor: "#dcfce7",
                                border: "1px solid #86efac",
                            }}
                        />
                    </Box>
                </Box>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#64748b",
                        lineHeight: 1.6,
                        mb: 2,
                        minHeight: 42,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {tienda.descripcion}
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gap: 1,
                        mb: 2,
                        p: 1.4,
                        borderRadius: 3,
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                    }}
                >
                    <InfoRow icon="📍" text={tienda.ubicacion} color="#eff6ff" />
                    <InfoRow icon="📞" text={tienda.telefono} color="#ecfdf5" />
                    <InfoRow icon="🕒" text={tienda.horario} color="#fffbeb" />

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1.5,
                    }}
                >
                    <Box sx={{ minWidth: 0 }}>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#64748b",
                                fontWeight: 800,
                            }}
                        >
                            Estado actual
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: isOpen ? "#15803d" : "#991b1b",
                                fontWeight: 900,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {isOpen ? "Disponible ahora" : "Fuera de horario"}
                        </Typography>

                    </Box>

                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            textTransform: "none",
                            borderRadius: 999,
                            px: 2.4,
                            py: 0.9,
                            fontWeight: 900,
                            whiteSpace: "nowrap",
                            background: isOpen
                                ? "linear-gradient(135deg, #15803d 0%, #22c55e 100%)"
                                : "linear-gradient(135deg, #64748b 0%, #94a3b8 100%)",
                            boxShadow: isOpen
                                ? "0 12px 28px rgba(22, 163, 74, 0.28)"
                                : "0 10px 22px rgba(100, 116, 139, 0.22)",
                            "&:hover": {
                                background: isOpen
                                    ? "linear-gradient(135deg, #166534 0%, #16a34a 100%)"
                                    : "linear-gradient(135deg, #475569 0%, #64748b 100%)",
                                transform: "translateY(-1px)",
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

type InfoRowProps = {
    icon: string;
    text: string;
    color: string;
};

const InfoRow = ({ icon, text, color }: InfoRowProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 0,
            }}
        >
            <Box
                sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 14,
                }}
            >
                {icon}
            </Box>

            <Typography
                variant="body2"
                sx={{
                    color: "#475569",
                    fontWeight: 650,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};