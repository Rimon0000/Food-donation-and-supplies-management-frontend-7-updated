import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetAllSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import { FilePenLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const AllSuppliesTabular = () =>{
  const { data } = useGetAllSuppliesQuery(undefined);


    return (
        <div>
            <h1 className="text-center text-xl font-bold my-5">All Supplies</h1>

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
                  <TableRow key={item.item}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="text-right flex items-center justify-end place-content-center mt-7">
                          
                          <Button variant="destructive" 
                        //   onClick={() => handleDelete(task._id)}
                            className=" hover:bg-slate-700 px-2 py-2 rounded-md"
                          >
                            <Trash2/>
                          </Button>
                          <hr className="border-2 mx-2 h-7 bg-slate-800"></hr>
                          <Link 
                        //   to={`update-task/${task._id}`}
                          >
                            <Button className="hover:bg-slate-600 hover:text-white  px-2 py-2 rounded-md" variant="secondary">
                              <FilePenLine></FilePenLine>
                            </Button>
                          </Link>
                     
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