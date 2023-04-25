import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import VerifyEmail from "./pages/register/VerifyEmail";
import Dashboard from "./pages/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import { PrivateRoutes } from "./components/private-routes/PrivateRoutes";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* private routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard></Dashboard>
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/categories"
            element={
              <PrivateRoutes>
                <Categories></Categories>
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <PrivateRoutes>
                <Products></Products>
              </PrivateRoutes>
            }
          ></Route>
          {/* public Routes */}
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/admin/verify-email"
            element={<VerifyEmail></VerifyEmail>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
