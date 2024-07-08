/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useQueryClient } from "react-query";
import { useAddVolunteerMutation } from "@/redux/features/volunteers/VolunteersApi";


export type TUser = {
    name: string;
    email: string
}
export type TCommentsData = {
    name: string;
    comment: string;
    date: Date;

}

const VolunteerHub = () => {
    const currentUser = useAppSelector<TUser | null>(useCurrentUser);
    const [addVolunteer] = useAddVolunteerMutation()
    const queryClient = useQueryClient();

     //handle new Volunteer
     const handleAddVolunteer = async(e: any) =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
    
        const newVolunteer = {
          image,
          name: currentUser?.name || name ,
          email: currentUser?.email || email,
          phone,
          location
        }
    
        addVolunteer(newVolunteer)
        toast.success("You are Volunteer Now!!");
        queryClient.invalidateQueries("volunteer");
        form.reset()
    }

    return (
        <Container className="my-5 mb-20">
            <div className="mb-10 text-white bg-cover bg-center h-[200px] bg-fixed rounded-lg"
              style={{ backgroundImage: "url('https://i.ibb.co/b3bBYVt/nogorful-2.jpg')" }} 
            >
                <h1 className="text-5xl text-center font-bold pt-20">Welcome to Our Volunteer Hub</h1>
            </div>

             <p className="text-4xl font-bold text-center">Supporting and connecting communities</p>
            <div className="grid shadow-md py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 px-20">
                <div className="text-center">
                    <img className="bg-blue-900 mx-auto rounded-sm" src="https://i.ibb.co/PZHPpgM/hand.webp" alt="" />
                    <h1 className="text-2xl font-bold mt-8">DONATIONS</h1>
                    <p className="my-6">Nogorful is always with you at any crisis in Bangladesh to help and support you.</p>
                    <Button>Donate Now</Button>
                </div>
                <div className="text-center">
                    <img className="bg-blue-900 mx-auto rounded-sm" src="https://i.ibb.co/tKRzY02/volunteer.webp" alt="" />
                    <h1 className="text-2xl font-bold mt-8">VOLUNTEER</h1>
                    <p className="my-6 ">Nogorful will be proud to have you as a volunteer.</p>
                    <Button>Join Us</Button>
                </div>
                <div className="text-center">
                    <img className="bg-blue-900 mx-auto rounded-sm" src="https://i.ibb.co/5c3VZwd/sopnsor.webp" alt="" />
                    <h1 className="text-2xl font-bold mt-8">SPONSORSHIP</h1>
                    <p className="my-6">Support us by your donations to create a better future.</p>
                    <Button>Sponsor</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-12 px-10">
            <div className="sm:col-span-6 md:col-span-6 lg:col-span-6 text-justify">
                <img className="rounded-lg lg:mt-32" src="https://i.ibb.co/58bw9jD/dakota-corbin-xh4m-G4cq-HGg-unsplash.jpg" alt="" />
            </div>
            <div className="sm:col-span-6 md:col-span-6 lg:col-span-6">
                <h1 className="text-4xl font-bold">Join Us -</h1>
                <p className="font-semibold mb-6 mt-3">Let's help ourselves and make happiness. We will be proud to have you as a volunteer.</p>
                <form onSubmit={handleAddVolunteer} className=" shadow-2xl border rounded px-6 pt-6 w-full">
                    <h1 className="text-center font-semibold text-slate-500">Sign Up with </h1>
                <div className="mb-2">
                    <Label htmlFor="Image" className="flex text-left py-2 text-base">Image</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="image"
                      type="text"
                      placeholder="Image"
                      required/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Name" className="flex text-left py-2 text-base">Name</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="name"
                      type="text"
                      placeholder="Name"
                      defaultValue={currentUser?.name}
                      required/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Email" className="flex text-left py-2 text-base">Email</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="email"
                      type="email"
                      placeholder="Email"
                      defaultValue={currentUser?.email}
                      required/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Phone" className="flex text-left py-2 text-base">Phone No.</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="phone"
                      type="text"
                      placeholder="Phone No."
                      required/>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Location" className="flex text-left py-2 text-base">Location</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="location"
                      type="text"
                      placeholder="Location"
                      required/>
                </div>                
                <div className="pb-3 mt-5">
                  <Button type="submit">Join Us</Button>
                </div>
            </form>
            </div>    
            </div>
        </Container>
    )
}

 export default VolunteerHub;