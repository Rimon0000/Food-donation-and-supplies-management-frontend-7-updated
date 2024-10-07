import Container from "@/components/Container";
import { useGetAllTestimonialQuery } from "@/redux/features/testimonial/TestimonialsApi";
import Marquee from "react-fast-marquee";

type TDonorTestimonial = {
  _id: string,
  image: string
  name: string,
  message: string,
  location: string
}


const DonorTestimonial = () =>{
  const {data: donors} = useGetAllTestimonialQuery(undefined)
  
    return (
        <Container className="my-20">
            <h1 className="text-center text-5xl font-bold">Our Top Donor</h1>
            <div className='mt-10'>
              <Marquee className='text-danger' speed={100}>
                {
                  donors?.data?.map((item: TDonorTestimonial) => (
                    <div className="w-80 mx-5">
                        <div className="flex place-content-center">
                          <img className="z-10  p-1 max-h-[150px] max-w-[150px] rounded-full border-2 image-border-color stroke-2"
                            src={item?.image} alt=""/>
                          </div>
                        <div className="bg-slate-100 text-slate-600 shadow-md rounded-lg  border p-5">
                              <p className="font-semibold text-justify">{item?.message}</p>
                              <p className="my-3 text-sm">— {item?.name}</p>
                              <p className="text-xs">{item?.location}</p>
                        </div>
                    </div>
                  ))
                }
              
              </Marquee>
            </div> 

           

        </Container>
    )
}

export default DonorTestimonial;


