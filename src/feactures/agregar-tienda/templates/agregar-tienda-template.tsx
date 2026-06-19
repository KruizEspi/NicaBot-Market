import { Box } from "@mui/material";
import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { FloatingChatbot } from "../../compra-local/components/organisms/loating-chatbot";
import type { AgregarTiendaForm as AgregarTiendaFormType } from "../types/agregar-tienda-form.type";
import { AgregarTiendaHero } from "../../agregar-tienda/components/organisms/agregar-tienda-hero";
import { AgregarTiendaForm } from "../../agregar-tienda/components/organisms/agregar-tienda-form";


type AgregarTiendaTemplateProps = {
    form: AgregarTiendaFormType;
    chatOpen: boolean;
    onChange: (field: keyof AgregarTiendaFormType, value: string) => void;
    onReset: () => void;
    onSubmit: () => void;
    onChatToggle: () => void;
};

export const AgregarTiendaTemplate = ({
                                          form,
                                          chatOpen,
                                          onChange,
                                          onReset,
                                          onSubmit,
                                          onChatToggle,
                                      }: AgregarTiendaTemplateProps) => {
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
                    <AgregarTiendaHero />

                    <AgregarTiendaForm
                        form={form}
                        onChange={onChange}
                        onReset={onReset}
                        onSubmit={onSubmit}
                    />
                </Box>
            </Box>

            <FloatingChatbot open={chatOpen} onToggle={onChatToggle} />
        </Box>
    );
};