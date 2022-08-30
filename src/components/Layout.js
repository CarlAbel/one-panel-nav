import { Outlet } from "react-router-dom";
import BurgerNav from "./BurgerNav";

export default function Layout() {
  return (
    <div>
      <BurgerNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
