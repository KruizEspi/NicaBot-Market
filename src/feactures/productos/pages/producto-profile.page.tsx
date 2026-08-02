import { NavLink, useParams } from "react-router-dom";
import {
    Box,
    Button,
    Chip,
    Paper,
    Typography,
} from "@mui/material";

import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { productosMock } from "../data/productos.mock";
import { tiendasMock } from "../../tiendas/data/tiendas.mock";
import { ProductImage } from "../components/atoms/product-image";
import {useCartStore} from "../../carrito/store/use-cart-store";

export default function ProductoProfilePage() {
    const { productoId } = useParams();


    const producto = productosMock.find(
        (item) => item.id === Number(productoId),
    );
    const { addToCart } = useCartStore();
    if (!producto) {
        return (
            <Box sx={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
                <AppHeader />

                <Box sx={{ display: "flex" }}>
                    <Box
                        component="aside"
                        sx={{
                            width: 280,
                            flexShrink: 0,
                            minHeight: "calc(100vh - 86px)",
                            backgroundColor: "#fff",
                            borderRight: "1px solid #e2e8f0",
                            position: "sticky",
                            top: 86,
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        <Sidebar />
                    </Box>

                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: { xs: 2, md: 4 },
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 5,
                                borderRadius: 5,
                                textAlign: "center",
                                border: "1px dashed #cbd5e1",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
                                Producto no encontrado
                            </Typography>

                            <Typography sx={{ color: "#64748b", mb: 3 }}>
                                No existe un producto registrado con ese identificador.
                            </Typography>

                            <Button
                                component={NavLink}
                                to="/productos"
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    borderRadius: 999,
                                    fontWeight: 800,
                                    backgroundColor: "#15803d",
                                    "&:hover": {
                                        backgroundColor: "#166534",
                                    },
                                }}
                            >
                                Volver a productos
                            </Button>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        );
    }

    const tienda = tiendasMock.find(
        (item) => item.nombre === producto.tienda,
    );

    const isAvailable = producto.estado === "Disponible";


    return (
        <Box sx={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
            <AppHeader />

            <Box sx={{ display: "flex" }}>
                <Box
                    component="aside"
                    sx={{
                        width: 280,
                        flexShrink: 0,
                        minHeight: "calc(100vh - 86px)",
                        backgroundColor: "#fff",
                        borderRight: "1px solid #e2e8f0",
                        position: "sticky",
                        top: 86,
                        alignSelf: "flex-start",
                        display: { xs: "none", md: "block" },
                        overflowY: "auto",
                    }}
                >
                    <Sidebar />
                </Box>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            overflow: "hidden",
                            borderRadius: 5,
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#fff",
                            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                p: { xs: 3, md: 4 },
                                minHeight: 210,
                                color: "#fff",
                                background:
                                    "linear-gradient(135deg, #064e3b 0%, #15803d 50%, #22c55e 100%)",
                                overflow: "hidden",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 28%), radial-gradient(circle at 90% 5%, rgba(250,204,21,0.25), transparent 30%)",
                                },
                            }}
                        >
                            <Box sx={{ position: "relative", zIndex: 2 }}>
                                <Button
                                    component={NavLink}
                                    to="/productos"
                                    variant="outlined"
                                    sx={{
                                        mb: 3,
                                        textTransform: "none",
                                        borderRadius: 999,
                                        color: "#fff",
                                        borderColor: "rgba(255,255,255,0.55)",
                                        fontWeight: 800,
                                        "&:hover": {
                                            borderColor: "#fff",
                                            backgroundColor: "rgba(255,255,255,0.12)",
                                        },
                                    }}
                                >
                                    ← Volver a productos
                                </Button>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Chip
                                        label={producto.categoria}
                                        size="small"
                                        sx={{
                                            fontWeight: 900,
                                            color: "#064e3b",
                                            backgroundColor: "#facc15",
                                            borderRadius: 999,
                                        }}
                                    />

                                    <Chip
                                        label={producto.estado}
                                        size="small"
                                        sx={{
                                            fontWeight: 900,
                                            color: isAvailable ? "#064e3b" : "#991b1b",
                                            backgroundColor: isAvailable ? "#dcfce7" : "#fee2e2",
                                            borderRadius: 999,
                                        }}
                                    />
                                </Box>

                                <Typography
                                    variant="h3"
                                    sx={{
                                        mt: 2,
                                        fontWeight: 950,
                                        lineHeight: 1.1,
                                        fontSize: { xs: 30, md: 44 },
                                    }}
                                >
                                    {producto.nombre}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: 1,
                                        color: "rgba(255,255,255,0.9)",
                                        fontWeight: 600,
                                    }}
                                >
                                    Producto ofrecido por {producto.tienda}
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                p: { xs: 3, md: 4 },
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    lg: "0.9fr 1.1fr",
                                },
                                gap: 3,
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2,
                                    borderRadius: 4,
                                    border: "1px solid #e2e8f0",
                                    background:
                                        "linear-gradient(135deg, #f0fdf4 0%, #ffffff 65%)",
                                }}
                            >
                                <ProductImage src={producto.imagen} alt={producto.nombre} />
                            </Paper>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 900,
                                        color: "#0f172a",
                                        mb: 1,
                                    }}
                                >
                                    Información del producto
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#64748b",
                                        lineHeight: 1.8,
                                        mb: 3,
                                    }}
                                >
                                    {producto.descripcion}
                                </Typography>

                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: {
                                            xs: "1fr",
                                            md: "repeat(2, minmax(0, 1fr))",
                                        },
                                        gap: 2,
                                        mb: 3,
                                    }}
                                >
                                    <InfoBox
                                        title="Precio"
                                        value={`C$ ${producto.precio}`}
                                        icon="💰"
                                        bg="#ecfdf5"
                                    />

                                    <InfoBox
                                        title="Estado"
                                        value={producto.estado}
                                        icon={isAvailable ? "✅" : "⛔"}
                                        bg={isAvailable ? "#f0fdf4" : "#fef2f2"}
                                    />

                                    <InfoBox
                                        title="Tienda"
                                        value={producto.tienda}
                                        icon="🏪"
                                        bg="#eff6ff"
                                    />

                                    <InfoBox
                                        title="Ubicación"
                                        value={producto.ubicacion}
                                        icon="📍"
                                        bg="#fffbeb"
                                    />
                                </Box>

                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 4,
                                        border: "1px solid #e2e8f0",
                                        background:
                                            "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 900,
                                            color: "#0f172a",
                                            mb: 1,
                                        }}
                                    >
                                        Tienda relacionada
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#64748b",
                                            lineHeight: 1.7,
                                            mb: 2,
                                        }}
                                    >
                                        Este producto pertenece a{" "}
                                        <strong>{producto.tienda}</strong>. Puedes visitar el perfil
                                        de la tienda para ver su información, contacto y ubicación.
                                    </Typography>



                                    {tienda ? (
                                        <Box sx={{ display: "grid", gap: 1.5 }}>
                                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                                                <Button
                                                    variant="contained"
                                                    disabled={!isAvailable}
                                                    onClick={() => addToCart(producto)}
                                                    sx={{
                                                        textTransform: "none",
                                                        borderRadius: 999,
                                                        py: 1.1,
                                                        px: 3,
                                                        fontWeight: 900,
                                                        background: "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                                        boxShadow: "0 12px 28px rgba(22, 163, 74, 0.28)",
                                                        "&:hover": {
                                                            background: "linear-gradient(135deg, #166534 0%, #16a34a 100%)",
                                                        },
                                                    }}
                                                >
                                                    Agregar al carrito
                                                </Button>

                                                <Button
                                                    component={NavLink}
                                                    to="/carrito"
                                                    variant="outlined"
                                                    sx={{
                                                        textTransform: "none",
                                                        textDecoration: "none",
                                                        borderRadius: 999,
                                                        py: 1.1,
                                                        px: 3,
                                                        fontWeight: 900,
                                                        color: "#15803d",
                                                        borderColor: "#86efac",
                                                        backgroundColor: "#f0fdf4",
                                                        "&:hover": {
                                                            borderColor: "#16a34a",
                                                            backgroundColor: "#dcfce7",
                                                        },
                                                    }}
                                                >
                                                    Ver carrito
                                                </Button>
                                            </Box>

                                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                                                <Button
                                                    component={NavLink}
                                                    to={`/tiendas/${tienda.id}`}
                                                    variant="contained"
                                                    sx={{
                                                        textTransform: "none",
                                                        textDecoration: "none",
                                                        borderRadius: 999,
                                                        py: 1.1,
                                                        px: 3,
                                                        fontWeight: 900,
                                                        background: "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                                        boxShadow: "0 12px 28px rgba(22, 163, 74, 0.28)",
                                                        "&:hover": {
                                                            background: "linear-gradient(135deg, #166534 0%, #16a34a 100%)",
                                                        },
                                                    }}
                                                >
                                                    Ver perfil de la tienda
                                                </Button>

                                                <Button
                                                    component={NavLink}
                                                    to={`/mapa-tiendas?tiendaId=${tienda.id}`}
                                                    variant="outlined"
                                                    sx={{
                                                        textTransform: "none",
                                                        textDecoration: "none",
                                                        borderRadius: 999,
                                                        py: 1.1,
                                                        px: 3,
                                                        fontWeight: 900,
                                                        borderColor: "#86efac",
                                                        color: "#15803d",
                                                        backgroundColor: "#f0fdf4",
                                                        "&:hover": {
                                                            borderColor: "#16a34a",
                                                            backgroundColor: "#dcfce7",
                                                        },
                                                    }}
                                                >
                                                    Ver tienda en el mapa
                                                </Button>
                                            </Box>
                                        </Box>
                                    ) : (
                                        <Chip
                                            label="La tienda no está registrada en el directorio"
                                            color="warning"
                                            variant="outlined"
                                            sx={{ fontWeight: 800 }}
                                        />
                                    )}
                                </Paper>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

type InfoBoxProps = {
    title: string;
    value: string | number;
    icon: string;
    bg: string;
};

const InfoBox = ({ title, value, icon, bg }: InfoBoxProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: bg,
            }}
        >
            <Typography sx={{ fontSize: 28, mb: 1 }}>{icon}</Typography>

            <Typography
                variant="caption"
                sx={{
                    color: "#64748b",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.4,
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    mt: 0.5,
                    color: "#0f172a",
                    fontWeight: 800,
                    lineHeight: 1.5,
                }}
            >
                {value}
            </Typography>
        </Paper>
    );
};