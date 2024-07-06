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
import PrivateRoute from "./PrivateRoute";
import DLeaderboard from "@/pages/leaderboard/DLeaderboard";
import Community from "@/pages/CommunityGraWall/Community";
import AddTestimonial from "@/pages/dashboard/AddTestimonial";
import VolunteerHub from "@/pages/volunteer/VolunteerHub";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import AboutUs from "@/pages/aboutUs/AboutUs";
import AdminRoute from "./AdminRoute";
import ManageUsers from "@/pages/dashboard/ManageUsers";
import AdminDashboard from "@/pages/dashboard/admin/AdminDashboard";
import DashboardSwitch from "@/pages/dashboard/DashboardSwitch";
import TopBar from "@/components/layouts/Topbar";
import UserProfile from "@/pages/dashboard/Userprofile/UserProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        {
          path: "/leaderboard",
          element: <DLeaderboard></DLeaderboard>
        },
        {
          path: "/community",
          element: <Community></Community>
        },
        {
          path: "/volunteer",
          element: <VolunteerHub></VolunteerHub>
        },
        {
          path: "/about-us",
          element: <AboutUs></AboutUs>
        },
    ]
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <PrivateRoute><DashboardSwitch></DashboardSwitch></PrivateRoute>
      },
      {
        path: "supplies",
        element: <AllSuppliesTabular></AllSuppliesTabular>
      },
      {
        path: "create-supply",
        element: <AddSupply></AddSupply>
      },
      {
        path: "create-testimonial",
        element: <AddTestimonial></AddTestimonial>
      },
      {
        path: "manage-users",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: "user-profile",
        element: <UserProfile/>
      },

    ]
  }
]);

export default router;