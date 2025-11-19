import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import Error404 from "../Pages/Error404/Error404";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ForgotPassword from "../Pages/Auth/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:
    [
     {
        index:true,
       Component: Home,
    },
    {
      path: '/Coverage',
      Component: Coverage,
      loader: () => fetch('/serviceCentars.json').then(res => res.json()),
    },
    {
      path: "/AboutUs",
      Component: AboutUs,
    },
    {
      path: "/services",
      Component : Services,
    }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children:[
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "Forgot",
        Component: ForgotPassword,
      }
    ]
  },
  {
    path: "/*",
    Component: Error404
  }
]);