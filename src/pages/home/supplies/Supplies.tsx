import Container from "@/components/Container";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import SuppliesCard from "./SuppliesCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TSupplyItem } from "./AllSupplies";
import Lottie from "lottie-react";
import emptyProduct from "../../../assets/animation/empty.json"

const Supplies = () => {
  const { data } = useGetSuppliesQuery(undefined);
  // console.log(data?.data);

  return (
    <Container className="my-16 px-6">
      <h1 className="text-5xl text-center font-bold my-2">Our Supplies</h1>
      <p className="text-center font-semibold lg:w-2/3 text-sm lg:text-base mx-auto ">
         Join us in our mission to empower lives through generosity and compassion—your support brings positive change to the world
      </p>
      {data?.data?.length ? (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.data.map((item: TSupplyItem, index: string) => (
          <SuppliesCard key={index} item={item}></SuppliesCard>
        ))}
        </div>
          <div className="text-center mt-7">
          <Link to={`/allSupplies`}><Button className="rounded-3xl py-6 px-5" data-aos="fade-up" data-aos-duration="400">All Supplies</Button></Link>
        </div>
      </div>
      ) : (
        <div className="flex items-center justify-center">
          <Lottie className="w-2/5" animationData={emptyProduct} />
        </div>
      )}
    </Container>
  );
};

export default Supplies;
