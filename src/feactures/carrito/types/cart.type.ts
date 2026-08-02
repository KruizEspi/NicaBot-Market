import type { Producto } from "../../productos/types/producto.type";

export type CartItem = {
    producto: Producto;
    quantity: number;
};

export type CustomerOrderStatus = "Pagado" | "En delivery" | "Entregado";

export type CustomerOrder = {
    id: number;
    customerName: string;
    customerEmail: string;
    deliveryAddress: string;
    items: CartItem[];
    subtotal: number;
    shippingCost: number;
    total: number;
    paymentReference: string;
    status: CustomerOrderStatus;
    createdAt: string;
};