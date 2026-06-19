export type ProductStatus = "Disponible" | "Agotado";

export type Producto = {
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: number;
    tienda: string;
    ubicacion: string;
    imagen: string;
    estado: ProductStatus;
};