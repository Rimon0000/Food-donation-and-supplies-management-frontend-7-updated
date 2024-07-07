import UpdateSupplyModal from "@/components/donation/UpdateSupplyModal";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDeleteSupplyMutation, useGetAllSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import { removeSupply } from "@/redux/features/supplies/suppliesSlice";
import { useAppDispatch } from "@/redux/hook";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useDeleteTestimonialMutation, useGetAllTestimonialQuery } from "@/redux/features/testimonial/TestimonialsApi";
import { removeTestimonial } from "@/redux/features/testimonial/testimonialsSlice";
import UpdateTestimonialModal from "@/components/donation/UpdateTestimonialModal";

export type TTestimonial = {
    _id: string,
    image: string,
    name: string,
    location: string,
    message: string
}



const AllTestimonialTabular = () =>{
  const { data } = useGetAllTestimonialQuery(undefined);
  const dispatch = useAppDispatch()
  const [deleteTestimonial] = useDeleteTestimonialMutation();


  //handle delete
   const handleDelete = async(id: string) => {
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
        await deleteTestimonial(id).unwrap();
        dispatch(removeTestimonial(id));
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
            <h1 className="text-center text-xl font-bold my-5">All Testimonials</h1>
            <div className=" my-3 mr-5 flex items-end justify-end">
              <Link to="/dashboard/create-testimonial"><Button>Add New Testimonial</Button></Link>
            </div>

            <Table>
              <TableCaption>A list of your recent items.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">#</TableHead>
                  <TableHead className="">Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((item: TTestimonial, index: string) => (
                  <TableRow key={item._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell><img className='rounded-full max-w-[70px] h-[70px]' src={item?.image} alt="" /></TableCell>
                    <TableCell className="font-medium">{item?.name}</TableCell>
                    <TableCell>{item?.location}</TableCell>
                    <TableCell className="text-right flex items-center justify-end place-content-center mt-7"> 
                      <Button onClick={() => handleDelete(item?._id)} variant="destructive" className=" hover:bg-slate-700 px-2 py-2 rounded-md">
                        <Trash2/>
                      </Button>
                      <hr className="border-2 mx-2 h-7 bg-slate-800"></hr>                    
                      <UpdateTestimonialModal item={item}></UpdateTestimonialModal>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            

        </div>
    )
}

export default AllTestimonialTabular;