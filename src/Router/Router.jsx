import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import Error404 from "../Pages/Error404/Error404";

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
    path: "/*",
    Component: Error404
  }
]);