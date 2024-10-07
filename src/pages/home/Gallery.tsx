import Container from "@/components/Container";


const Gallery = () => {

  return (
    <Container>
      <h1 className="text-center text-5xl font-bold my-2">Activities</h1>
      <p className="text-center font-semibold lg:w-2/3 text-sm lg:text-base mx-auto ">
        Here’s a snapshot of some of our previous activities! You can join our next activity if you’d like.
      </p>
      <div className="my-10 w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-8 columns-3">
        <div className="border-2 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:rounded-lg hover:border-red-700 bg-[#1A1A1A]">
            <div className="">
              <img className="bg-cover rounded-lg hover:animate-pulse hover:border-blue-950 duration-300 shadow-md hover:shadow-lg hover:rounded-md hover:scale-105 lg:max-h-[543px] w-full"
                src="https://i.ibb.co.com/NWyYjDZ/img4-1.webp" alt=""/>
            </div>
            <div className="">
              <h2 className="text-xl text-white font-semibold text-center py-2">Food Supplies</h2>
            </div>
        </div>
        <div className="border-2 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:rounded-lg hover:border-red-700 bg-[#1A1A1A]">
            <div className="">
              <img className="bg-cover rounded-lg hover:animate-pulse hover:border-blue-950 duration-300 shadow-md hover:shadow-lg hover:rounded-md hover:scale-105 lg:max-h-[543px] w-full"
                src="https://i.ibb.co.com/NWBy7CT/img6.webp" alt=""/>
            </div>
            <div className="">
              <h2 className="text-xl text-white font-semibold text-center py-2">Medicine Supplies</h2>
            </div>
        </div>
        <div className="border-2 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:rounded-lg hover:border-red-700 bg-[#1A1A1A]">
            <div className="">
              <img className="bg-cover rounded-lg hover:animate-pulse hover:border-blue-950 duration-300 shadow-md hover:shadow-lg hover:rounded-md hover:scale-105 lg:max-h-[543px] w-full"
                src="https://i.ibb.co.com/t4BQ9h4/img33.webp" alt=""/>
            </div>
            <div className="">
              <h2 className="text-xl text-white font-semibold text-center py-2">Basic Need Supplies</h2>
            </div>
        </div>
        <div className="border-2 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:rounded-lg hover:border-red-700 bg-[#1A1A1A]">
            <div className="">
              <img className="bg-cover rounded-lg hover:animate-pulse hover:border-blue-950 duration-300 shadow-md hover:shadow-lg hover:rounded-md hover:scale-105 lg:max-h-[543px] w-full"
                src="https://i.ibb.co.com/K9QSDMg/img3-1.webp" alt=""/>
            </div>
            <div className="">
              <h2 className="text-xl text-white font-semibold text-center py-2">Environment Clean
              </h2>
            </div>
        </div>
        <div>
        <div className="mb-3 border-2 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:rounded-lg hover:border-red-700 bg-[#1A1A1A]">
            <div className="">
              <img className="bg-cover rounded-lg hover:animate-pulse hover:border-blue-950 duration-300 shadow-md hover:shadow-lg hover:rounded-md hover:scale-105 lg:max-h-[543px] w-full"
                src="https://i.ibb.co.com/MB68xPf/img5.webp" alt=""/>
            </div>
            <div className="">
              <h2 className="text-xl text-white font-semibold text-center py-2">Health Care</h2>
            </div>
        </div>
        <div className="border-2 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:rounded-lg hover:border-red-700 bg-[#1A1A1A]">
            <div className="">
              <img className="bg-cover rounded-lg hover:animate-pulse hover:border-blue-950 duration-300 shadow-md hover:shadow-lg hover:rounded-md hover:scale-105 lg:max-h-[543px] w-full"
                src="https://i.ibb.co.com/Bw5tQNg/img44.webp" alt=""/>
            </div>
            <div className="">
              <h2 className="text-xl text-white font-semibold text-center py-2">Social Service</h2>
            </div>
        </div>
        </div>
        <div className="border-2 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:rounded-lg hover:border-red-700 bg-[#1A1A1A]">
            <div className="">
              <img className="bg-cover rounded-lg hover:animate-pulse hover:border-blue-950 duration-300 shadow-md hover:shadow-lg hover:rounded-md hover:scale-105 lg:max-h-[543px] w-full"
                src="https://i.ibb.co.com/8jG1pPK/img342.webp" alt=""/>
            </div>
            <div className="">
              <h2 className="text-xl text-white font-semibold text-center py-2">Daily Foods Supplies</h2>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
