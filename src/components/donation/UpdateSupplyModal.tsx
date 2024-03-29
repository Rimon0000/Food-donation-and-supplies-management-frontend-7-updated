import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"
import { toast } from "sonner"
import { useUpdateSupplyMutation } from "@/redux/features/supplies/suppliesApi"
import { FilePenLine } from "lucide-react"


const UpdateSupplyModal = ({item}) =>{
    const {_id, title, category, quantity} = item
    
    const [updateSupply] = useUpdateSupplyMutation()

  //update supply
  const handleUpdate = (e) =>{
    e.preventDefault()

    const form = e.target 
    const title = form.title.value
    const category = form.category.value
    const quantity = form.quantity.value

    const options = {
        id: _id,
        data: {
            title,
            category, 
            quantity,
        }
    };
    
    updateSupply(options);
    toast.success("Supply Updated!");
};

    return (
        <Dialog>
          <DialogTrigger asChild>
          <Button className="hover:bg-slate-600 hover:text-white  px-2 py-2 rounded-md" variant="secondary">
              <FilePenLine></FilePenLine>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Update Supply</DialogTitle>
              <DialogDescription>
                Please donate to help us reach our goal.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdate}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    <Input 
                      name="title"
                      defaultValue={title}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Input 
                      name="category"
                    //   value={category}
                      defaultValue={category}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantity" className="text-right">
                        Quantity
                    </Label>
                    <Input type="number"
                      name="quantity"
                      defaultValue={quantity}
                    //   value={quantity}
                      className="col-span-3"
                      required
                    />
                  </div>
              
                </div>
                <div className="flex justify-end">
                    <DialogClose asChild>
                        <Button type="submit">Confirm</Button>
                    </DialogClose>
                </div>
            </form> 
          </DialogContent>
        </Dialog>
    )
}

export default UpdateSupplyModal;