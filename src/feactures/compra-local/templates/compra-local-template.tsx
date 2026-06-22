import { Box } from "@mui/material";
import type { Tienda } from "../types/tienda.type";
import { AppHeader } from "../components/organisms/app-header";
import { FloatingChatbot } from "../components/organisms/loating-chatbot";
import { Sidebar } from "../components/organisms/sidebar";
import { HomeHero } from "../components/organisms/store-hero";
import { MissionVisionSection } from "../components/organisms/mission-vision-section";
import {ValuesSection} from "../components/organisms/values-section";
import {ObjectivesSection} from "../components/organisms/objectives-section";
import {HomeActionsSection} from "../components/organisms/home-section";
type CompraLocalTemplateProps = {
    chatOpen: boolean;
    onChatToggle: () => void;
};

export const CompraLocalTemplate = ({
                                        chatOpen,
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
                    <HomeHero />
                    <MissionVisionSection />
                    <ValuesSection />
                    <ObjectivesSection />
                    <HomeActionsSection />
                </Box>
            </Box>

            <FloatingChatbot open={chatOpen} onToggle={onChatToggle} />
        </Box>
    );
};