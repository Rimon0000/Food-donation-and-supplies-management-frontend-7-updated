import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";


const MainLayout = () =>{
    return (
        <div>
            <Helmet>
              <title>Nogorful</title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout;