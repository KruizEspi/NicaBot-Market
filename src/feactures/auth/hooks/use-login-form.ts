import { useState } from "react";
import type { LoginForm, UserRole } from "../types/  login-form.type";

const initialForm: LoginForm = {
    email: "",
    password: "",
    role: "cliente",
    remember: false,
};

export const useLoginForm = () => {
    const [form, setForm] = useState<LoginForm>(initialForm);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (
        field: keyof LoginForm,
        value: string | boolean,
    ) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleRoleChange = (role: UserRole) => {
        setForm((prev) => ({
            ...prev,
            role,
        }));
    };

    const handleSubmit = () => {
        console.log("Login:", form);

        if (form.role === "admin") {
            window.location.href = "/dashboard";
            return;
        }

        if (form.role === "negocio") {
            window.location.href = "/dashboard";
            return;
        }

        window.location.href = "/";
    };

    const isDisabled = !form.email || !form.password;

    return {
        form,
        showPassword,
        isDisabled,
        handleChange,
        handleRoleChange,
        handleSubmit,
        setShowPassword,
    };
};