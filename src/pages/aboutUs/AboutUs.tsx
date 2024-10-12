import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {  useGetAllVolunteersQuery, useGetFilteredVolunteersQuery } from "@/redux/features/volunteers/VolunteersApi";
import Lottie from "lottie-react";
import {  MapPin, Twitter } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhoneAlt, FaUserFriends } from "react-icons/fa";
import emptyProduct from "../../assets/animation/empty.json"

type TVolunteerData = {
  image: string;
  name: string;
  location: string;
  phone: string;
  email: string;
}

const AboutUs = () => {
  const [showAllVolunteers, setShowAllVolunteers] = useState(false);
  const {data: filteredVolunteersData} = useGetFilteredVolunteersQuery(undefined)
  const {data: allVolunteersData} = useGetAllVolunteersQuery(undefined)


  //handle to show all volunteers
  const seeAllHandler = () =>{
    setShowAllVolunteers(allVolunteersData)
  }
  
  const volunteersData = showAllVolunteers ? allVolunteersData : filteredVolunteersData;

  return (
    <div>
      <Helmet>
        <title>About US</title>
      </Helmet>

      <div className="mb-10 text-white bg-cover bg-center bg-fixed h-[300px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://i.ibb.co.com/9qHspbv/philip-strong-i-OBTE2xs-Yko-unsplash-1.webp')" }} 
      >
        <div>
            <h1 className="text-5xl text-center font-bold pt-14">About Us</h1>
        </div>
      </div>
      <Container className="my-5 mb-20 px-10">
        <div className="text-justify mt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-medium opacity-80 border-b-2 pb-1 border-[#8cbd51] w-7/12 md:w-9/12 lg:w-7/12 mb-4" data-aos="fade-right">We are Team Nogorful</h1>
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-medium opacity-80 border-b-2 pb-1 border-[#8cbd51] w-9/12 md:w-7/12 lg:w-6/12 mb-4 mt-5" data-aos="fade-right">Vision & Mission</h1>
            <p className="font-medium text-sm"><span className="font-bold">Vision:</span> Our vision is to spread humanity, kindness and bring social justice. We believe that good brings only more good and everyone deserves to live in a peaceful environment.</p>
            <p className="font-medium text-sm mt-5"><span className="font-bold">Mission:</span> Our mission is to provide education, nourishment, mental and physical support to the distressed and to make people self sufficient by permanently rehabilitating them.</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-medium opacity-80 border-b-2 pb-1 border-[#8cbd51] w-9/12 md:w-7/12 lg:w-6/12 mb-4 mt-5" data-aos="fade-right">Where we work</h1>
            <p className="font-medium text-sm">Nogorful initially started as an organization serving the poor communities by making learning fun and engaging. Later by crowdfunding and by massive support from the citizens of Bangladesh and International well wishers and donors we have grown into one of the biggest charities in Bangladesh. We have 8 schools,  We also recently launched the CMP-Nogorful Field Hospital dedicated to provide quality treatment, free of cost for the CoronaVirus treatment of distressed citizens. Another new hospital is also in the making to serve the underprivileged. Some of our localised projects are flood relief, educational assistance, free eatery, religious festivals celebrations for the poor, job training etc.</p>  
        </div>
  
        <div className="flex items-center gap-3 justify-center my-10">
          <FaUserFriends className="h-[40px] w-[40px] text-[#525050]"></FaUserFriends>
          <h1 className="text-center text-5xl font-bold">Our Volunteers</h1>
        </div>
        {volunteersData?.data?.length ?(
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
          {
            volunteersData?.data?.map((item : TVolunteerData) => (
              <Card className="flex flex-col lg:flex-row gap-5 p-2">
                <div className="w-full">
                  <img className="w-full h-full rounded-lg hover:scale-105 duration-300" src={item.image} alt="" />
                </div>
                <div className="w-full">
                  <h1 className="text-xl lg:text-2xl font-bold pb-1">{item.name}</h1>
                  <hr />
                  
                  <div className="flex gap-3 items-center my-2 bg-base-200 py-1 px-4 rounded-lg border hover:border-blue-500 transition-all hover:animate-pulse hover:shadow-primary hover:shadow-md duration-300">
                    <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                      <MapPin className='h-[20px] lg:h-[30px] w-[20px] lg:w-[30px] rounded-full p-1'></MapPin>
                    </button>
                    <p className="font-semibold text-sm lg:text-base">{item.location}</p>
                  </div>
              
                  <div className="flex gap-3 items-center bg-base-200 py-1 px-4 rounded-lg border hover:border-blue-500 transition-all hover:animate-pulse hover:shadow-primary hover:shadow-md duration-300">
                    <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                      <FaMailBulk className='h-[20px] lg:h-[30px] w-[20px] lg:w-[30px] rounded-full p-1'></FaMailBulk>
                    </button>
                    <p className="font-semibold text-sm lg:text-base">rimonron.ad@gmail.com</p>
                  </div>
              
                  <div className="flex gap-3 items-center my-2 text-center bg-base-200 py-1 px-4 rounded-lg border hover:border-blue-500 transition-all hover:animate-pulse hover:shadow-primary hover:shadow-md duration-300">
                    <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                      <FaPhoneAlt className='h-[20px] lg:h-[30px] w-[20px] lg:w-[30px] rounded-full p-1'></FaPhoneAlt>
                    </button>
                    <p className="font-semibold text-sm lg:text-base">+880 1306-260913</p>
                  </div>
              
                  <div className="flex gap-3 items-center justify-center">
                    <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                      <FaLinkedinIn className='h-[25px] lg:h-[35px] w-[25px] lg:w-[35px] rounded-full p-1 lg:p-2'></FaLinkedinIn>
                    </button>
              
                    <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                      <FaFacebook className='h-[25px] lg:h-[35px] w-[25px] lg:w-[35px] rounded-full p-1 lg:p-2'></FaFacebook>
                    </button>
              
                    <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                      <Twitter className='h-[25px] lg:h-[35px] w-[25px] lg:w-[35px] rounded-full p-1 lg:p-2'></Twitter>
                    </button>
              
                    <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                      <FaInstagram className='h-[25px] lg:h-[35px] w-[25px] lg:w-[35px] rounded-full p-1 lg:p-2'></FaInstagram>
                    </button>
                  </div>
                </div>
              </Card>

              
            ))
          }
        </div>
  
        {!showAllVolunteers && (
          <div className="text-center mt-9">
            <Button className="rounded-3xl px-8 py-6 hover:bg-green-700 hover:shadow-xl" onClick={seeAllHandler}>All Volunteers</Button>
          </div>
        )}
        </div>
        ) : (
          <div className="flex items-center justify-center">
            <Lottie className="w-2/5" animationData={emptyProduct} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default AboutUs;
