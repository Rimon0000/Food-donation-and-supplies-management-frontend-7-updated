import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () =>{
    return (
        <div className=" bg-slate-900 py-10">
            <div className="max-w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    <div className=" text-[#FFFFFF]">
                        <h1 className="text-[23px] font-extrabold">Scan. Detect. Remove.</h1>
                        <div className="my-10 flex gap-10">
                            <img className="hover:-translate-y-1 hover:bg-blue-800" src="https://i.ibb.co/TBVYF0j/svg.png" alt="" />
                            <img className="hover:-translate-y-1 hover:bg-blue-800" src="https://i.ibb.co/swTM8VD/svg-1.png" alt="" />
                            <img className="hover:-translate-y-1 hover:bg-blue-800" src="https://i.ibb.co/1bwNR1H/svg-2.png" alt="" />
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
                    <div className="">
                        <h1 className="text-4xl font-extrabold text-[#FFFFFF] border-b pb-3 max-w-[40%] md:max-w-[75%] lg:max-w-[45%]">Nogorful.</h1>
                        <div className="mt-10 flex flex-col gap-6">
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px] hover:underline hover:underline-offset-8">iPhone</p>
                            </div>
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px] hover:underline hover:underline-offset-8">Android</p>
                            </div>
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px] hover:underline hover:underline-offset-8">Help</p>
                            </div>
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px] hover:underline hover:underline-offset-8">About</p>
                            </div>
                            <div className="flex gap-5 items-center text-[#FFC247]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFC247]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="font-extrabold text-[19px] hover:underline hover:underline-offset-8">Insights</p>
                            </div>
    
                        </div>
    
                    </div>
                    <div className=" mt-10">
                        <div className="bg-slate-300 rounded-3xl p-[30px] border hover:border-white hover:scale-105 duration-300">
                            <h1 className="text-[#02033B] text-2xl font-extrabold">Sign up to our newsletter</h1>
                            <p className="text-[#02033B] text-[15px] my-5">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            <div className="flex w-full max-w-sm items-center space-x-2">
                              <Input className="border border-blue-800" type="email" placeholder="Email Address" />
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