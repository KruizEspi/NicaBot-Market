import { useMemo } from "react";
import type { Producto } from "../types/producto.type";

export const useProductosFilter = (productos: Producto[], search: string) => {
    return useMemo(() => {
        const value = search.toLowerCase().trim();

        if (!value) return productos;

        return productos.filter((producto) => {
            return (
                producto.nombre.toLowerCase().includes(value) ||
                producto.categoria.toLowerCase().includes(value) ||
                producto.tienda.toLowerCase().includes(value) ||
                producto.ubicacion.toLowerCase().includes(value)
            );
        });
    }, [productos, search]);
};