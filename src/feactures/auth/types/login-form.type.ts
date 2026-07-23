export type UserRole = "cliente" | "negocio" | "admin" | "repartidor";

export type LoginForm = {
    email: string;
    password: string;
    role: UserRole;
    remember: boolean;
};