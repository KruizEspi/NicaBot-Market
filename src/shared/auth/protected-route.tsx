import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuthStore } from "../store/use-auth-store";
import {
    canAccessRoute,
    type AppRouteKey,
} from "./role-permissions";

type ProtectedRouteProps = {
    routeKey: AppRouteKey;
    children: ReactNode;
};

export const ProtectedRoute = ({ routeKey, children }: ProtectedRouteProps) => {
    const { user } = useAuthStore();

    const hasAccess = canAccessRoute(routeKey, user?.role.id);

    if (!hasAccess) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};