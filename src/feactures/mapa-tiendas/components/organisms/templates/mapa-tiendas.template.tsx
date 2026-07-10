import { Box } from "@mui/material";

import { AppHeader } from "../../../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../../../compra-local/components/organisms/sidebar";
import { tiendasMock } from "../../../../tiendas/data/tiendas.mock";
import { TiendasMapDynamic } from "../tiendas-map-dynamic";

export const MapaTiendasTemplate = () => {
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
                    <TiendasMapDynamic tiendas={tiendasMock} />
                </Box>
            </Box>
        </Box>
    );
};

