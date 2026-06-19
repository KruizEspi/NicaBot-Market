import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    InputAdornment,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";

import type { LoginForm as LoginFormType, UserRole } from "../../types/  login-form.type";
import { AuthLogo } from "../atoms/auth-logo";

type LoginFormProps = {
    form: LoginFormType;
    showPassword: boolean;
    isDisabled: boolean;
    onChange: (field: keyof LoginFormType, value: string | boolean) => void;
    onRoleChange: (role: UserRole) => void;
    onTogglePassword: () => void;
    onSubmit: () => void;
};

const roles: {
    label: string;
    value: UserRole;
    description: string;
    icon: React.ReactNode;
}[] = [
    {
        label: "Cliente",
        value: "cliente",
        description: "Explorar tiendas y productos",
        icon: <PersonIcon />,
    },
    {
        label: "Negocio",
        value: "negocio",
        description: "Administrar mi tienda",
        icon: <StorefrontIcon />,
    },
    {
        label: "Administrador",
        value: "admin",
        description: "Gestionar plataforma",
        icon: <AdminPanelSettingsIcon />,
    },
];

export const LoginForm = ({
                              form,
                              showPassword,
                              isDisabled,
                              onChange,
                              onRoleChange,
                              onTogglePassword,
                              onSubmit,
                          }: LoginFormProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: "100%",
                maxWidth: 520,
                height: "100%",
                borderRadius: 6,
                p: { xs: 3, sm: 5 },
                border: "1px solid #e2e8f0",
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 24px 70px rgba(15, 23, 42, 0.10)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <AuthLogo />

            <Box sx={{ mt: 5, mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                    Bienvenida de nuevo
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Ingresa a tu cuenta para continuar en NicaBot Market.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(3, 1fr)",
                    },
                    gap: 1.5,
                    mb: 3,
                }}
            >
                {roles.map((role) => {
                    const isSelected = form.role === role.value;

                    return (
                        <Box
                            key={role.value}
                            onClick={() => onRoleChange(role.value)}
                            sx={{
                                p: 1.5,
                                borderRadius: 3,
                                cursor: "pointer",
                                border: isSelected
                                    ? "2px solid #4cae50"
                                    : "1px solid #e2e8f0",
                                backgroundColor: isSelected ? "#e8f5e9" : "#fff",
                                transition: "0.2s ease",
                                "&:hover": {
                                    borderColor: "#4cae50",
                                    backgroundColor: "#f0fdf4",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    color: isSelected ? "#2e7d32" : "#64748b",
                                    mb: 0.5,
                                }}
                            >
                                {role.icon}
                            </Box>

                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    color: "#1e293b",
                                }}
                            >
                                {role.label}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 11,
                                    color: "#64748b",
                                    lineHeight: 1.3,
                                }}
                            >
                                {role.description}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            <Box sx={{ display: "grid", gap: 2 }}>
                <TextField
                    label="Correo electrónico"
                    type="email"
                    value={form.email}
                    onChange={(event) => onChange("email", event.target.value)}
                    fullWidth
                />

                <TextField
                    label="Contraseña"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(event) => onChange("password", event.target.value)}
                    fullWidth
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={onTogglePassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <TextField
                    select
                    label="Tipo de acceso"
                    value={form.role}
                    onChange={(event) => onRoleChange(event.target.value as UserRole)}
                    fullWidth
                >
                    {roles.map((role) => (
                        <MenuItem key={role.value} value={role.value}>
                            {role.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                    mb: 3,
                    gap: 2,
                    flexWrap: "wrap",
                }}
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={form.remember}
                            onChange={(event) => onChange("remember", event.target.checked)}
                            sx={{
                                color: "#4cae50",
                                "&.Mui-checked": {
                                    color: "#4cae50",
                                },
                            }}
                        />
                    }
                    label="Recordarme"
                />

                <Button
                    variant="text"
                    sx={{
                        textTransform: "none",
                        color: "#2e7d32",
                        fontWeight: 600,
                    }}
                >
                    ¿Olvidaste tu contraseña?
                </Button>
            </Box>

            <Button
                fullWidth
                variant="contained"
                disabled={isDisabled}
                onClick={onSubmit}
                sx={{
                    py: 1.4,
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: "bold",
                    backgroundColor: "#4cae50",
                    boxShadow: "0 12px 28px rgba(76, 174, 80, 0.28)",
                    "&:hover": {
                        backgroundColor: "#3f9844",
                    },
                }}
            >
                Iniciar sesión
            </Button>

            <Divider sx={{ my: 3 }} />

            <Typography
                component="p"
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
            >
                ¿No tienes una cuenta?{" "}
                <Box
                    component="span"
                    sx={{
                        color: "#2e7d32",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Registrar tienda
                </Box>
            </Typography>
        </Paper>
    );
};