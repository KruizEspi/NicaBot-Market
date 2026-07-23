import { Box, Paper, Typography } from "@mui/material";

import { AppHeader } from "../../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../../compra-local/components/organisms/sidebar";
import { DeliverySummarySection } from "../organisms/delivery-summary-section";
import { AvailableOrdersSection } from "../organisms/available-orders-section";
import { MyDeliveriesSection } from "../organisms/my-deliveries-section";

export const DeliveryTemplate = () => {
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
                        display: "grid",
                        gap: 3,
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 5,
                            color: "#fff",
                            background:
                                "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
                            overflow: "hidden",
                            position: "relative",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 28%), radial-gradient(circle at 90% 5%, rgba(250,204,21,0.25), transparent 30%)",
                            },
                        }}
                    >
                        <Box sx={{ position: "relative", zIndex: 2 }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 950,
                                    fontSize: { xs: 30, md: 44 },
                                    lineHeight: 1.1,
                                }}
                            >
                                NicaBot Delivery
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1,
                                    color: "rgba(255,255,255,0.9)",
                                    fontWeight: 600,
                                    maxWidth: 760,
                                }}
                            >
                                Red de motorizados independientes que pueden tomar pedidos
                                disponibles según su ubicación, conveniencia y comisión de
                                entrega.
                            </Typography>
                        </Box>
                    </Paper>

                    <DeliverySummarySection />
                    <AvailableOrdersSection />
                    <MyDeliveriesSection />
                </Box>
            </Box>
        </Box>
    );
};