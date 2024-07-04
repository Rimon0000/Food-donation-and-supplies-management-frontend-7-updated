import Container from "@/components/Container";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import SuppliesCard from "./SuppliesCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TSupplyItem } from "./AllSupplies";

const Supplies = () => {
  const { data } = useGetSuppliesQuery(undefined);
  // console.log(data?.data);

  return (
    <Container className="my-16 px-10">
      <h1 className="text-5xl text-center font-bold my-2">Our Supplies</h1>
      <p className="text-center font-semibold ">
        This are some of Our Recent Activities
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.data.map((item: TSupplyItem, index: string) => (
          <SuppliesCard key={index} item={item}></SuppliesCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={`/allSupplies`}><Button>All Supplies</Button></Link>
      </div>
    </Container>
  );
};

export default Supplies;
