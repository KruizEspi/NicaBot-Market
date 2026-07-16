export type ReportSearchStatus = "Con resultados" | "Sin resultados";

export type SearchReportItem = {
    id: number;
    fecha: string;
    busqueda: string;
    categoria: string;
    tiendaEncontrada: string;
    ubicacion: string;
    resultados: number;
    estado: ReportSearchStatus;
};