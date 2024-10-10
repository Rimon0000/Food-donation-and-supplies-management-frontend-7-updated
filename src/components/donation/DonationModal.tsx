/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useCurrentUser } from "@/redux/features/auth/authSlice"
import { useAddDonationMutation } from "@/redux/features/donation/donationApi"
import { useAppSelector } from "@/redux/hook"
import { DialogClose } from "@radix-ui/react-dialog"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useQueryClient } from 'react-query';
import { TSupplyItem } from "@/pages/home/supplies/AllSupplies"
import { TUserData } from "@/pages/dashboard/Dashboard"


const DonationModal = ({supply}: {supply : TSupplyItem}) =>{
    const [category, setCategory] = useState("")
    const navigate = useNavigate();

    const currentUser = useAppSelector(useCurrentUser) as unknown as TUserData;
    // console.log(currentUser);
    const queryClient = useQueryClient();
    const [addDonation] = useAddDonationMutation()

    // Set default values for email and category if they're available
    useEffect(() => {
      if (supply && supply?.data) {
          setCategory(supply?.data?.category || "");
      }
  }, [currentUser, supply]);

    //Handle Submit
    const handleSubmit = (e: any) =>{
        e.preventDefault()

        const form = e.target;
        const amount = form.amount.value;
        const category = form.category.value;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const donationDetails = {
          amount:parseInt(amount),
          category,
          name,
          email,
          message
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
            <Button className="mt-8 rounded-3xl uppercase text-center px-16 hover:bg-green-700 hover:text-white">Donate Now</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] text-white">
            <DialogHeader>
              <DialogTitle>Add Donation</DialogTitle>
              <DialogDescription className="text-slate-500">
                Please donate to help us reach our goal.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">

                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amount" className="text-right">
                        Amount
                    </Label>
                    <Input type="number"
                      name="amount"
                      className="col-span-3"
                      placeholder="BDT-(TK)"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Input onBlur={(e) => setCategory(e.target.value)}
                      name="category"
                      type="text"
                      value={category}
                      className="col-span-3"
                      placeholder="Category"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Name
                    </Label>
                    <Input
                    type="text"
                      name="name"
                      className="col-span-3"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Email
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      className="col-span-3"
                      placeholder="Email"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="message" className="text-right">
                        Message
                    </Label>
                    <Textarea className="col-span-3 p-2 border rounded "
                          name="message"
                          placeholder="Write Your Message"
                          required/>
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