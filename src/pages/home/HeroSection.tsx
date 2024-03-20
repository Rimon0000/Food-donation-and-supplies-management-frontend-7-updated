import Container from "@/components/Container";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const HeroSection = () => {

    return (
        <Container>
            <AwesomeSlider className="carousel h-[500px]">
               <div id="item1" className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/0V3Mtxt/img1.jpg" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
               <div id="item2" className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/JQwBw7h/img2.jpg"/>
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
               <div id="item3" className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/3NCcknb/img3.jpg" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
               <div id="item4" className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/4d1zVD0/img5.jpg"/>
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div>
               <div id="item5" className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/GvcJk5C/img6.jpg"/>
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div>
               <div id="item6" className="carousel-item relative w-full">
                 <img className="w-full rounded-xl" src="https://i.ibb.co/KW0j6s1/img7.jpg" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
            </AwesomeSlider> 
        </Container>
    );
};

export default HeroSection;