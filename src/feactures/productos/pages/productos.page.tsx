import { useState } from "react";
import { productosMock } from "../data/productos.mock";
import { useProductosFilter } from "../hooks/use-productos-filter";
import { ProductosTemplate } from "../components/templates/productos-template";

export default function ProductosPage() {
    const [search, setSearch] = useState("");
    const [chatOpen, setChatOpen] = useState(false);

    const productosFiltrados = useProductosFilter(productosMock, search);

    return (
        <ProductosTemplate
            search={search}
            productos={productosFiltrados}
            chatOpen={chatOpen}
            onSearchChange={setSearch}
            onChatToggle={() => setChatOpen((prev) => !prev)}
        />
    );
}