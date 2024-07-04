import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TSupplyItem } from "./AllSupplies";
import { Heart } from "lucide-react";

const SuppliesCard = ({item}: {item: TSupplyItem}) =>{
    const {_id, image, title, category, quantity} = item;

    return (
        <div className=" shadow-md rounded-lg  border-2 p-5 mt-10" data-aos="fade-up" data-aos-duration="500">
            <div className="">
              <img className=" rounded-lg"
                src={image} alt=""/>
            </div>
            <div className="mt-4">
                <h1 className="font-bold text-xl"> <span>{title}</span></h1>
                <p className="my-4">Category: <span>{category}</span></p>
                <div className="flex justify-between items-center mb-4">
                    <p>Quantity: <span>{quantity}</span></p>
                    <Heart />
                </div>
                <Link to={`/supplies/${_id}`}><Button>View Detail</Button></Link>
            </div>
        </div>
    )
}

export default SuppliesCard;