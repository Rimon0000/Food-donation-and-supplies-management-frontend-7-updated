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
                <div className="shadow-xl border rounded-2xl w-full hover:border-slate-500 duration-300" data-aos="fade-right" data-aos-duration="500">
                    <img className="rounded-t-2xl hover:scale-95 duration-300" src="https://i.ibb.co.com/VjxnTNr/Charity-caring-is-the-new-generation-guide-636x340.webp" alt="" />
                    <div className="p-5">
                        <div className="flex justify-between font-medium text-sm">
                            <div className="flex gap-2 items-center">
                            <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                            <CalendarRange className='h-[27px] w-[27px] rounded-full p-1'></CalendarRange></button>
                                <p>Dec31, 2024</p>
                            </div>
                            <div className="flex gap-2 items-center">
                            <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                                <Clock className='h-[27px] w-[27px] rounded-full p-1'></Clock></button>
                                <p>9:00AM - 12:00PM</p>
                            </div>
                        </div>
                        <h1 className="mt-4 font-semibold text-lg">Feeding for Underprivileged peoples.</h1>
                        <p className="my-4 text-justify">"Feed the Future: Join us in providing nourishment and hope to street children. Your donation can make a real difference in their lives, offering them a brighter tomorrow."</p>
                        <div className="flex justify-between font-medium">
                                <Button className="rounded-3xl p-5 mt-2 font-bold hover:bg-blue-600">Join Now</Button>
                                <div className="mt-4 flex gap-2 items-center">
                                <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                                    <MapPin className='h-[27px] w-[27px] rounded-full p-1'></MapPin></button>
                                <p>DC Hill, Chattagram</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="shadow-xl border rounded-2xl w-full hover:border-slate-500 duration-300" data-aos="fade-up" data-aos-duration="500">
                    <img className="rounded-t-2xl hover:scale-95 duration-300" src="https://i.ibb.co.com/4twh5rC/Start-a-volunteer-to-reach-your-creative-people-636x340.webp" alt="" />
                    <div className="p-5">
                        <div className="flex justify-between font-medium text-sm">
                            <div className="flex gap-2 items-center">
                            <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                            <CalendarRange className='h-[27px] w-[27px] rounded-full p-1'></CalendarRange></button>
                                <p>June15, 2024</p>
                            </div>
                            <div className="flex gap-2 items-center">
                            <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                            <Clock className='h-[27px] w-[27px] rounded-full p-1'></Clock></button>
                                <p>10:00AM - 2:00PM</p>
                            </div>
                        </div>
                        <h1 className="mt-4 font-semibold text-lg">Learning Opportunities for All.</h1>
                        <p className="my-4 text-justify">Knowledge Oasis: Empowering Minds, Transforming Lives. Our educational
                            materials offer a gateway to opportunity, 
                           igniting curiosity and unlocking potential in underserved communities</p>
                           <div className="flex justify-between font-medium">
                                <Button className="rounded-3xl p-5 mt-2 font-bold hover:bg-blue-600">Join Now</Button>
                                <div className="mt-4 flex gap-2 items-center">
                                <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                                    <MapPin className='h-[27px] w-[27px] rounded-full p-1'></MapPin></button>
                                <p>CRB, Chattagram</p>
                                </div>
                           </div>
                    </div>
                </div>

                <div className="shadow-xl border rounded-2xl w-full hover:border-slate-500 duration-300" data-aos="fade-left" data-aos-duration="500">
                    <img className="rounded-t-2xl max-h-[196px] w-full hover:scale-95 duration-300" src="https://i.ibb.co.com/stYdRY9/unseen-studio-s9-CC2-SKy-SJM-unsplash-1.webp" alt="" />
                    <div className="p-5">
                        <div className="flex justify-between font-medium text-sm">
                            <div className="flex gap-2 items-center">
                            <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                                <CalendarRange className='h-[27px] w-[27px] rounded-full p-1'></CalendarRange></button>
                                <p>June15, 2024</p>
                            </div>
                            <div className="flex gap-2 items-center">
                            <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                            <Clock className='h-[27px] w-[27px] rounded-full p-1'></Clock></button>
                                <p>10:00AM - 2:00PM</p>
                            </div>
                        </div>
                        <h1 className="mt-4 font-semibold text-lg">Basic Education Opportunities for All.</h1>
                        <p className="my-4 text-justify">Basic education for all is the foundation of a just and equitable society, empowering individuals with the knowledge necessary to lead fulfilling lives and contribute meaningfully to their communities. </p>
                           <div className="flex justify-between font-medium">
                                <Button className="rounded-3xl p-5 mt-2 font-bold hover:bg-blue-600">Join Now</Button>
                                <div className="mt-4 flex gap-2 items-center">
                                <button className='border border-blue-800 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-red-400'>
                                    <MapPin className='h-[27px] w-[27px] rounded-full p-1'></MapPin></button>
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