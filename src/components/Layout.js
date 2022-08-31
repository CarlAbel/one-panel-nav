import { Link, Outlet } from "react-router-dom"
import "../styles.css"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import NavMenu from "./NavMenu"
// import TokenContext from "../context/TokenContext"
// import { useContext } from "react"

export default function Layout() {
  // const { token } = useContext(TokenContext)

  return (
    <div>
      <NavMenu />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
