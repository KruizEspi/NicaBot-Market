export type StoreStatus = "Abierto" | "Cerrado";

export type Tienda = {
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    ubicacion: string;
    estado: StoreStatus;
};