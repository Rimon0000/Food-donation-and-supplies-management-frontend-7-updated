import Container from "@/components/Container";
import { useGetAllSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import SuppliesCard from "./SuppliesCard";

const AllSupplies = () => {
  const { data } = useGetAllSuppliesQuery(undefined);
  // console.log(data?.data);

  return (
    <Container className="my-10 px-10">
      <h1 className="text-5xl text-center font-bold my-2">Check out Our All Supplies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data.map((item, index) => (
          <SuppliesCard key={index} item={item}></SuppliesCard>
        ))}
      </div>
    </Container>
  );
};

export default AllSupplies;
