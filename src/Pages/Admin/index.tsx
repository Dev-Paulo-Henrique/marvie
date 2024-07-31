// import { Footer } from "../../components/Footer";
// import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { Dashboard } from "../Dashboard";
import { Orders } from "../Orders";
import { Products } from "../Products";
import { Customers } from "../Customers";
import { AddCustomer } from "../Customers/AddCustomer";
import { Profile } from "../Customers/Profile";
import { AddProduct } from "../Products/AddProduct";

import { AuthContextProvider } from "../../contexts/AuthContext";

export function Admin() {
  return (
    <AuthContextProvider>
      <div className="d-flex">
        <Sidebar />
        <div
          className="p-4 w-100"
          style={{
            marginLeft: "280px",
            background: "#f7f7f8",
            height: "100vh",
          }}
        >
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="products/new" element={<AddProduct />} />
            <Route path="customers" element={<Customers />} />
            <Route path="customers/:userId" element={<Profile />} />
            <Route path="customers/new" element={<AddCustomer />} />
            {/* <Route path="logout" element={<Logout />} /> */}
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}
