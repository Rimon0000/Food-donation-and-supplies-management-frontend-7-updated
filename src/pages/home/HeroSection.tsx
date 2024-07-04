import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const HeroSection = () => {

    return (
       <div className=" bg-gray-800 py-28">
        <Container>
            <AwesomeSlider className="carousel h-[550px]">
               <div className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/0V3Mtxt/img1.jpg" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-8 lg:p-20 p-2 lg:w-4/5">
                  <h2 className="text-5xl font-bold">Give a little, Change a lot.</h2>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div>
                  <Button className="uppercase btn btn-primary ">Donate Now</Button>
                  </div>
                  </div>
                </div>
               </div> 
               
               <div className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/JQwBw7h/img2.jpg"/>
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-8 lg:p-20 p-2 lg:w-4/5">
                  <h2 className="text-5xl font-bold">Become a part to change the world.</h2>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div>
                  <Button className="uppercase btn btn-primary ">Donate Now</Button>
                  </div>
                  </div>
                </div>
               </div> 
               <div className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/3NCcknb/img3.jpg" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-8 lg:p-20 p-2 lg:w-4/5">
                  <h2 className="text-5xl font-bold">We can't help everyone, but everyone help someone.</h2>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div>
                  <Button className="uppercase btn btn-primary ">Donate Now</Button>
                  </div>
                  </div>
                </div>
               </div> 
               <div className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/GvcJk5C/img6.jpg"/>
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-8 lg:p-20 p-2 lg:w-4/5">
                  <h2 className="text-5xl font-bold">Giving is not just about making Donation, It is about making Difference.</h2>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div>
                  <Button className="uppercase btn btn-primary ">Donate Now</Button>
                  </div>
                  </div>
                </div>
               </div> 
            </AwesomeSlider> 
        </Container>
       </div> 
    );
};

export default HeroSection;