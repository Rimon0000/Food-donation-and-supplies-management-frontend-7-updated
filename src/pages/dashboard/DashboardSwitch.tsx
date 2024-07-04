import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hook';
import { useCurrentUser } from '@/redux/features/auth/authSlice';
import useAdmin from '@/components/hooks/useAdmin';
import Dashboard from '@/pages/dashboard/Dashboard';
import AdminDashboard from '@/pages/dashboard/admin/AdminDashboard';

const DashboardSwitch = () => {
  const currentUser = useAppSelector(useCurrentUser);
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin) {
    return <AdminDashboard />;
  }

  return <Dashboard />;
};

export default DashboardSwitch;
