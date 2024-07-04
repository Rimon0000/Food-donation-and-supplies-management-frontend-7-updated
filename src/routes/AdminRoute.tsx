import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/redux/hook';
import { useCurrentUser } from '@/redux/features/auth/authSlice';
import useAdmin from '@/components/hooks/useAdmin';

type TAdminRouteProps = {
  children: React.ReactNode;
}

const AdminRoute: React.FC<TAdminRouteProps> = ({ children }) => {
  const currentUser = useAppSelector(useCurrentUser);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (currentUser && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
