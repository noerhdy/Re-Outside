import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import ProductPage from "../../pages/product/ProductPage";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="Product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
