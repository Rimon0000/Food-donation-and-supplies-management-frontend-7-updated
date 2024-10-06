import { Button } from "@/components/ui/button";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const HeroSection = () => {

    return (
       <div className="pt-[81px]">
        <div>
            <AwesomeSlider className="carousel h-[550px]">
               <div className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co.com/fvrFQJR/img1-2.webp" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-8 lg:p-20 p-2 lg:w-4/5" data-aos="fade-up" data-aos-duration="800">
                  <h2 className="text-5xl font-bold">Give a little, Change a lot.</h2>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div>
                     <Button className="uppercase rounded-3xl text-xs md:text-sm lg:text-base border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] md:px-6" variant="outline">Donate Now</Button>
                  </div>
                  </div>
                </div>
               </div> 
               
               <div className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co.com/C2jTLJM/img2-1.webp"/>
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-8 lg:p-20 p-2 lg:w-4/5" data-aos="fade-up" data-aos-duration="800">
                  <h2 className="text-5xl font-bold">Become a part to change the world.</h2>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div>
                  <Button className="uppercase rounded-3xl text-xs md:text-sm lg:text-base border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] md:px-6" variant="outline">Donate Now</Button>
                  </div>
                  </div>
                </div>
               </div> 
               <div className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co.com/7r51P8C/img3-1.webp" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-8 lg:p-20 p-2 lg:w-4/5" data-aos="fade-up" data-aos-duration="800">
                  <h2 className="text-5xl font-bold">We can't help everyone, but everyone help someone.</h2>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div>
                    <Button className="uppercase rounded-3xl text-xs md:text-sm lg:text-base border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] md:px-6" variant="outline">Donate Now</Button>

                  </div>
                  </div>
                </div>
               </div> 
               <div className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co.com/CB282Px/img6.webp"/>
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-8 lg:p-20 p-2 lg:w-4/5" data-aos="fade-up" data-aos-duration="800">
                  <h2 className="text-5xl font-bold">Giving is not just about making Donation, It is about making Difference.</h2>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div>
                    <Button className="uppercase rounded-3xl text-xs md:text-sm lg:text-base border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] md:px-6" variant="outline">Donate Now</Button>
                  </div>
                  </div>
                </div>
               </div> 
            </AwesomeSlider> 
        </div>
       </div> 
    );
};

export default HeroSection;