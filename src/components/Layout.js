import { Outlet } from "react-router-dom";
import BurgerNav from "./BurgerNav";

export default function Layout() {
  return (
    <div>
      <main>
        <BurgerNav />
        <Outlet />
      </main>
    </div>
  );
}
