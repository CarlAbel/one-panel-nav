import React from "react";
import BurgerNav from "./components/BurgerNav";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BurgerNav>
        <Home />
      </BurgerNav>
    </>
  );
}

export default App;
