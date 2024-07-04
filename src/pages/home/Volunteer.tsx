import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const Volunteer = () => {
  return (
    <Container className="my-20">
      <div
        className="text-white lg:p-12 md:p-8 p-2 bg-cover bg-center h-screen bg-fixed rounded-lg"
        style={{ backgroundImage: "url('https://i.ibb.co/hXvVP1q/smiley-kid-with-yellow-flower.jpg')" }}
      >
        <h1 className="text-5xl font-bold lg:my-10 md:my-10">
          We were created to reflect God’s love in the world!!
        </h1>
        <h2 className="text-3xl text-justify font-semibold lg:my-5 md:my-5 my-2">
          - Are you ready to volunteer?
        </h2>
        <p className="text-2xl text-justify">
          - start one of our program today, help people in need.
        </p>
        <p className="font-bold border-b-4 max-w-[150px] lg:my-14 md:my-8 my-3 text-black"></p>
        <div className="flex lg:gap-6 md:gap-6 gap-3">
          <Button className="uppercase font-bold  border-2  border-slate-500">Become a volunteer</Button>
          <Button className="uppercase font-bold  border-2  border-slate-500">make a donation</Button>
        </div>
      </div>
    </Container>
  );
};

export default Volunteer;
