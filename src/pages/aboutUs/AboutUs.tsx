import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {  useGetAllVolunteersQuery, useGetFilteredVolunteersQuery } from "@/redux/features/volunteers/VolunteersApi";
import { Instagram, Linkedin, LucideFacebook, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";

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
    <Container className="my-5 mb-20 px-10">
      <Helmet>
        <title>About US</title>
      </Helmet>

       <div className="mb-10 text-white bg-cover bg-center h-[200px] bg-fixed rounded-lg"
        style={{ backgroundImage: "url('https://i.ibb.co/mqZZfPb/philip-strong-i-OBTE2xs-Yko-unsplash.jpg')" }} 
      >
          <h1 className="text-5xl text-center font-bold pt-20">About Us</h1>
      </div>

      <div className="text-justify mt-16">
          <h1 className="text-5xl text-slate-500 font-bold border-b-4 pb-4 max-w-[520px]">We are Team Nogorful</h1>
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
          <h1 className="text-5xl text-slate-500 font-bold border-b-4 pb-4 my-5 max-w-[390px]">Vision & Mission</h1>
          <p className="font-medium text-sm"><span className="font-bold">Vision:</span> Our vision is to spread humanity, kindness and bring social justice. We believe that good brings only more good and everyone deserves to live in a peaceful environment.</p>
          <p className="font-medium text-sm mt-5"><span className="font-bold">Mission:</span> Our mission is to provide education, nourishment, mental and physical support to the distressed and to make people self sufficient by permanently rehabilitating them.</p>
          <h1 className="text-5xl text-slate-500 font-bold border-b-4 pb-4 my-5 max-w-[370px]">Where we work</h1>
          <p className="font-medium text-sm">Nogorful initially started as an organization serving the poor communities by making learning fun and engaging. Later by crowdfunding and by massive support from the citizens of Bangladesh and International well wishers and donors we have grown into one of the biggest charities in Bangladesh. We have 8 schools,  We also recently launched the CMP-Nogorful Field Hospital dedicated to provide quality treatment, free of cost for the CoronaVirus treatment of distressed citizens. Another new hospital is also in the making to serve the underprivileged. Some of our localised projects are flood relief, educational assistance, free eatery, religious festivals celebrations for the poor, job training etc.</p>  
      </div>

      <h1 className="text-center text-5xl font-bold my-10">Our Volunteers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
        {
          volunteersData?.data?.map((item : TVolunteerData) => (
            <Card className="lg:flex gap-8 p-3">
              <div>
                <img className="w-full h-full rounded-lg" src={item.image} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-bold pb-2">{item.name}</h1>
                <hr />
                <div className="flex items-center gap-3 my-3">
                  <MapPin></MapPin>
                  <p className="font-medium">{item.location}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <Phone></Phone>
                    <p className="font-medium">{item.phone}</p>
                  </div>
                  <div className="flex items-center gap-3 my-3">
                    <Mail></Mail>
                    <p className="font-medium">{item.email}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Linkedin className="border rounded-full p-2 w-[45px] h-[45px]"></Linkedin>
                  <LucideFacebook className="border rounded-full p-2 w-[45px] h-[45px]"></LucideFacebook>
                  <Twitter className="border rounded-full p-2 w-[45px] h-[45px]"></Twitter>
                  <Instagram className="border rounded-full p-2 w-[45px] h-[45px] "></Instagram>
                </div>
              </div>
             
            </Card>
            
          ))
        }
      </div>

      {!showAllVolunteers && (
        <div className="text-center mt-9">
          <Button onClick={seeAllHandler}>All Volunteers</Button>
        </div>
      )}
    
      
    </Container>
  );
};

export default AboutUs;
