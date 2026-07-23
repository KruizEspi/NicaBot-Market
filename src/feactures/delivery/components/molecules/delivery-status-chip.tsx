import { Chip } from "@mui/material";

import type { DeliveryStatus } from "../../types/delivery.types";

type DeliveryStatusChipProps = {
    status: DeliveryStatus;
};

export const DeliveryStatusChip = ({ status }: DeliveryStatusChipProps) => {
    const isAvailable = status === "Disponible";
    const isDelivered = status === "Entregado";
    const isCanceled = status === "Cancelado";

    return (
        <Chip
            label={status}
            size="small"
            sx={{
                fontWeight: 900,
                borderRadius: 999,
                color: isAvailable
                    ? "#064e3b"
                    : isDelivered
                        ? "#075985"
                        : isCanceled
                            ? "#991b1b"
                            : "#92400e",
                backgroundColor: isAvailable
                    ? "#dcfce7"
                    : isDelivered
                        ? "#e0f2fe"
                        : isCanceled
                            ? "#fee2e2"
                            : "#fef3c7",
                border: `1px solid ${
                    isAvailable
                        ? "#86efac"
                        : isDelivered
                            ? "#7dd3fc"
                            : isCanceled
                                ? "#fecaca"
                                : "#fde68a"
                }`,
            }}
        />
    );
};