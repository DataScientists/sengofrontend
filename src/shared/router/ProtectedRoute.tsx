import { useMe } from '@store/me/hooks';
import { Route, type RouterProps } from 'react-router-dom';

export const ProtectedRoute: React.FC<RouterProps> = (props) => {
  const { me } = useMe();

  // Prevents race condition
  if (me === undefined) {
    return null;
  }

  return <Route {...props} />;
};
ProtectedRoute.displayName = 'Route';
export default ProtectedRoute;
