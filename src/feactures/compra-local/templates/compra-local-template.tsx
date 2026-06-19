import { Box } from "@mui/material";
import type { Tienda } from "../types/tienda.type";
import { AppHeader } from "../components/organisms/app-header";
import { FloatingChatbot } from "../components/organisms/loating-chatbot";
import { Sidebar } from "../components/organisms/sidebar";
import { StoresHero } from "../components/organisms/store-hero";
import { StoresSection } from "../components/organisms/stores-section";

type CompraLocalTemplateProps = {
    search: string;
    tiendas: Tienda[];
    chatOpen: boolean;
    onSearchChange: (value: string) => void;
    onChatToggle: () => void;
};

export const CompraLocalTemplate = ({
                                        search,
                                        tiendas,
                                        chatOpen,
                                        onSearchChange,
                                        onChatToggle,
                                    }: CompraLocalTemplateProps) => {
    return (
        <Box sx={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
            <AppHeader />

            <Box sx={{ display: "flex" }}>
                <Box
                    component="aside"
                    sx={{
                        width: 280,
                        flexShrink: 0,
                        minHeight: "calc(100vh - 86px)",
                        backgroundColor: "#fff",
                        borderRight: "1px solid #e2e8f0",
                        position: "sticky",
                        top: 86,
                        alignSelf: "flex-start",
                        display: { xs: "none", md: "block" },
                        overflowY: "auto",
                    }}
                >
                    <Sidebar />
                </Box>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <StoresHero search={search} onSearchChange={onSearchChange} />
                    <StoresSection tiendas={tiendas} />
                </Box>
            </Box>

            <FloatingChatbot open={chatOpen} onToggle={onChatToggle} />
        </Box>
    );
};