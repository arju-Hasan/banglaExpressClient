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
// import PrivateRout from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcle from "../Pages/SendParcle/SendParcle";
import DashboardLayout from "../Layout/DashboardLayout";
import MyParcles from "../Pages/Dashboard/MyParcles";
import Payment from "../Pages/Dashboard/Payment";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";

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
    },
    {
      path: "/bearider",
      element: <PrivateRoute> <Rider /></PrivateRoute>,
      loader: () => fetch('/serviceCentars.json').then(res => res.json()),
    },
    {
      path: "/send-parcle",
      element: <PrivateRoute><SendParcle /></PrivateRoute>,
      loader: () => fetch('/serviceCentars.json').then(res => res.json()),
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
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path: 'my-parcles',
        Component: MyParcles ,
      },
      {
        path: 'payment/:parcleId',
        Component: Payment,
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess,
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled,
      }
    ]
  },
  {
    path: "/*",
    Component: Error404
  }
]);