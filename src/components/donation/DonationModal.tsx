import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCurrentUser } from "@/redux/features/auth/authSlice"
import { useAddDonationMutation } from "@/redux/features/donation/donationApi"
import { useAppSelector } from "@/redux/hook"
import { DialogClose } from "@radix-ui/react-dialog"
import { FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useQueryClient } from 'react-query';


const DonationModal = ({supply}) =>{
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const navigate = useNavigate();

    const currentUser = useAppSelector(useCurrentUser);

    const queryClient = useQueryClient();
    
    const [addDonation] = useAddDonationMutation()

    // Set default values for email and category if they're available
    useEffect(() => {
      if (currentUser) {
          setEmail(currentUser?.email);
      }
      if (supply && supply?.data) {
          setCategory(supply?.data?.category || "");
          // setQuantity(supply?.data?.quantity || "");
      }
  }, [currentUser, supply]);

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
        queryClient.invalidateQueries("donation");
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
              <DialogTitle>Add Donation</DialogTitle>
              <DialogDescription>
                Please donate to help us reach our goal.
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
                      value={email}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Input onBlur={(e) => setCategory(e.target.value)}
                      id="category"
                      value={category}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantity" className="text-right">
                        Quantity
                    </Label>
                    <Input type="number" onBlur={(e) => setQuantity(e.target.value)}
                      id="quantity"
                      // value={quantity}
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

export default DonationModal;