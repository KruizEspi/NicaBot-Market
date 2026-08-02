import { useState } from "react";
import type { AgregarTiendaForm } from "../types/agregar-tienda-form.type";

const initialForm: AgregarTiendaForm = {
    nombre: "",
    categoria: "",
    descripcion: "",
    ubicacion: "",
    telefono: "",
    horario: "",
    propietario: "",
    correo: "",

    banco: "",
    titularCuenta: "",
    numeroCuenta: "",
    tipoCuenta: "Ahorro",
    monedaCuenta: "Córdobas",
    telefonoCuenta: "",
};

export const useAgregarTiendaForm = () => {
    const [form, setForm] = useState<AgregarTiendaForm>(initialForm);

    const handleChange = (field: keyof AgregarTiendaForm, value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleReset = () => {
        setForm(initialForm);
    };

    const handleSubmit = () => {
        console.log("Tienda registrada:", form);

        alert("Tienda registrada correctamente");

        handleReset();
    };

    return {
        form,
        handleChange,
        handleReset,
        handleSubmit,
    };
};