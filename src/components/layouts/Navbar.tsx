import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";


const Navbar = () =>{
    const user = "";


    return (
        <header className=" bg-slate-300 flex place-content-center py-2">
            <nav className="w-full h-full max-w-[1260px] px-[20px] mx-auto flex gap-1 justify-between items-center">
                <div className="flex gap-3 justify-center items-center">
                    <Link to='/'>
                      <img className='w-12 h-12 rounded-lg lg:ml-5' src="https://i.ibb.co/MsmBMms/logo.jpg" alt='' />
                    </Link>
                    <a className='font-bold text-xl'>Nogorful</a>
                </div>
                <div>
                    {/* <Menu /> */}
                    <ul className="flex gap-3 font-semibold">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">All Supplies</NavLink>
                        <NavLink to="/">Dashboard</NavLink>
                    </ul>
                </div>
                <div>
                    {user ? 
                    <NavLink to="/admin/dashboard"><Button>Logout</Button></NavLink>:
                    <NavLink to="/login"><Button>Login</Button></NavLink>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;