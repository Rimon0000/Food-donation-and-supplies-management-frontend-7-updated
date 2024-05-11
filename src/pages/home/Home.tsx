import DonorTestimonial from "./DonorTestimonial";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import UpcomingEvent from "./UpcomingEvent";
import Volunteer from "./Volunteer";
import Supplies from "./supplies/Supplies";

const Home = () =>{
    return (
        <div>
            <HeroSection></HeroSection>
            <Supplies></Supplies>
            <DonorTestimonial></DonorTestimonial>
            <Gallery></Gallery>
            <Volunteer></Volunteer>
            <UpcomingEvent></UpcomingEvent>
        </div>
    )
}

export default Home;