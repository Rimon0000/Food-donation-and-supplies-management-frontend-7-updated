/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { useGetAllSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import SuppliesCard from "./SuppliesCard";
import { Helmet } from "react-helmet";
import { FaRedo, FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { resetFilterAndSearch, selectFilter, selectSearchText, setFilter, setSearchText } from "@/redux/features/supplies/suppliesSlice";

export type TSupplyItem = {
  _id: string;
  image: string;
  title: string;
  category: string;
  quantity: number;
  description: string;
};

const AllSupplies = () => {
  const { data } = useGetAllSuppliesQuery(undefined);
  const dispatch = useAppDispatch();

  const filter = useAppSelector(selectFilter);
  const searchText = useAppSelector(selectSearchText);

  //handle filter
  const handleFilterByCategory = (e: any) => {
    dispatch(setFilter(e.target.value));
  };

  //handle reset
  const handleReset = () => {
    dispatch(resetFilterAndSearch());
  };

  //handle search
  const handleSearch = (e: any) => {
    dispatch(setSearchText(e.target.value));
  };

  // Apply search and filter
  const filteredSupplies = data?.data?.filter((item: TSupplyItem) => {
    return (
      item.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (filter ? item.category === filter : true)
    );
  });

  return (
    <Container className="mt-24 mb-20 px-10">
      <Helmet>
        <title>All Supplies</title>
      </Helmet>

      <div className="">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 bg-[#955E42] bg-opacity-5 p-4 rounded-xl">
          <div>
            <select
              onChange={handleFilterByCategory}
              name="category"
              value={filter}
              className="border border-[#955E42] py-1 px-4 rounded-full"
            >
              <option value="">All</option>
              <option value="Food">Food</option>
              <option value="Study Materials">Study Materials</option>
              <option value="Hygiene Products">Hygiene Products</option>
              <option value="Baby Essentials">Baby Essentials</option>
            </select>
          </div>

          <div className="flex p-1 overflow-hidden rounded-full">
            <input
              onChange={handleSearch}
              value={searchText}
              className="py-1 px-4 border border-r-0 border-[#955E42] rounded-l-full outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Post Title"
              aria-label="Enter Post Title"
            />
            <button className="px-4 font-medium border-y border-r border-[#955E42] text-white tracking-wider transition-colors duration-300 transform bg-gray-700 rounded-r-full hover:bg-gray-600">
              <FaSearch />
            </button>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 border border-[#955E42] font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-700 rounded-full hover:bg-gray-600 py-1"
          >
            <FaRedo /> <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSupplies?.map((item: TSupplyItem, index: string) => (
          <SuppliesCard key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default AllSupplies;
