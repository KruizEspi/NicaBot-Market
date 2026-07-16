import { create } from "zustand";

export type UserRoleId = 1 | 2 | 3;

export type UserRoleName = "Administrador" | "Cliente" | "Negocio";

export type AuthUser = {
    id: number;
    name: string;
    email: string;
    role: {
        id: UserRoleId;
        name: UserRoleName;
    };
};

type AuthStore = {
    user: AuthUser | null;
    isAuthenticated: boolean;

    loginAsAdmin: (email: string) => void;
    loginAsCliente: (email: string) => void;
    loginAsNegocio: (email: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isAuthenticated: false,

    loginAsAdmin: (email) =>
        set({
            isAuthenticated: true,
            user: {
                id: 1,
                name: "Administrador",
                email,
                role: {
                    id: 1,
                    name: "Administrador",
                },
            },
        }),

    loginAsCliente: (email) =>
        set({
            isAuthenticated: true,
            user: {
                id: 2,
                name: "Cliente",
                email,
                role: {
                    id: 2,
                    name: "Cliente",
                },
            },
        }),

    loginAsNegocio: (email) =>
        set({
            isAuthenticated: true,
            user: {
                id: 3,
                name: "Negocio",
                email,
                role: {
                    id: 3,
                    name: "Negocio",
                },
            },
        }),

    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
        }),
}));