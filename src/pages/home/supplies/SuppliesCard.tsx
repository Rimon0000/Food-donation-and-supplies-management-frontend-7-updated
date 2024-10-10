import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TSupplyItem } from "./AllSupplies";
import { Heart } from "lucide-react";

const SuppliesCard = ({item}: {item: TSupplyItem}) =>{
    const {_id, image, title, category, quantity} = item;

    return (
        <div className=" shadow-md rounded-lg  border-2 p-5 mt-10" data-aos="fade-up" data-aos-duration="400">
            <div className="">
              <img className=" rounded-lg hover:scale-110 transition-all duration-300"
                src={image} alt=""/>
            </div>
            <div className="mt-4">
                <h1 className="font-bold text-slate-950 text-xl transition-colors duration-300 transform hover:underline opacity-90"> <span>{title}</span></h1>
                <p className="my-3 font-semibold">Category: <span className="font-medium">{category}</span></p>
                <div className="flex justify-between items-center mb-4">
                    <p className="font-semibold">Quantity: <span className="font-medium">{quantity}</span></p>
                    <div className="border p-1 rounded-full">
                    <Heart></Heart>
                    </div>
                </div>
                <Link className="w-full" to={`/supplies/${_id}`}><Button className="w-full rounded-3xl mt-1 hover:bg-green-700 hover:text-white">View Detail</Button></Link>
            </div>
        </div>
    )
}

export default SuppliesCard;