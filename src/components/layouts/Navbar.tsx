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
    <header className="bg-gray-800 text-white mx-auto py-2 fixed top-0 left-0 right-0 z-10">
      <nav className="h-full max-w-[90%] px-[20px] mx-auto flex gap-1 justify-between items-center">
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
        <NavigationMenu className="lg:hidden ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Menu className="text-black"></Menu>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.ul className="font-semibold p-2 w-[134px]" variants={navbarAnimation}  initial="initial"  animate="animate">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/allSupplies">Supplies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">D-Leaderboard</NavLink>
                  </li>
                  <li>
                    <NavLink to="/community">Community</NavLink>
                  </li>
                  <li>
                    <NavLink to="/volunteer">Vol-Hub</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us">About</NavLink>
                  </li>
                </motion.ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <motion.div className="hidden lg:block " variants={navbarAnimation}  initial="initial"  animate="animate">
          <ul className="flex gap-3 font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allSupplies">Supplies</NavLink>
            {currentUser && <NavLink to="/dashboard">Dashboard</NavLink>}
            <NavLink to="/leaderboard">D-Leaderboard</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/volunteer">Vol-Hub</NavLink>
            <NavLink to="/about-us">About</NavLink>
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
                <Sun className="rotate-0 text-black scale-100 transition-all dark:-rotate-90 dark:scale-0" />
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
