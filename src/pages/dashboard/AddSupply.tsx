/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAddSupplyMutation } from "@/redux/features/supplies/suppliesApi";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddSupply = () => {
    const [addSupply] = useAddSupplyMutation()
    const queryClient = useQueryClient();
    const navigate = useNavigate();


    //handle new Task
    const handleAddNewSupply = async(e: any) =>{
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newSupply = {
      image,
      title,
      category,
      quantity: parseInt(quantity),
      description
    }
    console.log(newSupply);

    addSupply(newSupply)
    toast.success("Supply Added successful.");
    queryClient.invalidateQueries("donation");
    navigate("/dashboard/supplies");
}

  return (
    <div className="text-center my-4">
        <h1 className="text-3xl font-semibold mb-4"> Add a New Supply</h1>
        <div className="w-full flex justify-center items-center">
            <form onSubmit={handleAddNewSupply} className="bg-slate-100 shadow-md rounded px-8 pt-6 w-full md:w-3/5 lg:w-2/5">
                <div className="mb-2">
                    <Label htmlFor="Image" className="flex text-left py-2 text-base">Image</Label>
                    <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                      name="image"
                      type="text"
                      placeholder="Image URL"
                      required/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Title" className="flex text-left py-2 text-base">Title</Label>
                    <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                      name="title"
                      type="text"
                      placeholder="Title"
                      required/>
                </div>
                <div className="flex gap-3">
                <div className="mb-2">
                    <Label htmlFor="Category" className="flex text-left py-2 text-base">Category</Label>
                    <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                      name="category"
                      type="text"
                      placeholder="Category"
                      required/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Quantity" className="flex text-left py-2 text-base">Quantity</Label>
                    <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                      name="quantity"
                      type="number"
                      placeholder="Quantity"
                      required/>
                </div>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Description" className="flex text-left py-2 text-base">Description</Label>
                    <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                      name="description"
                      type="text"
                      placeholder="Description"
                      required/>
                </div>
                
                <div className="pb-3 mt-1">
                  <Button type="submit">Add Supply</Button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddSupply;
