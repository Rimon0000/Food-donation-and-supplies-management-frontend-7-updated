import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';
import { useAppSelector } from '@/redux/hook';
import { useCurrentUser } from '@/redux/features/auth/authSlice';

const useAdmin = () => {
  const currentUser = useAppSelector(useCurrentUser);
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', currentUser?.email],
    enabled: !!currentUser?.email && !!localStorage.getItem('access-token'),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${currentUser?.email}`);
      return res.data.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
