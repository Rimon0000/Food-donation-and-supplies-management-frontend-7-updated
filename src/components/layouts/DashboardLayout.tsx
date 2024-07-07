import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";

const DashboardLayout = ()=>{

    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-2 bg-slate-800 text-white text-center font-bold text-xl flex items-center justify-center">
                  <h1 className="truncate p-1">Nogorful</h1>
                </div>
                <div className="col-span-10 h-full">
                    <TopBar/>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-12">
                <Sidebar></Sidebar>
                <div className="col-span-10 h-full p-5">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;