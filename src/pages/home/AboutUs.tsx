import Container from "@/components/Container";

const AboutUs = () => {
  return (
    <Container className="my-20">
      <h1 className="text-center text-6xl font-bold my-2">Who we are</h1>
      
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="text-justify	px-2">
            <h1 className=" font-semibold mb-2">
              A crazy group of people to inspire a nation:
            </h1>
            <p className="text-lg">
              A passionate group of people who wishes to inspire a nation and beyond. 
              Nogorful is an educational voluntary organization that originated from Bangladesh.
              Our mission is to globally foster philanthropic works. By designing innovative and 
              inspiring programs, our goal is to engage students and professionals to work 
              together to educate, empower and lift the underprivileged. One of our endeavors 
              is to provide free education, educational materials and support etc.
            </p>
            <div className="mt-2">
              <h1 className="font-semibold border-b-2 max-w-[135px]">Vision & Mission</h1>
              <p className="font-semibold">Vision: 
                <span className="font-normal"> Our vision is to spread humanity, kindness and bring social 
                justice. We believe that good brings only more good and everyone 
                deserves to live in a peaceful environment.</span>
              </p>
              <p className="font-semibold mt-1">Mission: 
                <span className="font-normal"> Our mission is to provide education, nourishment, mental 
                and physical support to the distressed and to make people self 
                sufficient by permanently rehabilitating them.</span>
              </p>

            </div>
        </div>

        <div>
          <img className="rounded-lg" src="https://i.ibb.co/prSR4gK/nogorful.jpg" alt="" />
        </div>
      </div>
      
    </Container>
  );
};

export default AboutUs;
