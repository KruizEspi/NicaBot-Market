import { Box, Button, Paper, Typography } from "@mui/material";

import type { DeliveryOrder, DeliveryStatus } from "../../types/delivery.types";
import { DeliveryStatusChip } from "./delivery-status-chip";

type DeliveryOrderCardProps = {
    order: DeliveryOrder;
    isMine?: boolean;
    onTake?: (orderId: number) => void;
    onUpdateStatus?: (orderId: number, status: DeliveryStatus) => void;
};

export const DeliveryOrderCard = ({
                                      order,
                                      isMine = false,
                                      onTake,
                                      onUpdateStatus,
                                  }: DeliveryOrderCardProps) => {
    const nextStatus = getNextStatus(order.estado);

    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                borderRadius: 5,
                border: "1px solid #e2e8f0",
                background:
                    "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                transition: "all 0.22s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 44px rgba(15, 23, 42, 0.12)",
                    borderColor: "#86efac",
                },
            }}
        >
            <Box
                sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                }}
            >
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 950,
                            color: "#0f172a",
                            lineHeight: 1.2,
                        }}
                    >
                        Pedido #{order.id}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            mt: 0.5,
                            color: "#64748b",
                            fontWeight: 700,
                        }}
                    >
                        {order.producto}
                    </Typography>
                </Box>

                <DeliveryStatusChip status={order.estado} />
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gap: 1.2,
                    mb: 2,
                }}
            >
                <InfoRow icon="🏪" label="Tienda" value={order.tienda} />
                <InfoRow icon="📍" label="Origen" value={order.tiendaUbicacion} />
                <InfoRow icon="🏠" label="Destino" value={order.clienteUbicacion} />
                <InfoRow icon="🛵" label="Distancia" value={`${order.distanciaKm} km`} />
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(3, minmax(0, 1fr))",
                    },
                    gap: 1.2,
                    mb: 2,
                }}
            >
                <MiniStat
                    title="Costo envío"
                    value={`C$ ${order.costoEnvio}`}
                    bg="#eff6ff"
                    color="#0369a1"
                />

                <MiniStat
                    title="Gana repartidor"
                    value={`C$ ${order.comisionRepartidor}`}
                    bg="#ecfdf5"
                    color="#15803d"
                />

                <MiniStat
                    title="Plataforma"
                    value={`C$ ${order.comisionPlataforma}`}
                    bg="#fffbeb"
                    color="#92400e"
                />
            </Box>

            {!isMine && order.estado === "Disponible" && (
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => onTake?.(order.id)}
                    sx={{
                        textTransform: "none",
                        borderRadius: 999,
                        py: 1.1,
                        fontWeight: 900,
                        background: "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                        boxShadow: "0 12px 28px rgba(22, 163, 74, 0.28)",
                        "&:hover": {
                            background: "linear-gradient(135deg, #166534 0%, #16a34a 100%)",
                        },
                    }}
                >
                    Tomar pedido
                </Button>
            )}

            {isMine && nextStatus && (
                <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => onUpdateStatus?.(order.id, nextStatus)}
                    sx={{
                        textTransform: "none",
                        borderRadius: 999,
                        py: 1.1,
                        fontWeight: 900,
                        color: "#15803d",
                        borderColor: "#86efac",
                        backgroundColor: "#f0fdf4",
                        "&:hover": {
                            borderColor: "#16a34a",
                            backgroundColor: "#dcfce7",
                        },
                    }}
                >
                    Cambiar a: {nextStatus}
                </Button>
            )}
        </Paper>
    );
};

type InfoRowProps = {
    icon: string;
    label: string;
    value: string;
};

const InfoRow = ({ icon, label, value }: InfoRowProps) => {
    return (
        <Box sx={{ display: "flex", gap: 1, minWidth: 0 }}>
            <Typography sx={{ width: 24 }}>{icon}</Typography>

            <Box sx={{ minWidth: 0 }}>
                <Typography
                    variant="caption"
                    sx={{
                        display: "block",
                        color: "#64748b",
                        fontWeight: 800,
                        textTransform: "uppercase",
                    }}
                >
                    {label}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#0f172a",
                        fontWeight: 800,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {value}
                </Typography>
            </Box>
        </Box>
    );
};

type MiniStatProps = {
    title: string;
    value: string;
    bg: string;
    color: string;
};

const MiniStat = ({ title, value, bg, color }: MiniStatProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 1.5,
                borderRadius: 3,
                border: "1px solid #e2e8f0",
                backgroundColor: bg,
            }}
        >
            <Typography
                variant="caption"
                sx={{
                    color: "#64748b",
                    fontWeight: 800,
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    color,
                    fontWeight: 950,
                }}
            >
                {value}
            </Typography>
        </Paper>
    );
};

const getNextStatus = (status: DeliveryStatus): DeliveryStatus | null => {
    if (status === "Aceptado") return "En camino a tienda";
    if (status === "En camino a tienda") return "Recogido";
    if (status === "Recogido") return "En camino al cliente";
    if (status === "En camino al cliente") return "Entregado";

    return null;
};