import { useQueryClient } from 'react-query';
import Swal from 'sweetalert2';
import { useGetAllUsersQuery } from '@/redux/features/users/UsersApi';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

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
//   const [makeAdmin] = useMakeAdminMutation()

//     //update supply
//     const handleUpdate = (item: TUser) =>{

//         makeAdmin(item?._id);
//         queryClient.invalidateQueries('users');
//         toast.success("Supply Updated!");
//     };

  const handleMakeAdmin = (item: TUser) => {
    fetch(`http://localhost:5000/users/admin/${item?._id}`, {
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
          {users?.data?.map((item: TUser, index: number) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className="text-right flex items-center justify-end place-content-center mt-7">
                {item?.role === 'admin' ? 'Admin' : (
                  <Button onClick={() => handleMakeAdmin(item)} className="btn btn-ghost bg-orange-500 text-white">Admin</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
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
