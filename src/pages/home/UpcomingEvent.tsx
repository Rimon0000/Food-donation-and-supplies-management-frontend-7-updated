import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { CalendarRange, Clock, MapPin } from "lucide-react";


const UpcomingEvent = () =>{
    return (
        <Container>
            <h1 className="text-center text-6xl font-bold my-2 max-w-[20ch] grid mx-auto">Be ready for our upcoming charity events</h1>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="shadow-xl rounded-2xl">
                    <img className="rounded-t-2xl" src="https://i.ibb.co/SKdYpBc/Charity-caring-is-the-new-generation-guide-636x340.jpg" alt="" />
                    <div className="p-8">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center font-semibold">
                                <CalendarRange></CalendarRange>
                                <p>Dec31, 2024</p>
                            </div>
                            <div className="flex gap-2 items-center font-semibold">
                                <Clock></Clock>
                                <p>9:00AM - 12:00PM</p>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-2 items-center font-semibold">
                            <MapPin></MapPin>
                            <p>DC Hill, Chattagram</p>
                        </div>
                        <h1 className="mt-5 font-semibold text-xl">Feeding Dreams for Underprivileged peoples.</h1>
                        <p className="my-5 text-justify text-slate-600">"Feed the Future: Join us in providing nourishment and hope to street children. Your donation can make a real difference in their lives, offering them a brighter tomorrow."</p>
                        <Button className="rounded-full p-5 py-6 mt-3">Join Now</Button>
                    </div>
                </div>


                <div className="shadow-xl rounded-2xl">
                    <img className="rounded-t-2xl" src="https://i.ibb.co/2krx920/Start-a-volunteer-to-reach-your-creative-people-636x340.jpg" alt="" />
                    <div className="p-8">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center font-semibold">
                                <CalendarRange></CalendarRange>
                                <p>June15, 2024</p>
                            </div>
                            <div className="flex gap-2 items-center font-semibold">
                                <Clock></Clock>
                                <p>10:00AM - 2:00PM</p>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-2 items-center font-semibold">
                            <MapPin></MapPin>
                            <p>CRB, Chattagram</p>
                        </div>
                        <h1 className="mt-5 font-semibold text-xl">Limitless Learning: Crafting Opportunities for All.</h1>
                        <p className="my-5 text-justify text-slate-600">Knowledge Oasis: Empowering Minds, Transforming Lives. Our educational
                            materials offer a gateway to opportunity, 
                           igniting curiosity and unlocking potential in underserved communities</p>
                        <Button className="rounded-full p-5 py-6 mt-3">Join Now</Button>
                    </div>
                </div>
                
            </div>

        </Container>
    )
}

export default UpcomingEvent;