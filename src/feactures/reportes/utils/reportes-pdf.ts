import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import type { SearchReportItem } from "../types/reportes.type";

type GenerateSearchReportPdfParams = {
    reports: SearchReportItem[];
};

export const generateSearchReportPdf = ({
                                            reports,
                                        }: GenerateSearchReportPdfParams) => {
    const doc = new jsPDF();

    const totalBusquedas = reports.length;
    const totalResultados = reports.reduce(
        (total, item) => total + item.resultados,
        0,
    );
    const busquedasConResultados = reports.filter(
        (item) => item.estado === "Con resultados",
    ).length;
    const busquedasSinResultados = reports.filter(
        (item) => item.estado === "Sin resultados",
    ).length;

    doc.setFontSize(18);
    doc.text("Reporte de búsquedas - NicaBot Market", 14, 18);

    doc.setFontSize(10);
    doc.text(`Fecha de generación: ${new Date().toLocaleDateString()}`, 14, 26);

    doc.setFontSize(12);
    doc.text("Resumen general", 14, 40);

    autoTable(doc, {
        startY: 46,
        head: [["Indicador", "Valor"]],
        body: [
            ["Total de búsquedas", String(totalBusquedas)],
            ["Total de resultados encontrados", String(totalResultados)],
            ["Búsquedas con resultados", String(busquedasConResultados)],
            ["Búsquedas sin resultados", String(busquedasSinResultados)],
        ],
        styles: {
            fontSize: 10,
        },
        headStyles: {
            fillColor: [21, 128, 61],
            textColor: [255, 255, 255],
        },
    });

    autoTable(doc, {
        startY: 90,
        head: [
            [
                "Fecha",
                "Búsqueda",
                "Categoría",
                "Tienda",
                "Ubicación",
                "Resultados",
                "Estado",
            ],
        ],
        body: reports.map((item) => [
            item.fecha,
            item.busqueda,
            item.categoria,
            item.tiendaEncontrada,
            item.ubicacion,
            String(item.resultados),
            item.estado,
        ]),
        styles: {
            fontSize: 8,
            cellPadding: 2,
        },
        headStyles: {
            fillColor: [6, 78, 59],
            textColor: [255, 255, 255],
        },
    });

    doc.save("reporte-busquedas-nicabot-market.pdf");
};