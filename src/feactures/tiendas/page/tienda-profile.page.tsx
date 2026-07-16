import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Box, Button, Chip, Paper, Typography } from "@mui/material";

import { TiendaContactDialog } from "../components/organisms/tienda-contact-dialog";
import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { tiendasMock } from "../data/tiendas.mock";
import { TiendaAvatar } from "../components/atoms/tiendas-avatar";
import { productosMock } from "../../productos/data/productos.mock";
import { ProductCard } from "../../productos/components/molecules/product-card";

export default function TiendaProfilePage() {
    const [openContact, setOpenContact] = useState(false);

    const { tiendaId } = useParams();

    const tienda = tiendasMock.find((item) => item.id === Number(tiendaId));

    if (!tienda) {
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
                                Tienda no encontrada
                            </Typography>

                            <Typography sx={{ color: "#64748b", mb: 3 }}>
                                No existe una tienda registrada con ese identificador.
                            </Typography>

                            <Button
                                component={NavLink}
                                to="/tiendas"
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
                                Volver a tiendas
                            </Button>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        );
    }

    const isOpen = tienda.estado === "Abierto";

    const productosDeLaTienda = productosMock.filter(
        (producto) => producto.tienda === tienda.nombre,
    );

    return (
        <>
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
                                    minHeight: 210,
                                    p: { xs: 3, md: 4 },
                                    background:
                                        "linear-gradient(135deg, #064e3b 0%, #15803d 50%, #22c55e 100%)",
                                    color: "#fff",
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
                                        to="/tiendas"
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
                                        ← Volver a tiendas
                                    </Button>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 92,
                                                height: 92,
                                                borderRadius: "50%",
                                                backgroundColor: "#fff",
                                                border: "5px solid rgba(255,255,255,0.85)",
                                                boxShadow: "0 18px 38px rgba(0,0,0,0.25)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <TiendaAvatar name={tienda.nombre} />
                                        </Box>

                                        <Box sx={{ minWidth: 0 }}>
                                            <Chip
                                                label={tienda.categoria}
                                                size="small"
                                                sx={{
                                                    mb: 1,
                                                    fontWeight: 900,
                                                    color: "#064e3b",
                                                    backgroundColor: "#facc15",
                                                    borderRadius: 999,
                                                }}
                                            />

                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontWeight: 950,
                                                    lineHeight: 1.1,
                                                    fontSize: { xs: 30, md: 44 },
                                                }}
                                            >
                                                {tienda.nombre}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    mt: 1,
                                                    color: "rgba(255,255,255,0.9)",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {tienda.ubicacion}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        lg: "1.4fr 0.8fr",
                                    },
                                    gap: 3,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 900, color: "#0f172a", mb: 1 }}
                                    >
                                        Acerca de la tienda
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#64748b",
                                            lineHeight: 1.8,
                                            mb: 3,
                                        }}
                                    >
                                        {tienda.descripcion}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "grid",
                                            gridTemplateColumns: {
                                                xs: "1fr",
                                                md: "repeat(3, minmax(0, 1fr))",
                                            },
                                            gap: 2,
                                        }}
                                    >
                                        <InfoBox
                                            title="Ubicación"
                                            value={tienda.ubicacion}
                                            icon="📍"
                                            bg="#eff6ff"
                                        />

                                        <InfoBox
                                            title="Teléfono"
                                            value={tienda.telefono}
                                            icon="📞"
                                            bg="#ecfdf5"
                                        />

                                        <InfoBox
                                            title="Horario"
                                            value={tienda.horario}
                                            icon="🕒"
                                            bg="#fffbeb"
                                        />
                                    </Box>
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
                                        sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}
                                    >
                                        Estado del negocio
                                    </Typography>

                                    <Chip
                                        label={isOpen ? "Abierto ahora" : "Cerrado"}
                                        sx={{
                                            mb: 2,
                                            px: 1,
                                            height: 34,
                                            fontWeight: 900,
                                            borderRadius: 999,
                                            color: isOpen ? "#064e3b" : "#991b1b",
                                            backgroundColor: isOpen ? "#dcfce7" : "#fee2e2",
                                            border: `1px solid ${isOpen ? "#86efac" : "#fecaca"}`,
                                        }}
                                    />

                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#64748b", lineHeight: 1.7, mb: 3 }}
                                    >
                                        {isOpen
                                            ? "Esta tienda se encuentra disponible para recibir consultas de clientes."
                                            : "Actualmente la tienda se encuentra fuera de horario."}
                                    </Typography>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => setOpenContact(true)}
                                        sx={{
                                            textTransform: "none",
                                            borderRadius: 999,
                                            py: 1.2,
                                            fontWeight: 900,
                                            background:
                                                "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                            boxShadow: "0 12px 28px rgba(22, 163, 74, 0.28)",
                                            "&:hover": {
                                                background:
                                                    "linear-gradient(135deg, #166534 0%, #16a34a 100%)",
                                            },
                                        }}
                                    >
                                        Contactar tienda
                                    </Button>
                                </Paper>
                            </Box>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                mt: 3,
                                p: { xs: 2.5, md: 3 },
                                borderRadius: 5,
                                border: "1px solid #e2e8f0",
                                backgroundColor: "#fff",
                                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                            }}
                        >
                            <Box
                                sx={{
                                    mb: 3,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: { xs: "flex-start", md: "center" },
                                    gap: 2,
                                    flexDirection: { xs: "column", md: "row" },
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 900,
                                            color: "#0f172a",
                                            mb: 0.5,
                                        }}
                                    >
                                        Productos de la tienda
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#64748b",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Estos son los productos registrados por {tienda.nombre}.
                                    </Typography>
                                </Box>

                                <Chip
                                    label={`${productosDeLaTienda.length} productos`}
                                    color="success"
                                    variant="outlined"
                                    sx={{
                                        fontWeight: 900,
                                        borderRadius: 999,
                                    }}
                                />
                            </Box>

                            {productosDeLaTienda.length > 0 ? (
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: {
                                            xs: "1fr",
                                            sm: "repeat(2, minmax(0, 1fr))",
                                            lg: "repeat(3, minmax(0, 1fr))",
                                        },
                                        gap: 3,
                                    }}
                                >
                                    {productosDeLaTienda.map((producto) => (
                                        <ProductCard key={producto.id} producto={producto} />
                                    ))}
                                </Box>
                            ) : (
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 4, md: 5 },
                                        textAlign: "center",
                                        borderRadius: 4,
                                        border: "1px dashed #86efac",
                                        background:
                                            "linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #ecfdf5 100%)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 42,
                                            mb: 1,
                                        }}
                                    >
                                        🛍️
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 900,
                                            color: "#0f172a",
                                            mb: 1,
                                        }}
                                    >
                                        Esta tienda aún no tiene productos registrados
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#64748b",
                                            maxWidth: 420,
                                            mx: "auto",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        Cuando la tienda agregue productos, aparecerán en esta
                                        sección.
                                    </Typography>
                                </Paper>
                            )}
                        </Paper>
                    </Box>
                </Box>
            </Box>

            <TiendaContactDialog
                open={openContact}
                tienda={tienda}
                onClose={() => setOpenContact(false)}
            />
        </>
    );
}

type InfoBoxProps = {
    title: string;
    value: string;
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