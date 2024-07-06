import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Award, BadgeCheck, BellRing, CircleUserRound, LogOut, Moon, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "../provider/ThemeProvider";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";


const TopBar = () => {
  const { setTheme } = useTheme()
  const currentUser = useAppSelector(useCurrentUser)
  // console.log("current", currentUser);

    return (
        <div className="lg:flex justify-between p-3">
          <div className="">
            <h1 className="font-semibold text-2xl">Welcome Dear {currentUser?.name}</h1>
            <p>Here’s what’s happening with your activity today.</p>
          </div>

            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Search</Button>
            </div>
          
            <div>
              <Menubar className="h-[60px] border-none">
                <MenubarMenu>
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
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger><BellRing /></MenubarTrigger>
                  <MenubarContent className="p-4 max-w-[400px]">
                    <h1 className="text-2xl mb-2 font-semibold">Notifications</h1>
                    <hr />
                    <MenubarItem className="flex gap-1 mt-2">
                    <CircleUserRound className="h-[35px] w-[35px]"></CircleUserRound>
                    <div>
                      <p className="px-2 font-semibold">New Donation: <span className="font-normal"> $50 from John Doe. Check dashboard.</span></p>
                      <p className="pl-2 text-blue-900">11.22 AM</p>
                    </div> 
                    </MenubarItem>

                    <MenubarItem className="flex gap-1">
                    <Award className="h-[35px] w-[35px]"></Award>
                    <div>
                      <p className="px-2 font-semibold">Goal Achieved: <span className="font-normal"> $10,000 goal reached! Set new targets.</span></p>
                      <p className="pl-2 text-blue-900">2 hours age</p>
                    </div> 
                    </MenubarItem>

                    <MenubarItem className="flex gap-1">
                    <BadgeCheck className="h-[35px] w-[35px]"></BadgeCheck>
                    <div>
                      <p className="px-2 font-semibold">Monthly Summary:<span className="font-normal"> $5,000 from 100 donors. See report.</span></p>
                      <p className="pl-2 text-blue-900">6 hours age</p>
                    </div> 
                    </MenubarItem>
                    <MenubarItem className="mt-4">
                      <Button className="w-full">View All</Button> 
                    </MenubarItem>
                    

                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger>
                    <div className="flex gap-3">
                       <img className="h-[40px] w-[40px] rounded-full bg-slate-200" src="https://i.ibb.co/vqqBpX6/programmer.png" alt="" />
                       <div>
                          <h1>Name</h1>
                          <p>Title</p>
                       </div>
                    </div>
                  </MenubarTrigger>
                  <MenubarContent className="p-2">
                  <MenubarItem className="flex gap-3">
                    <CircleUserRound className="h-[25px] w-[25px]"></CircleUserRound>
                    <Link to="/dashboard/user-profile">
                      <p className="font-semibold">Profile</p>
                    </Link>
                  </MenubarItem>
                  <MenubarItem className="flex gap-3 mt-2">
                    <LogOut className="h-[25px] w-[25px]"></LogOut>
                    <p className="font-semibold">Logout</p>
                  </MenubarItem>
                  </MenubarContent>

                </MenubarMenu>
              </Menubar>
            </div>
     
            
        </div>
    );
};

export default TopBar;