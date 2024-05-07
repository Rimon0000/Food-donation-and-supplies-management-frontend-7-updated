import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger,} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { motion } from "framer-motion";


import { Moon, Sun } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "../provider/ThemeProvider";


//for animation
const navbarAnimation = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};


const Navbar = () => {
  const { setTheme } = useTheme()

  const currentUser = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch()

  //handle logout
  const handleLogout = () =>{
    dispatch(logout())
  }



  return (
    <header className="bg-slate-300 flex place-content-center py-2">
      <nav className="w-full h-full max-w-[1260px] px-[20px] mx-auto flex gap-1 justify-between items-center">
        <motion.div className="flex gap-3 justify-center items-center" variants={navbarAnimation}  initial="initial"  animate="animate">
          <Link to="/">
            <img
              className="w-12 h-12 rounded-lg lg:ml-5"
              src="https://i.ibb.co/MsmBMms/logo.jpg"
              alt=""
            />
          </Link>
          <a className="font-bold text-xl">Nogorful</a>
        </motion.div>
        <NavigationMenu className="lg:hidden md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Menu></Menu>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.ul className="font-semibold px-2 w-[107px]" variants={navbarAnimation}  initial="initial"  animate="animate">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/allSupplies">All Supplies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                </motion.ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <motion.div className="hidden lg:block md:block" variants={navbarAnimation}  initial="initial"  animate="animate">
          <ul className="flex gap-3 font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allSupplies">All Supplies</NavLink>
            {currentUser && <NavLink to="/dashboard">Dashboard</NavLink>}
          </ul>
        </motion.div>

        <motion.div className="flex gap-2 justify-center items-center"
         variants={navbarAnimation}  initial="initial"  animate="animate">
          <NavLink to={currentUser ? "/" : "/login"}>
            <Button onClick={handleLogout}>{currentUser ? "Logout" : "Login"}</Button>
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="">
                <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
