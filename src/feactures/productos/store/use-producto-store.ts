import { create } from "zustand";

import { productosMock } from "../data/productos.mock";
import type { Producto } from "../types/producto.type";

type ProductosStore = {
    productos: Producto[];
    addProducto: (producto: Producto) => void;
};

export const useProductosStore = create<ProductosStore>((set) => ({
    productos: productosMock,

    addProducto: (producto) =>
        set((state) => ({
            productos: [producto, ...state.productos],
        })),
}));