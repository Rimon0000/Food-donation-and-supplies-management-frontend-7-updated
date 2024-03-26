import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger,} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = "";

  return (
    <header className="bg-slate-300 flex place-content-center py-2">
      <nav className="w-full h-full max-w-[1260px] px-[20px] mx-auto flex gap-1 justify-between items-center">
        <div className="flex gap-3 justify-center items-center">
          <Link to="/">
            <img
              className="w-12 h-12 rounded-lg lg:ml-5"
              src="https://i.ibb.co/MsmBMms/logo.jpg"
              alt=""
            />
          </Link>
          <a className="font-bold text-xl">Nogorful</a>
        </div>
        <NavigationMenu className="lg:hidden md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Menu></Menu>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="font-semibold px-2 w-[107px]">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/allSupplies">All Supplies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:block md:block">
          <ul className="flex gap-3 font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allSupplies">All Supplies</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </div>
        <div>
          <NavLink to={user ? "/logout" : "/login"}>
            <Button>{user ? "Logout" : "Login"}</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
