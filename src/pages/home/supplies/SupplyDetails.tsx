import Container from "@/components/Container";
import DonationModal from "@/components/donation/DonationModal";
import { useGetSingleSupplyQuery } from "@/redux/features/supplies/suppliesApi";
import {useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const SupplyDetails = () => {
  const { id } = useParams();
  const { data: supply } = useGetSingleSupplyQuery(id);

  return (
    <Container className="mt-28 pt-2 mb-12 grid place-content-center w-5/6">
      <Helmet>
        <title>Nogorful - Supply Details</title>
      </Helmet>
      <div className="text-center mb-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-2 border-b-2 pb-2 border-[#8cbd51]">
            Make a Difference as a Donor
          </h2>
          <p className="w-5/6 text-justify text-sm lg:text-base opacity-80">
            Your generosity can change lives! By donating to our cause, you have the power 
            to create a lasting impact on communities in need. Your contributions will support 
            vital projects, from providing essential healthcare and education to fostering 
            sustainable development. Every donation, helps us drive positive 
            change and bring hope to those who need it most. Join us in making the world a 
            better place by becoming a donor today and leave a legacy of kindness for a 
            brighter tomorrow!
          </p>
        </div>
      </div>


      <div className=" shadow-lg rounded-lg  border-2 grid grid-cols-1 md:grid-cools-2 lg:grid-cols-2 gap-8 p-5">
        <div>
          <img className=" rounded-lg hover:scale-105 duration-300" src={supply?.data?.image} alt="" />
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-3xl hover:underline hover:underline-offset-8">
            {supply?.data?.title}
          </h1>
          <div>
            <p className="font-semibold  my-3">
              Category <span className="px-2">/</span>
              <span className="text-base font-normal text-slate-500">
                {supply?.data?.category}
              </span>
            </p>
            <p className="font-semibold ">
              Quantity <span className="px-2">/</span>
              <span className="text-base font-normal text-slate-500">
                {supply?.data?.quantity}
              </span>
            </p>
            <p className="font-semibold  mt-3">
              Description <span className="px-2">/</span>
              <span className="text-base font-normal text-slate-500">
                {supply?.data?.description}
              </span>
            </p>
            <DonationModal supply={supply}></DonationModal>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SupplyDetails;
