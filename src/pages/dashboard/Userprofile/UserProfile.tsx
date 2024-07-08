/* eslint-disable @typescript-eslint/no-explicit-any */

import {  Contact, Mail, Navigation } from "lucide-react";
import { useMemo } from "react";
import { useGetAllUsersQuery } from "@/redux/features/users/UsersApi";
import UpdateProfile from "./UpdateProfile";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import UserAbout from "./UserAbout";
import moment from "moment";

export type TSingleUser = {
    _id: string,
    image?: string,
    name: string,
    email: string,
    password: string,
    address?: string
    designation?: string,
    company?: string,
    contact?: string,
    date?: string,
    bio?: string,
    city?: string,
    country?: string
}



const UserProfile = () => {
    const {data: allUser} = useGetAllUsersQuery(undefined)
    const currentUser = useAppSelector(useCurrentUser)
    

    //filter current user
    const singleUser = useMemo(() => {
        return allUser?.data?.find((user: { email: string | undefined; }) => user?.email === currentUser?.email);
    }, [allUser?.data, currentUser?.email]);
    

    return (
        <div className="">
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold">User Profile</h1>
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    <p className="">/ Users /   User Profile</p>
                </div>
            </div>
            <div className="mt-6 relative">
                <img src="https://i.ibb.co/tMcJKVM/roman-denisenko-XLm-DKEvxrk-unsplash.jpg" alt="" />
                <div className="absolute top-[70%] left-[40%]">
                    <div className="flex place-content-center">
                      <img className="z-10  p-1 max-h-[150px] max-w-[150px] rounded-full border-2 image-border-color stroke-2"
                        src={singleUser?.image} alt=""/>
                    </div>
                    <div className="mt-3 text-center">
                        <h1 className="text-2xl font-semibold">{singleUser?.name}</h1>
                        <p className="mt-1">{singleUser?.designation}</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between mt-10 mb-8">
                <div className="lg:flex gap-8 lg:mt-1 md:mt-1 mt-5">
                    <div>
                        <div className="flex gap-3">
                            <Mail/>
                            <p>Email</p>
                        </div>
                        <p>{singleUser?.email}</p>
                    </div>
                    <div className="lg:mt-1 md:mt-1 mt-5">
                        <div className="flex gap-3">
                            <Mail/>
                            <p>BOD</p>
                        </div>
                        <p>{moment(new Date(`${singleUser?.date}`)).format('DD MMMM YYYY')}</p>
                    </div>
                </div>
                <div className="lg:flex gap-8 lg:mt-1 md:mt-1 mt-5">
                    <div>
                        <div className="flex gap-3">
                            <Contact />
                            <p>Contact Us</p>
                        </div>
                        <p>{singleUser?.contact}</p>
                    </div>
                    <div className="lg:mt-1 md:mt-1 mt-5">
                        <div className="flex gap-3">
                            <Navigation />
                            <p>Location</p>
                        </div>
                        <p>{singleUser?.address}</p>
                    </div>
                </div>
            </div>
            <hr />

            <div className="lg:flex md:flex justify-between my-10 gap-10">
                <div className="lg:w-[50%] md:w-[50%] lg:mb-1 md:mb-1 mb-10">
                    <UserAbout singleUser = {singleUser}/>
                </div>
                <div className="lg:w-[50%] md:w-[50%]">
                    <UpdateProfile singleUser = {singleUser}/>
                </div>               
            </div>
            
        </div>
    );
};

export default UserProfile;