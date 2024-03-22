import Container from "@/components/Container";
import Marquee from "react-fast-marquee";


const DonorTestimonial = () =>{

    return (
        <Container className="my-20">
            <h1 className="text-center text-6xl font-bold">Our Top Donor</h1>

            <div className="grid mt-10 ">
              <Marquee className="text-danger h-[350px] border rounded-lg" speed={60}>
              <div className="w-80 relative">
                  <div className="flex place-content-center">
                    <img className="z-10  p-1 max-h-[150px] max-w-[150px] rounded-full border-2 image-border-color stroke-2"
                      src="https://i.ibb.co/D5ns9Yc/women.jpg" alt=""/>
                    </div>
                  <div className="absolute h-[266px] top-[50%] pt-28   bg-slate-100 shadow-md rounded-lg  border p-5">
                        <p className="font-semibold text-justify">"Contributing is like finding a rare gem. Their gratitude, the sparkling facets of human connection."</p>
                        <p className="my-3 text-sm">— Shabnam Begum</p>
                        <p className="text-xs">Donor, Chattagram</p>
                  </div>
              </div>
              <div className="w-80 relative ml-24">
                  <div className="flex place-content-center">
                    <img className="z-10  p-1 max-h-[150px] max-w-[150px] rounded-full border-2 image-border-color stroke-2"
                      src="https://i.ibb.co/qJBdkW9/four.jpg" alt=""/>
                    </div>
                  <div className="absolute h-[266px] top-[50%] pt-28   bg-slate-100 shadow-md rounded-lg  border p-5">
                        <p className="font-semibold text-justify">"Contributing essentials fills me with warmth. Their smiles, a priceless currency of gratitude."</p>
                        <p className="my-3 text-sm">— Rihan Ahmed</p>
                        <p className="text-xs">Donor, Bandharban</p>
                  </div>
              </div>
              <div className="w-80 relative ml-24">
                  <div className="flex place-content-center">
                    <img className="z-10  p-1 max-h-[150px] max-w-[150px] rounded-full border-2 image-border-color stroke-2"
                      src="https://i.ibb.co/5rScbGW/one.jpg" alt=""/>
                    </div>
                  <div className="absolute h-[266px] top-[50%] pt-28   bg-slate-100 shadow-md rounded-lg  border p-5">
                        <p className="font-semibold text-justify">"Supporting creates a tapestry of happiness. Their gratitude, the threads weaving our shared story."</p>
                        <p className="my-3 text-sm">— Nafisa Chowdhury</p>
                        <p className="text-xs">Donor, Khulna</p>
                  </div>
              </div>
              <div className="w-80 relative ml-24">
                  <div className="flex place-content-center">
                    <img className="z-10  p-1 max-h-[150px] max-w-[150px] rounded-full border-2 image-border-color stroke-2"
                      src="https://i.ibb.co/k69syzX/six.jpg" alt=""/>
                    </div>
                  <div className="absolute h-[266px] top-[50%] pt-28   bg-slate-100 shadow-md rounded-lg  border p-5">
                        <p className="font-semibold text-justify">"Donating brings joy. Thankful faces remind me of our shared impact."</p>
                        <p className="my-3 text-sm">— Mahmud Rahman</p>
                        <p className="text-xs">Donor, Comilla</p>
                  </div>
              </div>
              <div className="w-80 relative ml-24">
                  <div className="flex place-content-center">
                    <img className="z-10  p-1 max-h-[150px] max-w-[150px] rounded-full border-2 image-border-color stroke-2"
                      src="https://i.ibb.co/bgMKZD5/two.jpg" alt=""/>
                    </div>
                  <div className="absolute h-[266px] top-[50%] pt-28   bg-slate-100 shadow-md rounded-lg  border p-5">
                        <p className="font-semibold text-justify">"Giving essentials brings happiness. Gratitude shows our impact."</p>
                        <p className="my-3 text-sm">— Mahira Chowdhury</p>
                        <p className="text-xs">Donor, Noakhali</p>
                  </div>
              </div>
              <div className="w-80 relative mx-24">
                  <div className="flex place-content-center">
                    <img className="z-10  p-1 max-h-[150px] max-w-[150px] rounded-full border-2 image-border-color stroke-2"
                      src="https://i.ibb.co/jHVBkK7/images-6.jpg" alt=""/>
                    </div>
                  <div className="absolute h-[266px]  top-[50%] pt-28   bg-slate-100 shadow-md rounded-lg  border p-5">
                        <p className="font-semibold text-justify">"I find a canvas for compassion. Their gratitude paints the masterpiece of shared humanity."</p>
                        <p className="my-3 text-sm">— Reyaan Ahmed</p>
                        <p className="text-xs">Donor, Dhaka</p>
                  </div>
              </div>
              </Marquee>
            </div>

           

        </Container>
    )
}

export default DonorTestimonial;