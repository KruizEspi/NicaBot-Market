export type AccountType = "Ahorro" | "Corriente" | "Billetera móvil";

export type CurrencyType = "Córdobas" | "Dólares";

export type AgregarTiendaForm = {
    nombre: string;
    categoria: string;
    descripcion: string;
    ubicacion: string;
    telefono: string;
    horario: string;
    propietario: string;
    correo: string;

    banco: string;
    titularCuenta: string;
    numeroCuenta: string;
    tipoCuenta: AccountType;
    monedaCuenta: CurrencyType;
    telefonoCuenta: string;
};