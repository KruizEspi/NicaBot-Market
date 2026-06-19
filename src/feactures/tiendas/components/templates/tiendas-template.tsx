import { Box } from "@mui/material";
import { AppHeader } from "../../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../../compra-local/components/organisms/sidebar";
import { FloatingChatbot } from "../../../compra-local/components/organisms/loating-chatbot";
import type { Tienda } from "../../types/tienda.type";
import { TiendasHero } from "../organisms/tiendas-hero";
import { TiendasSection } from "../organisms/tiendas-section";

type TiendasTemplateProps = {
    search: string;
    tiendas: Tienda[];
    chatOpen: boolean;
    onSearchChange: (value: string) => void;
    onChatToggle: () => void;
};

export const TiendasTemplate = ({
                                    search,
                                    tiendas,
                                    chatOpen,
                                    onSearchChange,
                                    onChatToggle,
                                }: TiendasTemplateProps) => {
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
                    <TiendasHero search={search} onSearchChange={onSearchChange} />
                    <TiendasSection tiendas={tiendas} />
                </Box>
            </Box>

            <FloatingChatbot open={chatOpen} onToggle={onChatToggle} />
        </Box>
    );
};