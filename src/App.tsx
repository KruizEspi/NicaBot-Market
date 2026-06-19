import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CompraLocalPage from "./feactures/compra-local/pages/compra-local.page";
import {LoginPage} from "./feactures/auth";
import ProductosPage from "./feactures/productos/pages/productos.page";
import TiendasPage from "./feactures/tiendas/page/tiendas.page";
import AgregarTiendaPage from "./feactures/agregar-tienda/pages/agregar-tienda.page";
import DashboardPage from "./feactures/dashboard/pages/dashboard.page";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CompraLocalPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/productos" element={<ProductosPage />} />
                <Route path="/tiendas" element={<TiendasPage />} />
                <Route path="/agregar-tienda" element={<AgregarTiendaPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}