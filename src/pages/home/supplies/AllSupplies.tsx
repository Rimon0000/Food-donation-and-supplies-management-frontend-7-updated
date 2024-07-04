/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { useGetAllSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import SuppliesCard from "./SuppliesCard";

export type TSupplyItem = {
  data: any;
  _id: string;
  image: string;
  title: string;
  category: string;
  quantity: number;
  description: string
}


const AllSupplies = () => {
  const { data } = useGetAllSuppliesQuery(undefined);
  // console.log(data?.data);

  return (
    <Container className="my-24 px-10">
      <h1 className="text-5xl text-center font-bold">Check out Our All Supplies!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data.map((item : TSupplyItem, index: string) => (
          <SuppliesCard key={index} item={item}></SuppliesCard>
        ))}
      </div>

    </Container>
  );
};

export default AllSupplies;
