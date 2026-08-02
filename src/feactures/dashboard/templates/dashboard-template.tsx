import { Box } from "@mui/material";

import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { DashboardHero } from "../components/organisms/dashboard-hero";
import { DashboardStatsSection } from "../components/organisms/dashboard-stats-section";
import { DashboardChartsSection } from "../components/organisms/dashboard-charts-section";
import { DashboardActivitySection } from "../components/organisms/dashboard-activity-section";
import { DashboardActionsSection } from "../components/organisms/dashboard-actions-section";
import type { DashboardTemplateProps } from "../types/dashboard.type";

export const DashboardTemplate = ({
                                      stats,
                                      paymentSummary,
                                      deliverySummary,
                                      recentOrders,
                                      recentDelivery,
                                      categories,
                                      insights,
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

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                xl: "1.1fr 0.9fr",
                            },
                            gap: 3,
                            mb: 3,
                        }}
                    >
                        <DashboardChartsSection
                            paymentSummary={paymentSummary}
                            deliverySummary={deliverySummary}
                            categories={categories}
                        />

                        <DashboardActivitySection
                            recentOrders={recentOrders}
                            recentDelivery={recentDelivery}
                        />
                    </Box>

                    <DashboardActionsSection insights={insights} />
                </Box>
            </Box>
        </Box>
    );
};