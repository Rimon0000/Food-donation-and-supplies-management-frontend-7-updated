import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "@/pages/home/Home";
import Register from "@/pages/authentication/Register";
import Login from "@/pages/authentication/Login";
import AllSupplies from "@/pages/home/supplies/AllSupplies";

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
          path: "/allSupplies",
          element: <AllSupplies></AllSupplies>,
        },
    ]
  },
]);

export default router;