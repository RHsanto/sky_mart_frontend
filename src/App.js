import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ProductPage from "./components/Home/ProductPage";
import ProductDetails from "./components/Home/ProductDetails";
import Login from "./components/Home/Authentication/Login";
import Registration from "./components/Home/Authentication/Registration";
import Navbar from "./components/Home/Common/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import ShoppingCart from "./components/Home/ShoppingCart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              {" "}
              <ProductPage />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              {" "}
              <ProductDetails />{" "}
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <ShoppingCart />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
