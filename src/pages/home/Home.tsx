import Contact from "./Contact";
import DonorTestimonial from "./DonorTestimonial";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import UpcomingEvent from "./UpcomingEvent";
import Volunteer from "./Volunteer";
import Supplies from "./supplies/Supplies";
import { Helmet } from "react-helmet";


const Home = () =>{
    return (
        <div>
            <Helmet>
              <title>Nogorful</title>
            </Helmet>
            <HeroSection></HeroSection>
            <Supplies></Supplies>
            <DonorTestimonial></DonorTestimonial>
            <Gallery></Gallery>
            <Volunteer></Volunteer>
            <UpcomingEvent></UpcomingEvent>
            <Contact/>
        </div>
    )
}

export default Home;