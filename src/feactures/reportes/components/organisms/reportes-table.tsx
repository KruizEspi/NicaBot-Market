import {
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

import type { SearchReportItem } from "../../types/reportes.type";

type ReportesTableProps = {
    reports: SearchReportItem[];
};

export const ReportesTable = ({ reports }: ReportesTableProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
            }}
        >
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#064e3b" }}>
                        <TableCell sx={{ color: "#fff", fontWeight: 900 }}>Fecha</TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                            Búsqueda
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                            Categoría
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                            Tienda encontrada
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                            Resultados
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                            Estado
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {reports.map((item) => {
                        const hasResults = item.estado === "Con resultados";

                        return (
                            <TableRow key={item.id} hover>
                                <TableCell>{item.fecha}</TableCell>

                                <TableCell>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        {item.busqueda}
                                    </Typography>
                                </TableCell>

                                <TableCell>{item.categoria}</TableCell>

                                <TableCell>{item.tiendaEncontrada}</TableCell>

                                <TableCell>{item.resultados}</TableCell>

                                <TableCell>
                                    <Chip
                                        label={item.estado}
                                        size="small"
                                        sx={{
                                            fontWeight: 900,
                                            borderRadius: 999,
                                            color: hasResults ? "#166534" : "#92400e",
                                            backgroundColor: hasResults ? "#dcfce7" : "#fef3c7",
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};