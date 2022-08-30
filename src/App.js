import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import TokenContext from "./context/TokenContext";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import OrderHistory from "./pages/OrderHistory";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";

function App() {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/signIn" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
