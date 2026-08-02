export type DeliveryStatus =
    | "Disponible"
    | "Aceptado"
    | "En camino a tienda"
    | "Recogido"
    | "En camino al cliente"
    | "Entregado"
    | "Cancelado";

export type DeliveryOrder = {
    id: number;
    customerOrderId?: number;
    producto: string;
    tienda: string;
    tiendaUbicacion: string;
    cliente: string;
    clienteUbicacion: string;
    distanciaKm: number;
    costoEnvio: number;
    comisionRepartidor: number;
    comisionPlataforma: number;
    estado: DeliveryStatus;
    repartidorId?: number;
};