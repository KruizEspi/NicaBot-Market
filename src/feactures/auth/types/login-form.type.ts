export type UserRole = "cliente" | "negocio" | "admin";

export type LoginForm = {
    email: string;
    password: string;
    role: UserRole;
    remember: boolean;
};