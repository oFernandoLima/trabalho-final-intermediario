import { createBrowserRouter } from "react-router-dom"
import DashboardLayoutBasic from "../components/Layout"
import { Home, SignIn, Products } from "@pages"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const ValidateReplace = () => {
  const userLogged = localStorage.getItem("App:user") || null

  if (userLogged) {
    return <DashboardLayoutBasic />
  } else {
    return <Navigate to="/sign-in" replace />
  }
}

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
    element: <ValidateReplace />,
    children: [
      {
        index: true,
        element: <Products />,
      },
    ],
  },
])
