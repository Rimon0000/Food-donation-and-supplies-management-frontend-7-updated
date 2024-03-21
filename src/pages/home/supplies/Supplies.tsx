import Container from "@/components/Container";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import SuppliesCard from "./SuppliesCard";

const Supplies = () => {
  const { data } = useGetSuppliesQuery(undefined);
  // console.log(data?.data);

  return (
    <Container className="my-20 px-10">
      <h1 className="text-6xl text-center font-bold my-2">Our Supplies</h1>
      <p className="text-center font-semibold text-slate-600">
        This are some of Our Recent Activities
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data.map((item, index) => (
          <SuppliesCard key={index} item={item}></SuppliesCard>
        ))}
      </div>
    </Container>
  );
};

export default Supplies;
