import { useAuthContext } from '@shared/auth';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authenticated, authenticating } = useAuthContext();

  // Show nothing while checking authentication status
  if (authenticating) {
    return null;
  }

  // Redirect to login if not authenticated
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

ProtectedRoute.displayName = 'ProtectedRoute';
export default ProtectedRoute;
