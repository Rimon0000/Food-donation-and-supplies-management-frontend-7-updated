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
        <Container className="my-5">
            <div className="mb-10 text-white bg-cover bg-center h-[200px] bg-fixed rounded-lg"
              style={{ backgroundImage: "url('https://i.ibb.co/b3bBYVt/nogorful-2.jpg')" }} 
            >
                <h1 className="text-5xl text-center font-bold pt-20">Welcome to Our Volunteer Hub</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-12">

            <div className="sm:col-span-6 md:col-span-6 lg:col-span-7 text-justify">
                    <h1 className="text-5xl text-purple-900 font-bold border-b-4 pb-4 max-w-[520px]">We are Team Nogorful</h1>
                    <p className="font-semibold text-lg my-5">A crazy group of people to inspire a nation</p>
                    <p className="font-medium text-sm">
                    A passionate group of people who wishes to inspire a nation and beyond. 
                    Nogorful is an educational voluntary organization that originated from Chattagram,Bangladesh. 
                    Nogorful has been operated by 40 professionals and with help of thousands of volunteers. 
                    Our mission is to globally foster philanthropic works. By designing innovative and 
                    inspiring programs, our goal is to engage students and professionals to work together
                    to educate, empower and lift the underprivileged. One of our endeavors is to provide
                    free education, educational materials and support. We have established libraries 
                    and a printing press for original publications. Our motto is to teach with compassion 
                    where a good human being is developed rather than a typical human who is only 
                    professionally equipped. Starting from volunteers, their children, refugees, street 
                    children and orphans, anyone with an underprivileged background is welcome at our door. 
                    </p>
                    <h1 className="text-5xl text-purple-900 font-bold border-b-4 pb-4 my-5 max-w-[390px]">Vision & Mission</h1>
                    <p className="font-medium text-sm"><span className="font-bold">Vision:</span> Our vision is to spread humanity, kindness and bring social justice. We believe that good brings only more good and everyone deserves to live in a peaceful environment.</p>
                    <p className="font-medium text-sm mt-5"><span className="font-bold">Mission:</span> Our mission is to provide education, nourishment, mental and physical support to the distressed and to make people self sufficient by permanently rehabilitating them.</p>
                    <h1 className="text-5xl text-purple-900 font-bold border-b-4 pb-4 my-5 max-w-[370px]">Where we work</h1>
                    <p className="font-medium text-sm">Nogorful initially started as an organization serving the poor communities by making learning fun and engaging. Later by crowdfunding and by massive support from the citizens of Bangladesh and International well wishers and donors we have grown into one of the biggest charities in Bangladesh. We have 8 schools,  We also recently launched the CMP-Nogorful Field Hospital dedicated to provide quality treatment, free of cost for the CoronaVirus treatment of distressed citizens. Another new hospital is also in the making to serve the underprivileged. Some of our localised projects are flood relief, educational assistance, free eatery, religious festivals celebrations for the poor, job training etc.</p>  
                </div>

                <div className="sm:col-span-6 md:col-span-6 lg:col-span-5">
                    <h1 className="text-5xl font-bold">Join Us</h1>
                    <p className="font-semibold mb-6 mt-3">Let's help ourselves and make happiness. We will be proud to have you as a volunteer.</p>
                    <form onSubmit={handleAddVolunteer} className="bg-slate-100 shadow-md rounded px-6 pt-6 w-full">
                        <h1 className="text-center font-semibold text-slate-600">Sign Up with </h1>
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