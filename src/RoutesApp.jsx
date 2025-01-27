import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import DashboardLayoutBasic from "./components/Layout"
import { Products } from "./pages/Products"

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/administrador" />} />

        <Route path="/administrador" element={<DashboardLayoutBasic />}>
          <Route path="/administrador/produtos" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
