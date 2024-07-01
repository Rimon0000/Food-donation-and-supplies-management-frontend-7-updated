import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser, useCurrentUserToken } from "@/redux/features/auth/authSlice";
import { TUser, TUserToken } from "@/redux/features/auth/authSlice"; // Ensure these are exported from your slice

const useAdmin = () => {
  const currentUser = useAppSelector(useCurrentUser) as TUser | null;
  const currentUserToken = useAppSelector(useCurrentUserToken) as TUserToken | null;
  const [axiosSecure] = useAxiosSecure();

  // Use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", currentUser?.email],
    enabled: !!currentUser?.email && !!currentUserToken,
    queryFn: async () => {
      if (!currentUser?.email) throw new Error("User email is not defined");
      const res = await axiosSecure.get(`/users/admin/${currentUser.email}`);
      return res.data.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
