import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { LoginForm, UserRole } from "../types/login-form.type";
import { useAuthStore } from "../../../shared/store/use-auth-store";

const initialForm: LoginForm = {
    email: "",
    password: "",
    role: "cliente",
    remember: false,
};

export const useLoginForm = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState<LoginForm>(initialForm);
    const [showPassword, setShowPassword] = useState(false);

    const { loginAsAdmin, loginAsCliente, loginAsNegocio } = useAuthStore();

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
        if (!form.email || !form.password) return;

        if (form.role === "admin") {
            loginAsAdmin(form.email);
            navigate("/dashboard");
            return;
        }

        if (form.role === "negocio") {
            loginAsNegocio(form.email);
            navigate("/productos");
            return;
        }

        loginAsCliente(form.email);
        navigate("/productos");
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