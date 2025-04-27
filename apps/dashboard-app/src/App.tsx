import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/about/About";
import NotFound from "./pages/not-found/NotFound";
import Laptops from "./pages/products/computers/laptops/Laptops";
import Desktops from "./pages/products/computers/desktops/Desktops";
import Customers from "./pages/customers/Customers";
const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="about" element={<About />} />
      <Route path="products/desktops" element={<Desktops />} />
      <Route path="products/laptops" element={<Laptops />} />
      <Route path="customers" element={<Customers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
