import { useState } from "react";
import { tiendasMock } from "../data/tiendas.mock";
import { useTiendasFilter } from "../hooks/use-tiendas-filter";
import { CompraLocalTemplate } from "../templates/compra-local-template";

export default function CompraLocalPage() {
    const [search, setSearch] = useState("");
    const [chatOpen, setChatOpen] = useState(false);

    const tiendasFiltradas = useTiendasFilter(tiendasMock, search);

    return (
        <CompraLocalTemplate
            search={search}
            tiendas={tiendasFiltradas}
            chatOpen={chatOpen}
            onSearchChange={setSearch}
            onChatToggle={() => setChatOpen((prev) => !prev)}
        />
    );
}