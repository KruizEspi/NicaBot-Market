import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CompraLocalPage from "./feactures/compra-local/pages/compra-local.page";
import {LoginPage} from "./feactures/auth";
import ProductosPage from "./feactures/productos/pages/productos.page";
import TiendasPage from "./feactures/tiendas/page/tiendas.page";
import AgregarTiendaPage from "./feactures/agregar-tienda/pages/agregar-tienda.page";
import DashboardPage from "./feactures/dashboard/pages/dashboard.page";
import FavoritosPage from "./feactures/favoritos/pages/favoritos.page";
import "leaflet/dist/leaflet.css";
import { MapaTiendasPage } from "./feactures/mapa-tiendas";
import TiendaProfilePage from "./feactures/tiendas/page/tienda-profile.page";
import ProductoProfilePage from "./feactures/productos/pages/producto-profile.page";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CompraLocalPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/productos" element={<ProductosPage />} />
                <Route path="/productos/:productoId" element={<ProductoProfilePage />} />
                <Route path="/tiendas" element={<TiendasPage />} />
                <Route path="/agregar-tienda" element={<AgregarTiendaPage />} />
                <Route path="/favoritos" element={<FavoritosPage />} />
                <Route path="/mapa-tiendas" element={<MapaTiendasPage />} />
                <Route path="/tiendas/:tiendaId" element={<TiendaProfilePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />


            </Routes>
        </BrowserRouter>
    );
}