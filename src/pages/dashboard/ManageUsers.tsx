import { useQueryClient } from 'react-query';
import Swal from 'sweetalert2';
import { useGetAllUsersQuery } from '@/redux/features/users/UsersApi';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import emptySupply from "../../assets/animation/empty.json"

export type TUser = {
    _id: number;
    name: string;
    email: string;
    password: string;
    role?: string;
}

const ManageUsers = () => {
  const { data: users } = useGetAllUsersQuery(undefined);
  const queryClient = useQueryClient();

  const handleMakeAdmin = (item: TUser) => {
    fetch(`https://assign-7-rho.vercel.app/users/admin/${item?._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          queryClient.invalidateQueries('users');
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${item?.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold my-5">All Supplies</h1>
      <Table>
        <TableCaption>A list of your recent items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.data?.length ? (
           users?.data?.map((item: TUser, index: number) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className="text-right flex items-center justify-end place-content-center mt-7 font-bold">
                {item?.role === 'admin' ? 'Admin' : (
                  <Button onClick={() => handleMakeAdmin(item)} className="btn btn-ghost bg-orange-400 text-white rounded-3xl hover:text-slate-500 font-bold">Admin</Button>
                )}
              </TableCell>
            </TableRow>
          ))
         ) : (
           <TableRow>
             <TableCell colSpan={4}>
               <div className="flex items-center justify-center">
                 <Lottie className="w-2/5" animationData={emptySupply} />
               </div>
             </TableCell>
           </TableRow>
         )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{users?.data.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ManageUsers;
