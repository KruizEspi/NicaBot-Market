import { Box, Button, Paper, Typography } from "@mui/material";

import { AppHeader } from "../../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../../compra-local/components/organisms/sidebar";
import { searchReportsMock } from "../../data/reportes.mock";
import { generateSearchReportPdf } from "../../utils/reportes-pdf";
import { ReportesSummary } from "../organisms/reportes-summary";
import { ReportesTable } from "../organisms/reportes-table";

export const ReportesTemplate = () => {
  const handleExportPdf = () => {
    generateSearchReportPdf({
      reports: searchReportsMock,
    });
  };

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
              border: "1px solid #e2e8f0",
              background:
                "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
              color: "#fff",
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
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                gap: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: 30, md: 44 },
                    lineHeight: 1.1,
                  }}
                >
                  Reportes
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: 600,
                    maxWidth: 680,
                  }}
                >
                  Consulta el comportamiento de las búsquedas, resultados
                  encontrados y tiendas más consultadas en NicaBot Market.
                </Typography>
              </Box>

              <Button
                variant="contained"
                onClick={handleExportPdf}
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  px: 3,
                  py: 1.2,
                  fontWeight: 900,
                  color: "#064e3b",
                  background:
                    "linear-gradient(135deg, #facc15 0%, #fde047 100%)",
                  boxShadow: "0 14px 30px rgba(250,204,21,0.32)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #fde047 0%, #facc15 100%)",
                  },
                }}
              >
                Descargar PDF
              </Button>
            </Box>
          </Paper>

          <ReportesSummary reports={searchReportsMock} />

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                color: "#0f172a",
                mb: 2,
              }}
            >
              Detalle de búsquedas
            </Typography>

            <ReportesTable reports={searchReportsMock} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};