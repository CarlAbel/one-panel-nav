import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import OrderHistory from "./pages/OrderHistory";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
