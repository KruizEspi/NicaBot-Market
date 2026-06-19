import { useLoginForm } from "../hooks/use-login-form";
import { LoginTemplate } from "../templates/login-template";

export default function LoginPage() {
    const {
        form,
        showPassword,
        isDisabled,
        handleChange,
        handleRoleChange,
        handleSubmit,
        setShowPassword,
    } = useLoginForm();

    return (
        <LoginTemplate
            form={form}
            showPassword={showPassword}
            isDisabled={isDisabled}
            onChange={handleChange}
            onRoleChange={handleRoleChange}
            onTogglePassword={() => setShowPassword((prev) => !prev)}
            onSubmit={handleSubmit}
        />
    );
}