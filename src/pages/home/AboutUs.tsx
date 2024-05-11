import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {  useGetAllVolunteersQuery, useGetFilteredVolunteersQuery } from "@/redux/features/volunteers/VolunteersApi";
import { Instagram, Linkedin, LucideFacebook, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";

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
    <Container className="my-20 px-10">
      <h1 className="text-center text-6xl font-bold my-2">Our Volunteers</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
        {
          volunteersData?.data?.map((item) => (
            <Card className="grid grid-cols-2 gap-8 p-3">
              <div>
                <img className="w-full h-full rounded-lg" src={item.image} alt="" />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">{item.name}</h1>
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
                  <Linkedin className="border-2 rounded-full p-2 w-[45px] h-[45px] text-slate-600"></Linkedin>
                  <LucideFacebook className="border-2 rounded-full p-2 w-[45px] h-[45px] text-slate-600"></LucideFacebook>
                  <Twitter className="border-2 rounded-full p-2 w-[45px] h-[45px] text-slate-600 "></Twitter>
                  <Instagram className="border-2 rounded-full p-2 w-[45px] h-[45px] text-slate-600 "></Instagram>
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
