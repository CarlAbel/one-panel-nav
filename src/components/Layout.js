import { Link, Outlet } from "react-router-dom"
import BurgerNav from "./BurgerNav"

export default function Layout() {
  return (
    <div>
      <menu>
        <li>
          <Link className="text-white" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/signin">
            Signin
          </Link>
        </li>
      </menu>
      <BurgerNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
