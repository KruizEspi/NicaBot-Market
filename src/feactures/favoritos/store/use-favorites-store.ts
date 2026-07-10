import { create } from "zustand";
import type { Producto } from "../../productos/types/producto.type";
import type { Tienda } from "../../tiendas/types/tienda.type";

type FavoriteType = "producto" | "tienda";

type FavoritesStore = {
    favoriteProducts: Producto[];
    favoriteStores: Tienda[];

    addProductFavorite: (product: Producto) => void;
    removeProductFavorite: (productId: number) => void;
    isProductFavorite: (productId: number) => boolean;

    addStoreFavorite: (store: Tienda) => void;
    removeStoreFavorite: (storeId: number) => void;
    isStoreFavorite: (storeId: number) => boolean;

    toggleProductFavorite: (product: Producto) => void;
    toggleStoreFavorite: (store: Tienda) => void;

    clearFavorites: () => void;

    totalFavorites: () => number;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
    favoriteProducts: [],
    favoriteStores: [],

    addProductFavorite: (product) =>
        set((state) => {
            const alreadyExists = state.favoriteProducts.some(
                (item) => item.id === product.id,
            );

            if (alreadyExists) return state;

            return {
                favoriteProducts: [...state.favoriteProducts, product],
            };
        }),

    removeProductFavorite: (productId) =>
        set((state) => ({
            favoriteProducts: state.favoriteProducts.filter(
                (product) => product.id !== productId,
            ),
        })),

    isProductFavorite: (productId) => {
        return get().favoriteProducts.some((product) => product.id === productId);
    },

    addStoreFavorite: (store) =>
        set((state) => {
            const alreadyExists = state.favoriteStores.some(
                (item) => item.id === store.id,
            );

            if (alreadyExists) return state;

            return {
                favoriteStores: [...state.favoriteStores, store],
            };
        }),

    removeStoreFavorite: (storeId) =>
        set((state) => ({
            favoriteStores: state.favoriteStores.filter(
                (store) => store.id !== storeId,
            ),
        })),

    isStoreFavorite: (storeId) => {
        return get().favoriteStores.some((store) => store.id === storeId);
    },

    toggleProductFavorite: (product) => {
        const isFavorite = get().isProductFavorite(product.id);

        if (isFavorite) {
            get().removeProductFavorite(product.id);
            return;
        }

        get().addProductFavorite(product);
    },

    toggleStoreFavorite: (store) => {
        const isFavorite = get().isStoreFavorite(store.id);

        if (isFavorite) {
            get().removeStoreFavorite(store.id);
            return;
        }

        get().addStoreFavorite(store);
    },

    clearFavorites: () =>
        set({
            favoriteProducts: [],
            favoriteStores: [],
        }),

    totalFavorites: () => {
        return get().favoriteProducts.length + get().favoriteStores.length;
    },
}));