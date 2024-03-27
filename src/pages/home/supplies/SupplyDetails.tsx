import Container from "@/components/Container";
import DonationModal from "@/components/donation/DonationModal";
import { useGetSingleSupplyQuery } from "@/redux/features/supplies/suppliesApi";
import { Link, useParams } from "react-router-dom";

const SupplyDetails = () => {
  const { id } = useParams();
  const { data: supply } = useGetSingleSupplyQuery(id);

  return (
    <Container className="my-12 grid place-content-center w-4/5 lg:px-24">
      <div className=" bg-slate-50 shadow-md rounded-lg  border-2 grid grid-cols-1 md:grid-cools-2 lg:grid-cols-2 gap-8 p-5">
        <div>
          <img className=" rounded-lg" src={supply?.data?.image} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-3xl text-color">
            {supply?.data?.name}
          </h1>
          <div>
            <p className="font-semibold text-color my-3">
              Category <span className="px-2">/</span>
              <span className="text-base font-normal text-slate-600">
                {supply?.data?.category}
              </span>
            </p>
            <p className="font-semibold text-color">
              Quantity <span className="px-2">/</span>
              <span className="text-base font-normal text-slate-600">
                {supply?.data?.quantity}
              </span>
            </p>
            <p className="font-semibold text-color my-3">
              Description <span className="px-2">/</span>
              <span className="text-base font-normal text-slate-600">
                {supply?.data?.description}
              </span>
            </p>
            <DonationModal></DonationModal>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SupplyDetails;
