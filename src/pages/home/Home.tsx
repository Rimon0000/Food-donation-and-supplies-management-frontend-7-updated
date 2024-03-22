import DonorTestimonial from "./DonorTestimonial";
import HeroSection from "./HeroSection";
import Supplies from "./supplies/Supplies";

const Home = () =>{
    return (
        <div>
            <HeroSection></HeroSection>
            <Supplies></Supplies>
            <DonorTestimonial></DonorTestimonial>
        </div>
    )
}

export default Home;