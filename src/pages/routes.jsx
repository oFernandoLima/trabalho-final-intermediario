import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import DashboardLayoutBasic from "../components/Layout"
import { Products } from "./Products"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/administrador",
    element: <DashboardLayoutBasic />,
    children: [
      {
        index: true,
        element: <Products />,
      },
    ],
  },
])
