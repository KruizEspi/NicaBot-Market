import { useMemo } from "react";
import type { Tienda } from "../types/tienda.type";

export const useTiendasFilter = (tiendas: Tienda[], search: string) => {
    return useMemo(() => {
        const value = search.toLowerCase().trim();

        if (!value) return tiendas;

        return tiendas.filter((tienda) => {
            return (
                tienda.nombre.toLowerCase().includes(value) ||
                tienda.categoria.toLowerCase().includes(value) ||
                tienda.ubicacion.toLowerCase().includes(value) ||
                tienda.descripcion.toLowerCase().includes(value)
            );
        });
    }, [tiendas, search]);
};