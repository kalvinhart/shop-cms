import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../features/authentication/hooks/useAuth";
import { ROLES } from "../../../features/authentication/utils/userRoles";

type RoleKeys = keyof typeof ROLES;

type Roles = typeof ROLES[RoleKeys];

type Props = {
  allowedRoles: Roles[];
};

const RequireAuth = ({ allowedRoles }: Props) => {
  const { user, authLoading, authError } = useAuth();
  const location = useLocation();

  const isRoleAllowed = allowedRoles.includes(Number(user?.role)) || false;

  if (authLoading) return null;

  return isRoleAllowed ? (
    <Outlet />
  ) : user.email !== "" ? (
    <Navigate to="/unauthorised" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
