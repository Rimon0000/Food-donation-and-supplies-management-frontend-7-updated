import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { FaArrowCircleRight } from "react-icons/fa";

const Volunteer = () => {
  return (
    <Container className="my-20">
      <div
        className="text-white flex flex-col justify-center items-start lg:items-start lg:justify-start lg:p-12 md:p-8 p-4 bg-cover bg-center h-screen bg-fixed rounded-lg"
        style={{ backgroundImage: "url('https://i.ibb.co/CtmCxWP/smiley-kid-with-yellow-flower-1.webp')" }}
      >
        <h1 className="text-3xl lg:text-5xl font-bold lg:my-10 md:my-8 my-4 text-center lg:text-left">
          We were created to reflect God’s love in the world!!
        </h1>
        <div className="flex items-center gap-4 my-3">
          <FaArrowCircleRight className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px] rounded-full border" />
          <h2 className="text-lg lg:text-2xl font-semibold text-left">
            Are you ready to volunteer?
          </h2>
        </div>
        <div className="flex items-center gap-4 my-3">
          <FaArrowCircleRight className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px] rounded-full border" />
          <h2 className="text-lg lg:text-2xl font-semibold text-left">
            Start one of our programs today!
          </h2>
        </div>
        <div className="lg:my-14 md:my-10 my-6">
          <p className="font-bold border-b-4 max-w-[150px] text-black"></p>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row lg:gap-6 md:gap-6 gap-4">
          <Button className="uppercase w-full lg:w-auto md:w-auto font-bold rounded-3xl lg:py-5 lg:px-6 md:py-4 md:px-6 py-3 px-4 border border-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300">
            Become a volunteer
          </Button>
          <Button className="uppercase w-full lg:w-auto md:w-auto font-bold rounded-3xl lg:py-5 lg:px-6 md:py-4 md:px-6 py-3 px-4 border border-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300">
            Make a donation
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Volunteer;
