import UpdateSupplyModal from "@/components/donation/UpdateSupplyModal";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDeleteSupplyMutation, useGetAllSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import { removeSupply } from "@/redux/features/supplies/suppliesSlice";
import { useAppDispatch } from "@/redux/hook";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AllSuppliesTabular = () =>{
  const { data } = useGetAllSuppliesQuery(undefined);
  const dispatch = useAppDispatch()
  const [deleteSupply] = useDeleteSupplyMutation();


  //handle delete
   const handleDelete = async(id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async(result) => {
      if (result.isConfirmed) {
        await deleteSupply(id).unwrap();
        dispatch(removeSupply(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


    return (
        <div>
            <h1 className="text-center text-xl font-bold my-5">All Supplies</h1>
            <div className=" my-3 mr-5 flex items-end justify-end">
              <Link to="/dashboard/create-supply"><Button>Add New Supply</Button></Link>
            </div>

            <Table>
              <TableCaption>A list of your recent items.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="text-right flex items-center justify-end place-content-center mt-7"> 
                      <Button onClick={() => handleDelete(item._id)} variant="destructive" className=" hover:bg-slate-700 px-2 py-2 rounded-md">
                        <Trash2/>
                      </Button>
                      <hr className="border-2 mx-2 h-7 bg-slate-800"></hr>                    
                      <UpdateSupplyModal item={item}></UpdateSupplyModal>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            

        </div>
    )
}

export default AllSuppliesTabular;