import { useState } from "react";
import { useAgregarTiendaForm } from "../hooks/use-agregar-tienda-form";
import { AgregarTiendaTemplate } from "../templates/agregar-tienda-template";

export default function AgregarTiendaPage() {
    const [chatOpen, setChatOpen] = useState(false);

    const { form, handleChange, handleReset, handleSubmit } =
        useAgregarTiendaForm();

    return (
        <AgregarTiendaTemplate
            form={form}
            chatOpen={chatOpen}
            onChange={handleChange}
            onReset={handleReset}
            onSubmit={handleSubmit}
            onChatToggle={() => setChatOpen((prev) => !prev)}
        />
    );
}