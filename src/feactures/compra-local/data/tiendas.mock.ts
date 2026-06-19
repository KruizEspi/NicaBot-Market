import type { Tienda } from "../types/tienda.type";

export const tiendasMock: Tienda[] = [
    {
        id: 1,
        nombre: "Pulpería El Buen Precio",
        categoria: "Abarrotes",
        descripcion: "Productos básicos, bebidas, snacks y artículos del hogar.",
        ubicacion: "Managua, Bello Horizonte",
        estado: "Abierto",
    },
    {
        id: 2,
        nombre: "Variedades Mary",
        categoria: "Ropa y accesorios",
        descripcion: "Venta de ropa casual, accesorios y artículos para regalo.",
        ubicacion: "Managua, Mercado Oriental",
        estado: "Abierto",
    },
    {
        id: 3,
        nombre: "Tecno Cell Nicaragua",
        categoria: "Tecnología",
        descripcion: "Accesorios para celulares, cargadores, audífonos y reparación.",
        ubicacion: "Managua, Linda Vista",
        estado: "Cerrado",
    },
    {
        id: 4,
        nombre: "Comedor Doña Ana",
        categoria: "Comida",
        descripcion: "Comida casera, almuerzos ejecutivos y bebidas naturales.",
        ubicacion: "Managua, Altamira",
        estado: "Abierto",
    },
    {
        id: 5,
        nombre: "Artesanías El Güegüense",
        categoria: "Artesanía",
        descripcion: "Productos artesanales, recuerdos típicos y decoración.",
        ubicacion: "Managua, Carretera a Masaya",
        estado: "Abierto",
    },
    {
        id: 6,
        nombre: "Farmacia San José",
        categoria: "Salud",
        descripcion: "Medicamentos básicos, cuidado personal y productos de salud.",
        ubicacion: "Managua, Ciudad Jardín",
        estado: "Cerrado",
    },
];