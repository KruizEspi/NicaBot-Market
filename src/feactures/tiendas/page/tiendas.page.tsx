import { useState } from "react";
import { tiendasMock } from "../data/tiendas.mock";
import { useTiendasFilter } from "../hooks/use-tiendas-filter";
import { TiendasTemplate } from "../components/templates/tiendas-template";

export default function TiendasPage() {
    const [search, setSearch] = useState("");
    const [chatOpen, setChatOpen] = useState(false);

    const tiendasFiltradas = useTiendasFilter(tiendasMock, search);

    return (
        <TiendasTemplate
            search={search}
            tiendas={tiendasFiltradas}
            chatOpen={chatOpen}
            onSearchChange={setSearch}
            onChatToggle={() => setChatOpen((prev) => !prev)}
        />
    );
}