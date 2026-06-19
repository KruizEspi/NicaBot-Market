import {
    Box,
    Button,
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
    const isDisabled =
        !form.nombre ||
        !form.categoria ||
        !form.descripcion ||
        !form.ubicacion ||
        !form.telefono ||
        !form.propietario ||
        !form.correo;

    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                backgroundColor: "#fff",
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                Información del negocio
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
                    onClick={onReset}
                    sx={{ textTransform: "none" }}
                >
                    Limpiar
                </Button>

                <Button
                    variant="contained"
                    disabled={isDisabled}
                    onClick={onSubmit}
                    sx={{
                        textTransform: "none",
                        backgroundColor: "#4cae50",
                        "&:hover": {
                            backgroundColor: "#3f9844",
                        },
                    }}
                >
                    Registrar tienda
                </Button>
            </Box>
        </Paper>
    );
};
