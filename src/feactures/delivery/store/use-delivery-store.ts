import { create } from "zustand";

import { deliveryOrdersMock } from "../data/delivery.mock";
import type { DeliveryOrder, DeliveryStatus } from "../types/delivery.types";

type DeliveryStore = {
    orders: DeliveryOrder[];
    currentRepartidorId: number;

    takeOrder: (orderId: number) => void;
    updateOrderStatus: (orderId: number, status: DeliveryStatus) => void;
};

export const useDeliveryStore = create<DeliveryStore>((set) => ({
    orders: deliveryOrdersMock,
    currentRepartidorId: 4,

    takeOrder: (orderId) =>
        set((state) => ({
            orders: state.orders.map((order) =>
                order.id === orderId
                    ? {
                        ...order,
                        estado: "Aceptado",
                        repartidorId: state.currentRepartidorId,
                    }
                    : order,
            ),
        })),

    updateOrderStatus: (orderId, status) =>
        set((state) => ({
            orders: state.orders.map((order) =>
                order.id === orderId
                    ? {
                        ...order,
                        estado: status,
                    }
                    : order,
            ),
        })),
}));