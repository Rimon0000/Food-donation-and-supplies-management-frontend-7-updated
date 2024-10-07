import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { CalendarRange, Clock, MapPin } from "lucide-react";
import { FaLongArrowAltDown } from "react-icons/fa";


const UpcomingEvent = () =>{
    return (
        <Container>
            <div className="flex items-center justify-center gap-2">
                <FaLongArrowAltDown className="h-[30px] text-blue-900"></FaLongArrowAltDown>
                <h1 className="text-4xl font-bold">Be ready for our upcoming charity events</h1>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                <div className="shadow-xl border rounded-2xl w-full" data-aos="fade-right" data-aos-duration="2000">
                    <img className="rounded-t-2xl" src="https://i.ibb.co/SKdYpBc/Charity-caring-is-the-new-generation-guide-636x340.jpg" alt="" />
                    <div className="p-5">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <CalendarRange></CalendarRange>
                                <p>Dec31, 2024</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Clock></Clock>
                                <p>9:00AM - 12:00PM</p>
                            </div>
                        </div>
                        <h1 className="mt-4 font-semibold text-lg">Feeding for Underprivileged peoples.</h1>
                        <p className="my-4 text-justify">"Feed the Future: Join us in providing nourishment and hope to street children. Your donation can make a real difference in their lives, offering them a brighter tomorrow."</p>
                        <div className="flex justify-between">
                                <Button className="rounded-full p-5 mt-2">Join Now</Button>
                                <div className="mt-4 flex gap-2 items-center">
                                <MapPin></MapPin>
                                <p>DC Hill, Chattagram</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="shadow-xl border rounded-2xl w-full" data-aos="fade-right" data-aos-duration="2000">
                    <img className="rounded-t-2xl" src="https://i.ibb.co/2krx920/Start-a-volunteer-to-reach-your-creative-people-636x340.jpg" alt="" />
                    <div className="p-5">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <CalendarRange></CalendarRange>
                                <p>June15, 2024</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Clock></Clock>
                                <p>10:00AM - 2:00PM</p>
                            </div>
                        </div>
                        <h1 className="mt-4 font-semibold text-lg">Learning Opportunities for All.</h1>
                        <p className="my-4 text-justify">Knowledge Oasis: Empowering Minds, Transforming Lives. Our educational
                            materials offer a gateway to opportunity, 
                           igniting curiosity and unlocking potential in underserved communities</p>
                           <div className="flex justify-between">
                                <Button className="rounded-full p-5 mt-2">Join Now</Button>
                                <div className="mt-4 flex gap-2 items-center">
                                <MapPin></MapPin>
                                <p>CRB, Chattagram</p>
                                </div>
                           </div>
                    </div>
                </div>

                <div className="shadow-xl border rounded-2xl w-full" data-aos="fade-right" data-aos-duration="2000">
                    <img className="rounded-t-2xl max-h-[196px] w-full" src="https://i.ibb.co/YkmGdVf/unseen-studio-s9-CC2-SKy-SJM-unsplash.jpg" alt="" />
                    <div className="p-5">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <CalendarRange></CalendarRange>
                                <p>June15, 2024</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Clock></Clock>
                                <p>10:00AM - 2:00PM</p>
                            </div>
                        </div>
                        <h1 className="mt-4 font-semibold text-lg">Basic Education Opportunities for All.</h1>
                        <p className="my-4 text-justify">Basic education for all is the foundation of a just and equitable society, empowering individuals with the knowledge necessary to lead fulfilling lives and contribute meaningfully to their communities. </p>
                           <div className="flex justify-between">
                                <Button className="rounded-full p-5 mt-2">Join Now</Button>
                                <div className="mt-4 flex gap-2 items-center">
                                <MapPin></MapPin>
                                <p>GEC, Chattagram</p>
                                </div>
                           </div>
                    </div>
                </div>
                
            </div>

        </Container>
    )
}

export default UpcomingEvent;

// data-aos="fade-right" data-aos-duration="2000"