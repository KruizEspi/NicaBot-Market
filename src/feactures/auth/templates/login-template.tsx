import { Box } from "@mui/material";
import type { LoginForm as LoginFormType, UserRole } from "../types/  login-form.type";
import { LoginBrandPanel } from "../components/organisms/login-brand-panel";
import { LoginForm } from "../components/organisms/login-form";

type LoginTemplateProps = {
    form: LoginFormType;
    showPassword: boolean;
    isDisabled: boolean;
    onChange: (field: keyof LoginFormType, value: string | boolean) => void;
    onRoleChange: (role: UserRole) => void;
    onTogglePassword: () => void;
    onSubmit: () => void;
};

export const LoginTemplate = ({
                                  form,
                                  showPassword,
                                  isDisabled,
                                  onChange,
                                  onRoleChange,
                                  onTogglePassword,
                                  onSubmit,
                              }: LoginTemplateProps) => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at top left, #dcfce7 0%, transparent 35%), linear-gradient(135deg, #f8fafc, #ecfdf5)",
                p: { xs: 2, md: 4 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1180,
                    minHeight: { xs: "auto", md: 720 },
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1.1fr 0.9fr",
                    },
                    gap: 4,
                    alignItems: "stretch",
                }}
            >
                <LoginBrandPanel />

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                        justifyContent: "center",
                    }}
                >
                    <LoginForm
                        form={form}
                        showPassword={showPassword}
                        isDisabled={isDisabled}
                        onChange={onChange}
                        onRoleChange={onRoleChange}
                        onTogglePassword={onTogglePassword}
                        onSubmit={onSubmit}
                    />
                </Box>
            </Box>
        </Box>
    );
};