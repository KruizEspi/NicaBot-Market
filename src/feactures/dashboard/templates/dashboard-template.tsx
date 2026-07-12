import { Box } from "@mui/material";

import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { FloatingChatbot } from "../../chat-bot-ia/components/organisms/loating-chatbot";

import type {
    DashboardAction,
    DashboardActivity,
    DashboardCategoryData,
    DashboardMonthlySale,
    DashboardStat,
    DashboardStoreStatus,
} from "../types/dashboard.type";

import { DashboardHero } from "../components/organisms/dashboard-hero";
import { DashboardStatsSection } from "../components/organisms/dashboard-stats-section";
import { DashboardActionsSection } from "../components/organisms/dashboard-actions-section";
import { DashboardActivitySection } from "../components/organisms/dashboard-activity-section";
import { DashboardChartsSection } from "../components/organisms/dashboard-charts-section";

type DashboardTemplateProps = {
    stats: DashboardStat[];
    actions: DashboardAction[];
    activities: DashboardActivity[];
    monthlySales: DashboardMonthlySale[];
    categoryProducts: DashboardCategoryData[];
    storeStatus: DashboardStoreStatus[];
    chatOpen: boolean;
    onChatToggle: () => void;
};

export const DashboardTemplate = ({
                                      stats,
                                      actions,
                                      activities,
                                      monthlySales,
                                      categoryProducts,
                                      storeStatus,
                                      chatOpen,
                                      onChatToggle,
                                  }: DashboardTemplateProps) => {
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
                    <DashboardHero />

                    <DashboardStatsSection stats={stats} />

                    <DashboardChartsSection
                        monthlySales={monthlySales}
                        categoryProducts={categoryProducts}
                        storeStatus={storeStatus}
                    />

                    <DashboardActionsSection actions={actions} />

                    <DashboardActivitySection activities={activities} />
                </Box>
            </Box>

            <FloatingChatbot open={chatOpen} onToggle={onChatToggle} />
        </Box>
    );
};