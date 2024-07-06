/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {  CalendarIcon } from "lucide-react";
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "sonner";
import { useQueryClient } from "react-query";
import moment from "moment";
import React from "react";
import { useUpdateUserMutation } from "@/redux/features/users/UsersApi";
import { TSingleUser } from "./UserProfile";


const UpdateProfile = ({singleUser}: {singleUser: TSingleUser}) => {
    const {_id} = singleUser;
    const [date, setDate] = React.useState<Date>()
    const [updateUser] = useUpdateUserMutation(undefined)
    const queryClient = useQueryClient();

    const handleEditProfile = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const designation = form.designation.value;
        const email = form.email.value;
        const company = form.company.value;
        const contact = form.contact.value;
        const address = form.address.value;
        const city = form.city.value;
        const country = form.country.value;
        const bio = form.bio.value;
    
        const updateProfile = {
            id: _id,
            data: {
                image,
                name,
                designation,
                email,
                company,
                contact,
                address,
                city,
                country,
                date,
                bio,
            }
        }
        console.log(updateProfile);
    
        updateUser(updateProfile)
        toast.success("User Updated successfully!");
        queryClient.invalidateQueries("user");
        form.reset()

    }

    return (
        <div>
            <form onSubmit={handleEditProfile} className="border shadow-2xl rounded px-6 pt-6 w-full">
                <h1 className="text-center font-semibold text-xl">Edit your Profile! </h1>
                <div className="mb-2">
                    <Label htmlFor="Image" className="flex text-left py-2 text-base">Image URL</Label>
                    <input className="  border rounded w-full py-2 px-3 text-slate-950"
                      name="image"
                      type="text"
                      placeholder="Image"
                      required/>
                </div>
                <div className="flex gap-3 mb-2">
                    <div className="">
                        <Label htmlFor="Name" className="flex text-left py-2 text-base">Name</Label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                          name="name"
                          type="text"
                          placeholder="Name"
                          required/>
                    </div>
                    <div className="">
                        <Label htmlFor="Designation" className="flex text-left py-2 text-base">Designation</Label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                          name="designation"
                          type="text"
                          placeholder="Designation"
                          required/>
                    </div>
                </div>
                <div className="flex gap-3 mb-2">
                    <div className="">
                        <Label htmlFor="Email" className="flex text-left py-2 text-base">Email</Label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                          name="email"
                          type="email"
                          placeholder="Email"
                          required/>
                    </div>
                    <div className="">
                        <Label htmlFor="Company" className="flex text-left py-2 text-base">Company</Label>
                        <input className="  border rounded w-full py-2 px-3 text-slate-950"
                          name="company"
                          type="text"
                          placeholder="Company"
                          required/>
                    </div>
                </div>
                <div className="flex gap-3 mb-2">
                    <div className="">
                        <Label htmlFor="Contact" className="flex text-left py-2 text-base">Contact</Label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                          name="contact"
                          type="text"
                          placeholder="Contact"
                          required/>
                    </div>
                    <div className="">
                        <Label htmlFor="Address" className="flex text-left py-2 text-base">Address</Label>
                        <input className="  border rounded w-full py-2 px-3 text-slate-950"
                          name="address"
                          type="text"
                          placeholder="Address"
                          required/>
                    </div>
                </div>
                <div className="flex gap-3 mb-2">
                    <div className="">
                        <Label htmlFor="City" className="flex text-left py-2 text-base">City</Label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                          name="city"
                          type="text"
                          placeholder="City"
                          required/>
                    </div>
                    <div className="">
                        <Label htmlFor="Country" className="flex text-left py-2 text-base">Country</Label>
                        <input className="  border rounded w-full py-2 px-3 text-slate-950"
                          name="country"
                          type="text"
                          placeholder="Country"
                          required/>
                    </div>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Date" className="flex text-left py-2 text-base">Birth Of Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Birth Of Date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Bio" className="flex text-left py-2 text-base">Bio</Label>
                    <textarea className="shadow  border rounded w-full py-2 px-3 h-[120px]"
                      name="bio"
                      placeholder="Write about Yourself"
                      required/>
                </div>    
              
                <div className="pb-3 mt-5">
                  <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;