/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAddTestimonialMutation } from "@/redux/features/testimonial/TestimonialsApi";
import { useAppSelector } from "@/redux/hook";
import { useQueryClient } from "react-query";
import { toast } from "sonner";
import { TUser } from "../CommunityGraWall/Community";

const AddTestimonial = () => {
    const [AddTestimonial] = useAddTestimonialMutation()
    const queryClient = useQueryClient();
    const currentUser = useAppSelector<TUser | null>(useCurrentUser)
    console.log(currentUser);


    //handle new Task
    const handleAddNewTestimonial = async(e: any) =>{
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const message = form.message.value;
    const location = form.location.value;

    const newTestimonial = {
      image,
      name: currentUser?.name || name ,
      message,
      location
    }

    AddTestimonial(newTestimonial)
    toast.success("Testimonial Added successful.");
    queryClient.invalidateQueries("testimonial");
    form.reset()
}

  return (
    <div className="">
        <h1 className="text-2xl font-semibold mb-2 border-l-4 pl-4 border-green-700" data-aos="fade-right"> Add a New Testimonial</h1>
        <div className="w-full flex justify-center items-center">
            <form onSubmit={handleAddNewTestimonial} className="border shadow-xl rounded px-8 pt-6 w-full md:w-3/5 lg:w-2/5 hover:rounded-2xl hover:border-blue-300 duration-300">
                <div className="mb-2">
                    <Label htmlFor="Image" className="flex text-left py-2 text-base">Image</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                      name="image"
                      type="text"
                      placeholder="Image URL"
                      required/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Name" className="flex text-left py-2 text-base">Name</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                      name="name"
                      type="text"
                      placeholder="Name"
                      defaultValue={currentUser?.name}
                      required/>
                </div>
                <div className="mb-1">
                    <Label htmlFor="Message" className="flex text-left py-2 text-base">Message</Label>
                    <textarea className="shadow  border rounded w-full py-2 px-3 text-slate-950 h-[120px]"
                      name="message"
                      placeholder="Write Your Message"
                      required/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Location" className="flex text-left py-2 text-base">Location</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                      name="location"
                      type="text"
                      placeholder="Location"
                      required/>
                </div>
                
                <div className="pb-3 mt-3">
                  <Button className="rounded-3xl hover:bg-green-700 hover:text-white" type="submit">Add Testimonial</Button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddTestimonial;
