import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCurrentUser } from "@/redux/features/auth/authSlice"
import { useAddDonationMutation } from "@/redux/features/donation/donationApi"
import { useAppSelector } from "@/redux/hook"
import { DialogClose } from "@radix-ui/react-dialog"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const DonationModal = () =>{
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const navigate = useNavigate();

    const currentUser = useAppSelector(useCurrentUser);
    
    
    const [addDonation, {data, isLoading, isError, isSuccess}] = useAddDonationMutation()
    console.log({data, isLoading, isError, isSuccess});



    //Handle Submit
    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()

        const donationDetails = {
          email,
          category,
          quantity:parseInt(quantity),
        }

        // for server state 
        addDonation(donationDetails)
        toast.success("Donation successful.");
        navigate("/dashboard");
    }


    return (
        <Dialog>
          <DialogTrigger asChild>
            {/* <Button className="bg-primary-gradient">Add Todo</Button> */}
            <Button className="mt-8">Donate Now</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription>
                Add your tasks that what you want to finish.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Email
                    </Label>
                    <Input onBlur={(e) => setEmail(e.target.value)}
                      id="email"
                      defaultValue={currentUser?.email}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Input onBlur={(e) => setCategory(e.target.value)}
                      id="category"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantity" className="text-right">
                        Quantity
                    </Label>
                    <Input type="number" onBlur={(e) => setQuantity(e.target.value)}
                      id="quantity"
                      className="col-span-3"
                    />
                  </div>
              
                </div>
                <div className="flex justify-end">
                    <DialogClose asChild>
                        <Button type="submit">Save changes</Button>
                    </DialogClose>
                </div>
            </form> 
          </DialogContent>
        </Dialog>
    )
}

export default DonationModal;