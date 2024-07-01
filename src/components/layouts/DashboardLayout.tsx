import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = ()=>{
    const [isAdmin] = useAdmin();
    return (
        <div className="grid grid-cols-12">
            <Sidebar isAdmin={isAdmin}></Sidebar>
            <div className="col-span-10 h-full p-5">
            <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashboardLayout;