import React, { useState } from "react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQueryClient } from "react-query";
import { useAddContactMutation } from "@/redux/features/contacts/contactsApi";
import { toast } from "sonner";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [addContact] = useAddContactMutation(undefined)
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newContact = {
      ...formData,
    };

    await addContact(newContact);
    toast.success("Message Added successfully.");
    queryClient.invalidateQueries("contact");
    setFormData({
      name: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="bg-slate-100 text-slate-950 mt-20">
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-5 gap-10">
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl font-semibold">Contact Us</h1>
              <p className="text-justify my-4">
                If you need anything or have any questions, please don't hesitate to reach out. You can contact us using the form provided or this email and number. We value your feedback and are here to assist you with any concerns or inquiries you may have.
              </p>
              <div className="flex gap-3 items-center pt-5 bg-base-200 py-5 px-8 rounded-lg border hover:border-blue-500 transition-all hover:animate-pulse hover:shadow-primary hover:shadow-md duration-300">
              <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
              <FaMailBulk className='h-[35px] w-[35px] rounded-full p-2'></FaMailBulk></button>
              <p className="font-semibold">rimonron.ad@gmail.com</p>
              </div>
              <div className="flex gap-3  items-center my-4 text-center pt-5 bg-base-200 py-5 px-8 rounded-lg border hover:border-blue-500 transition-all hover:animate-pulse hover:shadow-primary hover:shadow-md duration-300">
                <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                <FaPhoneAlt className='h-[35px] w-[35px] rounded-full p-2'></FaPhoneAlt></button>
                <p className="font-semibold">+880 1306-260913</p>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>We'd love to hear from you!</CardTitle>
                <CardDescription>Let's get in touch.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-5 my-5">
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          name="address"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Input
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Button className="mt-5 rounded-3xl hover:bg-blue-600" type="submit">
                    Submit
                  </Button>
                </form>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
