import {
    Box,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

import type { ReportItem, ReportStatus } from "../../types/reportes.type";

type ReportesTableProps = {
    reports: ReportItem[];
};

export const ReportesTable = ({ reports }: ReportesTableProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 5,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
            }}
        >
            <Box sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 950, color: "#0f172a" }}>
                    Historial de movimientos
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#64748b",
                        mt: 0.5,
                        lineHeight: 1.6,
                    }}
                >
                    Historial de pedidos pagados, envíos, comisiones de plataforma y
                    ganancias generadas para repartidores.
                </Typography>
            </Box>

            {reports.length > 0 ? (
                <TableContainer
                    sx={{
                        borderRadius: 4,
                        border: "1px solid #e2e8f0",
                        overflowX: "auto",
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#064e3b" }}>
                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Pedido
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Fecha
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Cliente
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Producto
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Tienda
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Total
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Envío
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Comisión
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Repartidor
                                </TableCell>

                                <TableCell sx={{ color: "#fff", fontWeight: 900 }}>
                                    Estado
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {reports.map((item) => (
                                <TableRow
                                    key={item.id}
                                    hover
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#f8fafc",
                                        },
                                    }}
                                >
                                    <TableCell sx={{ fontWeight: 900 }}>#{item.id}</TableCell>

                                    <TableCell>{item.fecha}</TableCell>

                                    <TableCell>
                                        <Typography sx={{ fontWeight: 800 }}>
                                            {item.cliente}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>{item.producto}</TableCell>

                                    <TableCell>{item.tienda}</TableCell>

                                    <TableCell sx={{ fontWeight: 900, color: "#15803d" }}>
                                        C$ {item.total}
                                    </TableCell>

                                    <TableCell>C$ {item.envio}</TableCell>

                                    <TableCell sx={{ fontWeight: 900, color: "#b91c1c" }}>
                                        C$ {item.comisionPlataforma}
                                    </TableCell>

                                    <TableCell sx={{ fontWeight: 900, color: "#a16207" }}>
                                        C$ {item.gananciaRepartidor}
                                    </TableCell>

                                    <TableCell>
                                        <ReportStatusChip status={item.estado} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Paper
                    elevation={0}
                    sx={{
                        p: 5,
                        borderRadius: 5,
                        textAlign: "center",
                        border: "1px dashed #86efac",
                        backgroundColor: "#f8fafc",
                    }}
                >
                    <Typography sx={{ fontSize: 42, mb: 1 }}>📊</Typography>

                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        Aún no hay reportes
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#64748b", mt: 1 }}>
                        Cuando los clientes realicen pagos, los reportes aparecerán en esta
                        sección.
                    </Typography>
                </Paper>
            )}
        </Paper>
    );
};

type ReportStatusChipProps = {
    status: ReportStatus;
};

const ReportStatusChip = ({ status }: ReportStatusChipProps) => {
    const isPaid = status === "Pagado";
    const isDelivery = status === "En delivery";
    const isDelivered = status === "Entregado";

    return (
        <Chip
            label={status}
            size="small"
            sx={{
                fontWeight: 900,
                borderRadius: 999,
                color: isPaid
                    ? "#064e3b"
                    : isDelivery
                        ? "#92400e"
                        : isDelivered
                            ? "#075985"
                            : "#475569",
                backgroundColor: isPaid
                    ? "#dcfce7"
                    : isDelivery
                        ? "#fef3c7"
                        : isDelivered
                            ? "#e0f2fe"
                            : "#f1f5f9",
            }}
        />
    );
};