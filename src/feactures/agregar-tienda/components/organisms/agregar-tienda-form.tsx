import { useMemo, useState, type ChangeEvent } from "react";
import {
    Box,
    Button,
    Chip,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import type { AgregarTiendaForm as AgregarTiendaFormType } from "../../types/agregar-tienda-form.type";

type AgregarTiendaFormProps = {
    form: AgregarTiendaFormType;
    onChange: (field: keyof AgregarTiendaFormType, value: string) => void;
    onReset: () => void;
    onSubmit: () => void;
};

type PreviewImage = {
    id: string;
    name: string;
    url: string;
};

const categorias = [
    "Abarrotes",
    "Comida",
    "Ropa y accesorios",
    "Tecnología",
    "Artesanía",
    "Salud",
    "Belleza",
    "Servicios",
    "Otros",
];

export const AgregarTiendaForm = ({
                                      form,
                                      onChange,
                                      onReset,
                                      onSubmit,
                                  }: AgregarTiendaFormProps) => {
    const [images, setImages] = useState<PreviewImage[]>([]);

    const isDisabled =
        !form.nombre ||
        !form.categoria ||
        !form.descripcion ||
        !form.ubicacion ||
        !form.telefono ||
        !form.horario ||
        !form.propietario ||
        !form.correo ||
        !form.banco ||
        !form.titularCuenta ||
        !form.numeroCuenta ||
        !form.tipoCuenta ||
        !form.monedaCuenta ||
        !form.telefonoCuenta;

    const completedFields = useMemo(() => {
        const fields = [
            form.nombre,
            form.categoria,
            form.descripcion,
            form.ubicacion,
            form.telefono,
            form.horario,
            form.propietario,
            form.correo,
        ];

        return fields.filter(Boolean).length;
    }, [form]);

    const progress = Math.round((completedFields / 8) * 100);

    const handleImagesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files ?? []);

        const newImages = files.map((file) => ({
            id: `${file.name}-${crypto.randomUUID()}`,
            name: file.name,
            url: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...newImages]);

        event.target.value = "";
    };

    const handleRemoveImage = (id: string) => {
        setImages((prev) => {
            const imageToRemove = prev.find((image) => image.id === id);

            if (imageToRemove) {
                URL.revokeObjectURL(imageToRemove.url);
            }

            return prev.filter((image) => image.id !== id);
        });
    };

    const handleResetForm = () => {
        images.forEach((image) => URL.revokeObjectURL(image.url));
        setImages([]);
        onReset();
    };

    const handleSubmitForm = () => {
        console.log("Imágenes seleccionadas:", images);
        onSubmit();
    };

    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 5,
                overflow: "hidden",
                border: "1px solid #dbeafe",
                backgroundColor: "#fff",
                boxShadow: "0 22px 60px rgba(15, 23, 42, 0.08)",
            }}
        >
            <Box
                sx={{
                    p: { xs: 3, md: 4 },
                    background:
                        "linear-gradient(135deg, #064e3b 0%, #15803d 50%, #22c55e 100%)",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        right: -80,
                        top: -80,
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.13)",
                    }}
                />

                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Chip
                        label="Registro de negocio"
                        sx={{
                            mb: 2,
                            backgroundColor: "#facc15",
                            color: "#064e3b",
                            fontWeight: 900,
                        }}
                    />

                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
                        Información de tu tienda
                    </Typography>

                    <Typography sx={{ color: "rgba(255,255,255,0.88)", maxWidth: 720 }}>
                        Completa los datos principales de tu negocio y agrega imágenes para
                        que los clientes puedan conocer mejor tu tienda.
                    </Typography>
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
                        variant="subtitle1"
                        sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}
                    >
                        Datos del negocio
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "repeat(2, 1fr)",
                            },
                            gap: 2.5,
                        }}
                    >
                        <TextField
                            label="Nombre de la tienda"
                            value={form.nombre}
                            onChange={(event) => onChange("nombre", event.target.value)}
                            fullWidth
                        />

                        <TextField
                            select
                            label="Categoría"
                            value={form.categoria}
                            onChange={(event) => onChange("categoria", event.target.value)}
                            fullWidth
                        >
                            {categorias.map((categoria) => (
                                <MenuItem key={categoria} value={categoria}>
                                    {categoria}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="Ubicación"
                            value={form.ubicacion}
                            onChange={(event) => onChange("ubicacion", event.target.value)}
                            fullWidth
                        />

                        <TextField
                            label="Teléfono"
                            value={form.telefono}
                            onChange={(event) => onChange("telefono", event.target.value)}
                            fullWidth
                        />

                        <TextField
                            label="Horario"
                            value={form.horario}
                            onChange={(event) => onChange("horario", event.target.value)}
                            placeholder="Ej: Lunes a sábado, 8:00 AM - 6:00 PM"
                            fullWidth
                        />

                        <TextField
                            label="Nombre del propietario"
                            value={form.propietario}
                            onChange={(event) => onChange("propietario", event.target.value)}
                            fullWidth
                        />

                        <TextField
                            label="Correo electrónico"
                            type="email"
                            value={form.correo}
                            onChange={(event) => onChange("correo", event.target.value)}
                            fullWidth
                            sx={{
                                gridColumn: {
                                    xs: "auto",
                                    md: "1 / -1",
                                },
                            }}
                        />

                        <TextField
                            label="Descripción de la tienda"
                            value={form.descripcion}
                            onChange={(event) => onChange("descripcion", event.target.value)}
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
                                "linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #ecfdf5 100%)",
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
                                Cuenta para recibir pagos
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#64748b",
                                    lineHeight: 1.6,
                                    mt: 0.5,
                                }}
                            >
                                Agrega la información de la cuenta donde el negocio recibirá los depósitos
                                de las ventas realizadas dentro de NicaBot Market.
                            </Typography>
                        </Box>

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
                                label="Banco o entidad"
                                value={form.banco}
                                onChange={(event) => onChange("banco", event.target.value)}
                                placeholder="Ejemplo: BAC, Banpro, Lafise, Billetera móvil"
                                fullWidth
                            />

                            <TextField
                                label="Nombre del titular"
                                value={form.titularCuenta}
                                onChange={(event) => onChange("titularCuenta", event.target.value)}
                                placeholder="Nombre completo del propietario o negocio"
                                fullWidth
                            />

                            <TextField
                                label="Número de cuenta"
                                value={form.numeroCuenta}
                                onChange={(event) => {
                                    const value = event.target.value.replace(/[^\d-]/g, "");
                                    onChange("numeroCuenta", value);
                                }}
                                placeholder="000000000000"
                                fullWidth
                            />

                            <TextField
                                select
                                label="Tipo de cuenta"
                                value={form.tipoCuenta}
                                onChange={(event) => onChange("tipoCuenta", event.target.value)}
                                fullWidth
                            >
                                <MenuItem value="Ahorro">Ahorro</MenuItem>
                                <MenuItem value="Corriente">Corriente</MenuItem>
                                <MenuItem value="Billetera móvil">Billetera móvil</MenuItem>
                            </TextField>

                            <TextField
                                select
                                label="Moneda"
                                value={form.monedaCuenta}
                                onChange={(event) => onChange("monedaCuenta", event.target.value)}
                                fullWidth
                            >
                                <MenuItem value="Córdobas">Córdobas</MenuItem>
                                <MenuItem value="Dólares">Dólares</MenuItem>
                            </TextField>

                            <TextField
                                label="Teléfono asociado"
                                value={form.telefonoCuenta}
                                onChange={(event) => {
                                    const value = event.target.value.replace(/[^\d+\-\s]/g, "");
                                    onChange("telefonoCuenta", value);
                                }}
                                placeholder="+505 8888 8888"
                                fullWidth
                            />
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                mt: 2.5,
                                p: 2,
                                borderRadius: 4,
                                border: "1px solid #bae6fd",
                                backgroundColor: "#f0f9ff",
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#0369a1",
                                    fontWeight: 800,
                                    lineHeight: 1.6,
                                }}
                            >
                                Esta información se usará para simular el depósito del dinero al negocio
                                después de que un cliente realice un pago. En una versión real, estos datos
                                deberían validarse y protegerse desde el backend.
                            </Typography>
                        </Paper>
                    </Paper>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 2,
                            mt: 4,
                            flexWrap: "wrap",
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={handleResetForm}
                            sx={{
                                textTransform: "none",
                                borderRadius: 999,
                                px: 3,
                                py: 1.1,
                                fontWeight: 800,
                            }}
                        >
                            Limpiar
                        </Button>

                        <Button
                            variant="contained"
                            disabled={isDisabled}
                            onClick={handleSubmitForm}
                            sx={{
                                textTransform: "none",
                                borderRadius: 999,
                                px: 3.5,
                                py: 1.1,
                                fontWeight: 900,
                                background:
                                    "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                boxShadow: "0 14px 28px rgba(34,197,94,0.28)",
                                "&:hover": {
                                    background:
                                        "linear-gradient(135deg, #166534 0%, #16a34a 100%)",
                                },
                            }}
                        >
                            Registrar tienda
                        </Button>
                    </Box>
                </Box>

                <Box>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            borderRadius: 4,
                            border: "1px solid #e2e8f0",
                            background:
                                "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 900, color: "#0f172a", mb: 1 }}
                        >
                            Vista previa
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Progreso del registro
                        </Typography>

                        <Box
                            sx={{
                                height: 12,
                                borderRadius: 999,
                                backgroundColor: "#e2e8f0",
                                overflow: "hidden",
                                mb: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: `${progress}%`,
                                    height: "100%",
                                    background:
                                        "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                    transition: "width 0.3s ease",
                                }}
                            />
                        </Box>

                        <Typography
                            variant="caption"
                            sx={{
                                color: "#64748b",
                                fontWeight: 700,
                                display: "block",
                                mb: 3,
                            }}
                        >
                            {progress}% completado
                        </Typography>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: 4,
                                border: "1px solid #dbeafe",
                                backgroundColor: "#eff6ff",
                                mb: 3,
                            }}
                        >
                            <Typography sx={{ fontWeight: 900, color: "#1e293b" }}>
                                {form.nombre || "Nombre de tu tienda"}
                            </Typography>

                            <Typography variant="body2" sx={{ color: "#475569", mt: 0.5 }}>
                                {form.categoria || "Categoría del negocio"}
                            </Typography>

                            <Typography variant="body2" sx={{ color: "#475569", mt: 1 }}>
                                📍 {form.ubicacion || "Ubicación"}
                            </Typography>

                            <Typography variant="body2" sx={{ color: "#475569", mt: 0.5 }}>
                                📞 {form.telefono || "Teléfono"}
                            </Typography>
                        </Paper>

                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 900, color: "#0f172a", mb: 1 }}
                        >
                            Imágenes de la tienda
                        </Typography>

                        <Box
                            component="label"
                            htmlFor="store-images"
                            sx={{
                                display: "flex",
                                minHeight: 150,
                                borderRadius: 4,
                                border: "2px dashed #86efac",
                                backgroundColor: "#f0fdf4",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                cursor: "pointer",
                                p: 2,
                                transition: "0.2s ease",
                                "&:hover": {
                                    backgroundColor: "#dcfce7",
                                    borderColor: "#22c55e",
                                },
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontSize: 36, mb: 1 }}>📷</Typography>
                                <Typography sx={{ fontWeight: 900, color: "#166534" }}>
                                    Agregar imágenes
                                </Typography>
                                <Typography variant="caption" sx={{ color: "#64748b" }}>
                                    Puedes seleccionar una o varias imágenes
                                </Typography>
                            </Box>
                        </Box>

                        <input
                            id="store-images"
                            type="file"
                            accept="image/*"
                            multiple
                            hidden
                            onChange={handleImagesChange}
                        />

                        {images.length > 0 && (
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: 1.5,
                                    mt: 2,
                                }}
                            >
                                {images.map((image) => (
                                    <Box
                                        key={image.id}
                                        sx={{
                                            position: "relative",
                                            borderRadius: 3,
                                            overflow: "hidden",
                                            border: "1px solid #e2e8f0",
                                            backgroundColor: "#fff",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={image.url}
                                            alt={image.name}
                                            sx={{
                                                width: "100%",
                                                height: 110,
                                                objectFit: "cover",
                                                display: "block",
                                            }}
                                        />

                                        <Button
                                            size="small"
                                            onClick={() => handleRemoveImage(image.id)}
                                            sx={{
                                                position: "absolute",
                                                top: 6,
                                                right: 6,
                                                minWidth: 0,
                                                width: 28,
                                                height: 28,
                                                borderRadius: "50%",
                                                backgroundColor: "rgba(15,23,42,0.78)",
                                                color: "#fff",
                                                fontWeight: 900,
                                                "&:hover": {
                                                    backgroundColor: "#dc2626",
                                                },
                                            }}
                                        >
                                            ×
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {images.length === 0 && (
                            <Typography
                                variant="caption"
                                sx={{
                                    display: "block",
                                    mt: 1.5,
                                    color: "#64748b",
                                }}
                            >
                                Aún no has agregado imágenes.
                            </Typography>
                        )}
                    </Paper>
                </Box>
            </Box>
        </Paper>
    );
};