import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/not-found/NotFound";
import Products from "./pages/products/computers/page";
import Customers from "./pages/customers/Customers";
const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="products/:category" element={<Products />} />
      <Route path="customers" element={<Customers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
