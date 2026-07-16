import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {ReportesPage} from "./feactures/reportes";
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
import MiCuentaPage from "./feactures/mi-cuenta/pages/mi-cuenta.page";

import { ProtectedRoute } from "./shared/auth/protected-route";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CompraLocalPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route
                    path="/productos"
                    element={
                        <ProtectedRoute routeKey="productos">
                            <ProductosPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/productos/:productoId"
                    element={
                        <ProtectedRoute routeKey="productos">
                            <ProductoProfilePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/tiendas"
                    element={
                        <ProtectedRoute routeKey="tiendas">
                            <TiendasPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/tiendas/:tiendaId"
                    element={
                        <ProtectedRoute routeKey="tiendas">
                            <TiendaProfilePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/mapa-tiendas"
                    element={
                        <ProtectedRoute routeKey="mapa">
                            <MapaTiendasPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/favoritos"
                    element={
                        <ProtectedRoute routeKey="favoritos">
                            <FavoritosPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/agregar-tienda"
                    element={
                        <ProtectedRoute routeKey="agregarTienda">
                            <AgregarTiendaPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute routeKey="dashboard">
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/mi-cuenta"
                    element={
                        <ProtectedRoute routeKey="miCuenta">
                            <MiCuentaPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/reportes"
                    element={
                        <ProtectedRoute routeKey="reportes">
                            <ReportesPage />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}