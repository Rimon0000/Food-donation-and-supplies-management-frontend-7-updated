import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () =>{
    return (
        <div className=" bg-[#02033B] py-10">
            <div className="max-w-[90%] mx-auto">
                <div className=" lg:flex md:flex justify-between gap-5">
                    <div className="lg:max-w-[33%] text-[#FFFFFF]">
                        <h1 className="text-[23px] font-extrabold">Scan. Detect. Remove.</h1>
                        <div className="my-10 flex gap-10">
                            <img src="https://i.ibb.co/TBVYF0j/svg.png" alt="" />
                            <img src="https://i.ibb.co/swTM8VD/svg-1.png" alt="" />
                            <img src="https://i.ibb.co/1bwNR1H/svg-2.png" alt="" />
                        </div>
                        <div className="text-[11px] underline flex gap-6 my-10">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                        <div className="text-[11px]">
                            <p className="mb-5">Copyright © 2024 nogorful Social Org. | Registered in <br /> Bangladesh No. 10072356</p>
                            <p>Designed & developed by <span className="underline">Rimon Ron</span></p>
                        </div>
                    </div>
                    <div className="lg:max-w-[33%]">
                        <h1 className="text-[35px] font-extrabold text-[#FFFFFF] border-b border-b[] pb-5">Nogorful.</h1>
                        <div className="mt-10 flex flex-col gap-6">
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px]">iPhone</p>
                            </div>
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px]">Android</p>
                            </div>
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px]">Help</p>
                            </div>
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px]">About</p>
                            </div>
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px]">Insights</p>
                            </div>
    
                        </div>
    
                    </div>
                    <div className="lg:max-w-[33%] mt-10">
                        <div className="bg-blue-500 rounded-[30px] p-[30px] border">
                            <h1 className="text-[#02033B] text-2xl font-extrabold">Sign up to our newsletter</h1>
                            <p className="text-[#02033B] text-[15px] my-5">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            <div className="flex w-full max-w-sm items-center space-x-2">
                              <Input type="email" placeholder="Email Address" />
                              <Button className="bg-primary" type="submit">Submit</Button>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;