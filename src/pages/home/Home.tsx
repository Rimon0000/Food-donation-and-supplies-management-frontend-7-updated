import DonorTestimonial from "./DonorTestimonial";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import Supplies from "./supplies/Supplies";

const Home = () =>{
    return (
        <div>
            <HeroSection></HeroSection>
            <Supplies></Supplies>
            <DonorTestimonial></DonorTestimonial>
            <Gallery></Gallery>
        </div>
    )
}

export default Home;