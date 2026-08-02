import { create } from "zustand";

import type { Producto } from "../../productos/types/producto.type";
import type { CartItem, CustomerOrder } from "../types/cart.type";

type CheckoutParams = {
    customerName: string;
    customerEmail: string;
    deliveryAddress: string;
};

type CartStore = {
    items: CartItem[];
    orders: CustomerOrder[];

    addToCart: (producto: Producto) => void;
    removeFromCart: (productoId: number) => void;
    increaseQuantity: (productoId: number) => void;
    decreaseQuantity: (productoId: number) => void;
    clearCart: () => void;
    getSubtotal: () => number;
    checkout: (params: CheckoutParams) => CustomerOrder | null;
    markOrderAsSentToDelivery: (orderId: number) => void;
};

const SHIPPING_COST = 80;

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    orders: [],

    addToCart: (producto) =>
        set((state) => {
            const exists = state.items.some(
                (item) => item.producto.id === producto.id,
            );

            if (exists) {
                return {
                    items: state.items.map((item) =>
                        item.producto.id === producto.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            : item,
                    ),
                };
            }

            return {
                items: [
                    ...state.items,
                    {
                        producto,
                        quantity: 1,
                    },
                ],
            };
        }),

    removeFromCart: (productoId) =>
        set((state) => ({
            items: state.items.filter((item) => item.producto.id !== productoId),
        })),

    increaseQuantity: (productoId) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.producto.id === productoId
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item,
            ),
        })),

    decreaseQuantity: (productoId) =>
        set((state) => ({
            items: state.items
                .map((item) =>
                    item.producto.id === productoId
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item,
                )
                .filter((item) => item.quantity > 0),
        })),

    clearCart: () => set({ items: [] }),

    getSubtotal: () => {
        return get().items.reduce(
            (total, item) => total + item.producto.precio * item.quantity,
            0,
        );
    },

    checkout: ({ customerName, customerEmail, deliveryAddress }) => {
        const items = get().items;

        if (items.length === 0) return null;

        const subtotal = get().getSubtotal();

        const order: CustomerOrder = {
            id: Date.now(),
            customerName,
            customerEmail,
            deliveryAddress,
            items,
            subtotal,
            shippingCost: SHIPPING_COST,
            total: subtotal + SHIPPING_COST,
            paymentReference: `PAY-${Date.now()}`,
            status: "Pagado",
            createdAt: new Date().toISOString(),
        };

        set((state) => ({
            orders: [order, ...state.orders],
            items: [],
        }));

        return order;
    },

    markOrderAsSentToDelivery: (orderId) =>
        set((state) => ({
            orders: state.orders.map((order) =>
                order.id === orderId
                    ? {
                        ...order,
                        status: "En delivery",
                    }
                    : order,
            ),
        })),
}));