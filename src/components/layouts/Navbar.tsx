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
    <header className="bg-slate-100 text-black  shadow-lg mx-auto py-5 fixed left-0 right-0 top-0 z-50">
      <nav className="h-full max-w-[90%] px-[20px] mx-auto flex gap-1 justify-between items-center">
        <motion.div className="flex gap-3 justify-center items-center" variants={navbarAnimation}  initial="initial"  animate="animate">
          <Link to="/">
            <img
              className="w-9 h-9 rounded-lg"
              src="https://i.ibb.co.com/80CcDm9/logo-1.webp"
              alt=""
            />
          </Link>
          <a className="font-bold text-3xl text-stone-600">Nogorful</a>
        </motion.div>
        <NavigationMenu className="lg:hidden ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Menu className="text-black bg-white"></Menu>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.ul className="font-semibold p-2 w-[134px]" variants={navbarAnimation}  initial="initial"  animate="animate">
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/allSupplies">Supplies</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/leaderboard">Leaderboard</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/community">Community</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/volunteer">Vol-Hub</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/about-us">About</NavLink>
                  </li>
                </motion.ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <motion.div className="hidden lg:block " variants={navbarAnimation}  initial="initial"  animate="animate">
          <ul className="flex gap-5 font-semibold">
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/">Home</NavLink>
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/allSupplies">Supplies</NavLink>
            {currentUser && <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/dashboard">Dashboard</NavLink>}
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/leaderboard">Leaderboard</NavLink>
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/community">Community</NavLink>
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/volunteer">Vol-Hub</NavLink>
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-red-400 ${  isActive ? 'text-red-400 underline underline-offset-8' : ''}`} to="/about-us">About</NavLink>
          </ul>
        </motion.div>

        <motion.div className="flex gap-2 justify-center items-center"
         variants={navbarAnimation}  initial="initial"  animate="animate">
          <NavLink to={currentUser ? "/" : "/login"}>
            <Button className="rounded-3xl font-bold text-white space-x-3 px-5" variant="destructive" onClick={handleLogout}>{currentUser ? "LOGOUT" : "LOGIN"}</Button>
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="">
                <Sun className="rotate-0 text-black scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute text-white  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
