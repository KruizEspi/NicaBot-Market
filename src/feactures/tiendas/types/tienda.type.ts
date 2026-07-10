export type TiendaEstado = "Abierto" | "Cerrado";

export type Tienda = {
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    ubicacion: string;
    telefono: string;
    horario: string;
    estado: TiendaEstado;
    lat: number;
    lng: number;
};