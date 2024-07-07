/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"
import { toast } from "sonner"
import { FilePenLine } from "lucide-react"
import { TTestimonial } from "@/pages/dashboard/AllTestimonialTabular"
import { useUpdateTestimonialMutation } from "@/redux/features/testimonial/TestimonialsApi"


const UpdateTestimonialModal = ({item}: {item: TTestimonial}) =>{
    const {_id, image, name, message, location} = item
    
    const [updateTestimonial] = useUpdateTestimonialMutation()

  //update supply
  const handleUpdate = (e: any) =>{
    e.preventDefault()

    const form = e.target 
    const image = form.image.value
    const name = form.name.value
    const location = form.location.value
    const message = form.message.value

    const options = {
        id: _id,
        data: {
            image,
            name, 
            location,
            message,
        }
    };
    
    updateTestimonial(options);
    toast.success("Testimonial Updated!");
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
              <DialogTitle>Update Testimonial</DialogTitle>
              <DialogDescription>
                Please Update to help us reach our goal.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdate}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Image" className="text-right">
                      Image
                    </Label>
                    <Input 
                      name="image"
                      defaultValue={image}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Name" className="text-right">
                      Name
                    </Label>
                    <Input 
                      name="name"
                      defaultValue={name}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Location" className="text-right">
                      Location
                    </Label>
                    <Input 
                      name="location"
                      defaultValue={location}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Message" className="text-right">
                      Message
                    </Label>
                    <Input 
                      name="message"
                      defaultValue={message}
                      className="col-span-3 h-[100px]"
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

export default UpdateTestimonialModal;