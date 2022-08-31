import { Link, Outlet } from "react-router-dom"
import "../styles.css"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import TokenContext from "../context/TokenContext"
import { useContext } from "react"

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}
export default function Layout() {
  const { token } = useContext(TokenContext)

  const [open, cycleOpen] = useCycle(false, true)

  return (
    <div className="bg-primary-400">
      <AnimatePresence>
        {open && (
          <motion.menu
            initial={{ width: 0 }}
            animate={{
              width: 260,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0 },
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.li whileHover={{ scale: 1.1 }} variants={itemVariants}>
                <Link className="text-white" to="/">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} variants={itemVariants}>
                <Link className="text-white" to="/orderHistory">
                  Order History
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} variants={itemVariants}>
                <Link className="text-white" to="/messages">
                  Messages
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} variants={itemVariants}>
                <Link className="text-white" to="/products">
                  Products
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} variants={itemVariants}>
                <Link className="text-white" to="/customers">
                  Customers
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} variants={itemVariants}>
                <Link className="text-white" to="/signin">
                  Signin
                </Link>
              </motion.li>
            </motion.div>
          </motion.menu>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
