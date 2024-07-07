import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/redux/hook';
import { useCurrentUser } from '@/redux/features/auth/authSlice';
import useAdmin from '@/components/hooks/useAdmin';
import { toast } from 'sonner';

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

  toast("You are not an admin and cannot access this page.");

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
