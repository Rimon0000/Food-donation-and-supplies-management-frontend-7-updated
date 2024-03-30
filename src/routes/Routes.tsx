import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "@/pages/home/Home";
import Register from "@/pages/authentication/Register";
import Login from "@/pages/authentication/Login";
import AllSupplies from "@/pages/home/supplies/AllSupplies";
import SupplyDetails from "@/pages/home/supplies/SupplyDetails";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import AllSuppliesTabular from "@/pages/dashboard/AllSuppliesTabular";
import AddSupply from "@/pages/dashboard/AddSupply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/registration",
          element: <Register></Register>,
        },
        {
          path: "/supplies/:id",
          element: <SupplyDetails></SupplyDetails>,
        },
        {
          path: "/allSupplies",
          element: <AllSupplies></AllSupplies>,
        },
    ]
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>
      },
      {
        path: "supplies",
        element: <AllSuppliesTabular></AllSuppliesTabular>
      },
      {
        path: "create-supply",
        element: <AddSupply></AddSupply>
      }

    ]
  }
]);

export default router;