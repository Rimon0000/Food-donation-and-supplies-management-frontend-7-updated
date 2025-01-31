import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hook';
import { useCurrentUser } from '@/redux/features/auth/authSlice';
import useAdmin from '@/components/hooks/useAdmin';
import Dashboard from '@/pages/dashboard/Dashboard';
import AdminDashboard from '@/pages/dashboard/admin/AdminDashboard';
import Lottie from 'lottie-react';
import loadingAnimation from "../../assets/animation/loading.json"

const DashboardSwitch = () => {
  const currentUser = useAppSelector(useCurrentUser);
  const [isAdmin, isAdminLoading] = useAdmin();
  // console.log("isAdmin", isAdmin);

  if (isAdminLoading) {
    return <div><Lottie className="w-2/5" animationData={loadingAnimation} /></div>;
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
