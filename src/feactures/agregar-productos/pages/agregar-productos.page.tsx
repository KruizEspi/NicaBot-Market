import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Divider,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { tiendasMock } from "../../tiendas/data/tiendas.mock";
import { useProductosStore } from "../../productos/store/use-producto-store";
import type {
    Producto,
    ProductStatus,
} from "../../productos/types/producto.type";

type ProductoForm = {
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: string;
    tienda: string;
    imagen: string;
    estado: ProductStatus;
};

type PriceCalculatorForm = {
    costoTotal: string;
    cantidad: string;
    porcentajeGanancia: string;
};

const initialForm: ProductoForm = {
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
    tienda: "",
    imagen: "",
    estado: "Disponible",
};

const initialPriceCalculator: PriceCalculatorForm = {
    costoTotal: "",
    cantidad: "",
    porcentajeGanancia: "",
};

export default function AgregarProductoPage() {
    const navigate = useNavigate();

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const { productos, addProducto } = useProductosStore();

    const [form, setForm] = useState<ProductoForm>(initialForm);
    const [priceCalculator, setPriceCalculator] =
        useState<PriceCalculatorForm>(initialPriceCalculator);

    const handleChange = (field: keyof ProductoForm, value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCalculatorChange = (
        field: keyof PriceCalculatorForm,
        value: string,
    ) => {
        setPriceCalculator((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSelectImage = (file?: File) => {
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setForm((prev) => ({
            ...prev,
            imagen: imageUrl,
        }));
    };

    const selectedTienda = tiendasMock.find(
        (tienda) => tienda.nombre === form.tienda,
    );

    const costoTotal = Number(priceCalculator.costoTotal);
    const cantidad = Number(priceCalculator.cantidad);
    const porcentajeGanancia = Number(priceCalculator.porcentajeGanancia);

    const costoUnitario =
        costoTotal > 0 && cantidad > 0 ? costoTotal / cantidad : 0;

    const gananciaPorUnidad =
        costoUnitario > 0 && porcentajeGanancia > 0
            ? costoUnitario * (porcentajeGanancia / 100)
            : 0;

    const precioSugerido = costoUnitario + gananciaPorUnidad;
    const gananciaTotal = gananciaPorUnidad * cantidad;

    const isDisabled =
        !form.nombre ||
        !form.categoria ||
        !form.descripcion ||
        !form.precio ||
        !form.tienda ||
        !form.imagen;

    const handleSubmit = () => {
        if (!selectedTienda) return;

        const newProducto: Producto = {
            id: Date.now(),
            nombre: form.nombre,
            categoria: form.categoria,
            descripcion: form.descripcion,
            precio: Number(form.precio),
            tienda: selectedTienda.nombre,
            ubicacion: selectedTienda.ubicacion,
            imagen: form.imagen,
            estado: form.estado,
        };

        addProducto(newProducto);

        navigate(`/tiendas/${selectedTienda.id}`);
    };

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
                            mb: 3,
                            p: { xs: 3, md: 4 },
                            borderRadius: 5,
                            color: "#fff",
                            background:
                                "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
                            overflow: "hidden",
                            position: "relative",
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
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 950,
                                    fontSize: { xs: 30, md: 44 },
                                    lineHeight: 1.1,
                                }}
                            >
                                Agregar producto
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1,
                                    color: "rgba(255,255,255,0.9)",
                                    fontWeight: 600,
                                    maxWidth: 680,
                                }}
                            >
                                Registra un producto, sube su imagen, calcula un precio sugerido
                                y vincúlalo a una tienda existente dentro de NicaBot Market.
                            </Typography>
                        </Box>
                    </Paper>

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 5,
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#fff",
                            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
                        }}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    lg: "1fr 340px",
                                },
                                gap: 3,
                            }}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: {
                                            xs: "1fr",
                                            md: "repeat(2, minmax(0, 1fr))",
                                        },
                                        gap: 2.5,
                                    }}
                                >
                                    <TextField
                                        label="Nombre del producto"
                                        value={form.nombre}
                                        onChange={(event) =>
                                            handleChange("nombre", event.target.value)
                                        }
                                        fullWidth
                                    />

                                    <TextField
                                        label="Categoría"
                                        value={form.categoria}
                                        onChange={(event) =>
                                            handleChange("categoria", event.target.value)
                                        }
                                        fullWidth
                                    />

                                    <TextField
                                        label="Precio final del producto"
                                        type="number"
                                        value={form.precio}
                                        onChange={(event) =>
                                            handleChange("precio", event.target.value)
                                        }
                                        helperText="Escribe el precio final que deseas publicar. La calculadora solo muestra una sugerencia."
                                        fullWidth
                                    />

                                    <TextField
                                        select
                                        label="Tienda"
                                        value={form.tienda}
                                        onChange={(event) =>
                                            handleChange("tienda", event.target.value)
                                        }
                                        fullWidth
                                    >
                                        {tiendasMock.map((tienda) => (
                                            <MenuItem key={tienda.id} value={tienda.nombre}>
                                                {tienda.nombre}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        select
                                        label="Estado"
                                        value={form.estado}
                                        onChange={(event) =>
                                            handleChange(
                                                "estado",
                                                event.target.value as ProductStatus,
                                            )
                                        }
                                        fullWidth
                                    >
                                        <MenuItem value="Disponible">Disponible</MenuItem>
                                        <MenuItem value="Agotado">Agotado</MenuItem>
                                    </TextField>

                                    <TextField
                                        label="Imagen por ruta opcional"
                                        placeholder="/productos/arroz.png"
                                        value={form.imagen.startsWith("blob:") ? "" : form.imagen}
                                        onChange={(event) =>
                                            handleChange("imagen", event.target.value)
                                        }
                                        fullWidth
                                    />

                                    <TextField
                                        label="Descripción"
                                        value={form.descripcion}
                                        onChange={(event) =>
                                            handleChange("descripcion", event.target.value)
                                        }
                                        multiline
                                        minRows={4}
                                        fullWidth
                                        sx={{
                                            gridColumn: {
                                                xs: "auto",
                                                md: "1 / -1",
                                            },
                                        }}
                                    />
                                </Box>

                                <Paper
                                    elevation={0}
                                    sx={{
                                        mt: 3,
                                        p: { xs: 2.5, md: 3 },
                                        borderRadius: 5,
                                        border: "1px solid #bbf7d0",
                                        background:
                                            "linear-gradient(135deg, #ffffff 0%, #f8fafc 55%, #ecfdf5 100%)",
                                    }}
                                >
                                    <Box sx={{ mb: 2 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 900,
                                                color: "#0f172a",
                                            }}
                                        >
                                            Calculadora de precio justo
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#64748b",
                                                lineHeight: 1.6,
                                                mt: 0.5,
                                            }}
                                        >
                                            Ingresa el costo total del lote, la cantidad de unidades y
                                            el porcentaje de ganancia deseado. El sistema solo te
                                            mostrará una sugerencia; el precio final lo decides tú.
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "grid",
                                            gridTemplateColumns: {
                                                xs: "1fr",
                                                md: "repeat(3, minmax(0, 1fr))",
                                            },
                                            gap: 2,
                                            mb: 2,
                                        }}
                                    >
                                        <TextField
                                            label="Costo total del lote"
                                            type="number"
                                            value={priceCalculator.costoTotal}
                                            onChange={(event) =>
                                                handleCalculatorChange(
                                                    "costoTotal",
                                                    event.target.value,
                                                )
                                            }
                                            fullWidth
                                        />

                                        <TextField
                                            label="Cantidad de unidades"
                                            type="number"
                                            value={priceCalculator.cantidad}
                                            onChange={(event) =>
                                                handleCalculatorChange(
                                                    "cantidad",
                                                    event.target.value,
                                                )
                                            }
                                            fullWidth
                                        />

                                        <TextField
                                            label="% de ganancia deseada"
                                            type="number"
                                            value={priceCalculator.porcentajeGanancia}
                                            onChange={(event) =>
                                                handleCalculatorChange(
                                                    "porcentajeGanancia",
                                                    event.target.value,
                                                )
                                            }
                                            fullWidth
                                        />
                                    </Box>

                                    <Divider sx={{ my: 2 }} />

                                    <Box
                                        sx={{
                                            display: "grid",
                                            gridTemplateColumns: {
                                                xs: "1fr",
                                                sm: "repeat(2, minmax(0, 1fr))",
                                                lg: "repeat(4, minmax(0, 1fr))",
                                            },
                                            gap: 2,
                                        }}
                                    >
                                        <CalculatorResult
                                            title="Costo unitario"
                                            value={`C$ ${costoUnitario.toFixed(2)}`}
                                            icon="📦"
                                            bg="#eff6ff"
                                            color="#0369a1"
                                        />

                                        <CalculatorResult
                                            title="Precio sugerido"
                                            value={`C$ ${precioSugerido.toFixed(2)}`}
                                            icon="🏷️"
                                            bg="#ecfdf5"
                                            color="#15803d"
                                        />

                                        <CalculatorResult
                                            title="Ganancia por unidad"
                                            value={`C$ ${gananciaPorUnidad.toFixed(2)}`}
                                            icon="💵"
                                            bg="#fffbeb"
                                            color="#92400e"
                                        />

                                        <CalculatorResult
                                            title="Ganancia total"
                                            value={`C$ ${gananciaTotal.toFixed(2)}`}
                                            icon="📈"
                                            bg="#fef2f2"
                                            color="#b91c1c"
                                        />
                                    </Box>

                                    <Paper
                                        elevation={0}
                                        sx={{
                                            mt: 2.5,
                                            p: 2,
                                            borderRadius: 4,
                                            border: "1px solid #bbf7d0",
                                            backgroundColor: "#f0fdf4",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#166534",
                                                fontWeight: 800,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            Este precio es solo una sugerencia. El vendedor puede
                                            decidir el precio final que desea colocar en el campo de
                                            precio del producto.
                                        </Typography>
                                    </Paper>
                                </Paper>

                                {selectedTienda && (
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            mt: 3,
                                            p: 2,
                                            borderRadius: 4,
                                            border: "1px solid #bbf7d0",
                                            backgroundColor: "#f0fdf4",
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 900, color: "#064e3b" }}>
                                            Tienda vinculada: {selectedTienda.nombre}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#166534", mt: 0.5 }}
                                        >
                                            El producto aparecerá en el perfil de esta tienda.
                                        </Typography>
                                    </Paper>
                                )}

                                <Box
                                    sx={{
                                        mt: 3,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        gap: 2,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Typography variant="body2" sx={{ color: "#64748b" }}>
                                        Productos registrados actualmente: {productos.length}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        disabled={isDisabled}
                                        onClick={handleSubmit}
                                        sx={{
                                            textTransform: "none",
                                            borderRadius: 999,
                                            px: 4,
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
                                        Guardar producto
                                    </Button>
                                </Box>
                            </Box>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2,
                                    borderRadius: 5,
                                    border: "1px solid #e2e8f0",
                                    background:
                                        "linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%)",
                                    alignSelf: "flex-start",
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
                                    Imagen del producto
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#64748b",
                                        lineHeight: 1.6,
                                        mb: 2,
                                    }}
                                >
                                    Sube una imagen desde tu computadora o escribe una ruta del
                                    proyecto.
                                </Typography>

                                <Box
                                    sx={{
                                        height: 230,
                                        borderRadius: 4,
                                        border: "2px dashed #86efac",
                                        backgroundColor: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        mb: 2,
                                    }}
                                >
                                    {form.imagen ? (
                                        <Box
                                            component="img"
                                            src={form.imagen}
                                            alt="Vista previa del producto"
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                p: 1,
                                            }}
                                        />
                                    ) : (
                                        <Box sx={{ textAlign: "center", p: 2 }}>
                                            <Typography sx={{ fontSize: 42, mb: 1 }}>🖼️</Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#64748b",
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Sin imagen seleccionada
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(event) =>
                                        handleSelectImage(event.target.files?.[0])
                                    }
                                />

                                <Button
                                    fullWidth
                                    variant="outlined"
                                    onClick={() => fileInputRef.current?.click()}
                                    sx={{
                                        textTransform: "none",
                                        borderRadius: 999,
                                        py: 1.1,
                                        fontWeight: 900,
                                        color: "#15803d",
                                        borderColor: "#86efac",
                                        backgroundColor: "#fff",
                                        "&:hover": {
                                            borderColor: "#16a34a",
                                            backgroundColor: "#f0fdf4",
                                        },
                                    }}
                                >
                                    Subir imagen
                                </Button>

                                {form.imagen && (
                                    <Button
                                        fullWidth
                                        variant="text"
                                        onClick={() => handleChange("imagen", "")}
                                        sx={{
                                            mt: 1,
                                            textTransform: "none",
                                            borderRadius: 999,
                                            fontWeight: 800,
                                            color: "#dc2626",
                                        }}
                                    >
                                        Quitar imagen
                                    </Button>
                                )}
                            </Paper>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

type CalculatorResultProps = {
    title: string;
    value: string;
    icon: string;
    bg: string;
    color: string;
};

const CalculatorResult = ({
                              title,
                              value,
                              icon,
                              bg,
                              color,
                          }: CalculatorResultProps) => {
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
            <Typography sx={{ fontSize: 24, mb: 1 }}>{icon}</Typography>

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
                variant="body1"
                sx={{
                    mt: 0.5,
                    color,
                    fontWeight: 950,
                }}
            >
                {value}
            </Typography>
        </Paper>
    );
};