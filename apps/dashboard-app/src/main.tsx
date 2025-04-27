import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Layouttt from "./layout/Layout.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Layouttt>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Layouttt>
  </BrowserRouter>
);
