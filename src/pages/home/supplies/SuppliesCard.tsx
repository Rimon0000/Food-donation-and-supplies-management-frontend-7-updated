import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SuppliesCard = ({item}) =>{
    const {_id, image, name, category, quantity} = item;

    return (
        <div className="bg-slate-50 shadow-md rounded-lg  border-2 p-5 mt-10">
            <div className="">
              <img className=" rounded-lg"
                src={image} alt=""/>
            </div>
            <div className="mt-4">
                <h1 className="font-bold text-3xl"> <span className="text-green-900">{name}</span></h1>
                <div className="flex justify-between items-center my-5 font-semibold">
                    <p className="">Category: <span className="text-green-900">{category}</span></p>
                    <p>Quantity: <span className="text-green-900">{quantity}</span></p>
                </div>
                <Link to={`/supplies/${_id}`}><Button>View Detail</Button></Link>
            </div>
        </div>
    )
}

export default SuppliesCard;