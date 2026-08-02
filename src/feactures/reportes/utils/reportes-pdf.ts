import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import type {
    AdminReportSummary,
    ReportItem,
} from "../types/reportes.type";

type GenerateReportesPdfParams = {
    reports: ReportItem[];
    summary: AdminReportSummary;
};

export const generateReportesPdf = ({
                                        reports,
                                        summary,
                                    }: GenerateReportesPdfParams) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Reporte administrativo - NicaBot Market", 14, 18);

    doc.setFontSize(10);
    doc.text(`Fecha de generacion: ${new Date().toLocaleDateString()}`, 14, 26);

    doc.setFontSize(12);
    doc.text("Resumen ejecutivo", 14, 40);

    autoTable(doc, {
        startY: 46,
        head: [["Indicador", "Valor"]],
        body: [
            ["Total vendido", `C$ ${summary.totalVentas}`],
            ["Total pedidos", String(summary.totalPedidos)],
            ["Total tiendas", String(summary.totalTiendas)],
            ["Total productos", String(summary.totalProductos)],
            ["Productos disponibles", String(summary.productosDisponibles)],
            ["Productos agotados", String(summary.productosAgotados)],
            ["Tiendas abiertas", String(summary.tiendasAbiertas)],
            ["Tiendas cerradas", String(summary.tiendasCerradas)],
            ["Total envios", `C$ ${summary.totalEnvios}`],
            ["Comision plataforma", `C$ ${summary.totalComisionPlataforma}`],
            [
                "Ganancia repartidores",
                `C$ ${summary.totalGananciaRepartidores}`,
            ],
            ["Pedidos pagados", String(summary.pedidosPagados)],
            ["Pedidos en delivery", String(summary.pedidosEnDelivery)],
            ["Pedidos entregados", String(summary.pedidosEntregados)],
            ["Delivery disponibles", String(summary.deliveryDisponibles)],
            ["Delivery activos", String(summary.deliveryActivos)],
            ["Delivery entregados", String(summary.deliveryEntregados)],
            ["Total busquedas", String(summary.totalBusquedas)],
            ["Busquedas con resultados", String(summary.busquedasConResultados)],
            ["Busquedas sin resultados", String(summary.busquedasSinResultados)],
        ],
        styles: {
            fontSize: 9,
            cellPadding: 2,
        },
        headStyles: {
            fillColor: [21, 128, 61],
            textColor: [255, 255, 255],
        },
    });

    autoTable(doc, {
        startY: 145,
        head: [
            [
                "Pedido",
                "Fecha",
                "Cliente",
                "Producto",
                "Tienda",
                "Total",
                "Envio",
                "Comision",
                "Repartidor",
                "Estado",
            ],
        ],
        body: reports.map((item) => [
            `#${item.id}`,
            item.fecha,
            item.cliente,
            item.producto,
            item.tienda,
            `C$ ${item.total}`,
            `C$ ${item.envio}`,
            `C$ ${item.comisionPlataforma}`,
            `C$ ${item.gananciaRepartidor}`,
            item.estado,
        ]),
        styles: {
            fontSize: 7,
            cellPadding: 2,
        },
        headStyles: {
            fillColor: [6, 78, 59],
            textColor: [255, 255, 255],
        },
    });

    doc.save("reporte-administrativo-nicabot-market.pdf");
};