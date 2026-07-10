import { Suspense, lazy } from "react";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import type { Tienda } from "../../../tiendas/types/tienda.type";

const TiendasMap = lazy(() =>
    import("./tiendas-map").then((module) => ({
        default: module.TiendasMap,
    })),
);

type TiendasMapDynamicProps = {
    tiendas: Tienda[];
};

export const TiendasMapDynamic = ({ tiendas }: TiendasMapDynamicProps) => {
    return (
        <Suspense
            fallback={
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        borderRadius: 4,
                        border: "1px solid #e2e8f0",
                        textAlign: "center",
                        backgroundColor: "#fff",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <CircularProgress />
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        Cargando mapa de tiendas...
                    </Typography>
                </Paper>
            }
        >
            <TiendasMap tiendas={tiendas} />
        </Suspense>
    );
};