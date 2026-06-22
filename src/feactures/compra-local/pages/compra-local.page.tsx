import { useState } from "react";
import { CompraLocalTemplate } from "../templates/compra-local-template";

export default function CompraLocalPage() {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <CompraLocalTemplate
            chatOpen={chatOpen}
            onChatToggle={() => setChatOpen((prev) => !prev)}
        />
    );
}