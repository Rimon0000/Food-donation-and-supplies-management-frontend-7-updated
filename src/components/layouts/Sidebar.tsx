import { cn } from "@/lib/utils";
import { Home, LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

type TSidebarProps = {
  isAdmin: boolean;
}

const Sidebar: React.FC<TSidebarProps> = ({isAdmin}) => {
  return (
    <aside className="bg-slate-900 text-slate-950 col-span-2 h-full sticky py-5">
      <nav className="flex flex-col gap-2 px-4 lg:px-5 py-1">

        {
          isAdmin ? (
            <>
              <NavLink
                to="/dashboard/supplies"
                className={({ isActive }) =>
                  cn(
                    "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
                    {
                      "text-white bg-black": isActive,
                    }
                  )
                }
              >
                <LayoutDashboard className="shrink-0"></LayoutDashboard>
                <span className="truncate">All Supplies</span>
              </NavLink>
              <NavLink
                to="/dashboard/create-supply"
                className={({ isActive }) =>
                  cn(
                    "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
                    {
                      "text-white bg-black": isActive,
                    }
                  )
                }
              >
                <LayoutDashboard className="shrink-0"></LayoutDashboard>
                <span className="truncate">Add Supply</span>
              </NavLink>
              <NavLink
                to="/dashboard/create-testimonial"
                className={({ isActive }) =>
                  cn(
                    "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
                    {
                      "text-white bg-black": isActive,
                    }
                  )
                }
              >
                <LayoutDashboard className="shrink-0"></LayoutDashboard>
                <span className="truncate">Add Testimonial</span>
              </NavLink>
              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  cn(
                    "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
                    {
                      "text-white bg-black": isActive,
                    }
                  )
                }
              >
                <LayoutDashboard className="shrink-0"></LayoutDashboard>
                <span className="truncate">Manage Users</span>
              </NavLink>
            </>

          ): (
            <>
              <NavLink
              to="/dashboard/supplies"
              className={({ isActive }) =>
                cn(
                  "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
                  {
                    "text-white bg-black": isActive,
                  }
                )
              }
              >
                <LayoutDashboard className="shrink-0"></LayoutDashboard>
                <span className="truncate">All Supplies</span>
              </NavLink>
            </>

          )
        }
        

      

        
        <div className="divider bg-red-500 border-2 my-3"></div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
              {
                "text-white bg-black": isActive,
              }
            )
          }
        >
          <Home className="shrink-0"></Home>
          <span className="truncate">Home</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
