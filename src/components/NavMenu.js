import { Link } from "react-router-dom"
import "../styles.css"
import "../index.css"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import FeatherIcon from "feather-icons-react"
// import TokenContext from "../context/TokenContext"
// import { useContext } from "react"

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
export default function NavMenu() {
  // const { token } = useContext(TokenContext)

  const [open, cycleOpen] = useCycle(false, true)

  return (
    <div className="">
      <AnimatePresence>
        {open && (
          <motion.menu
            className="flex "
            initial={{ width: 0, height: 0 }}
            animate={{
              width: 260,
              height: "calc(60vh - 6rem)",
            }}
            exit={{
              width: 0,
              height: 0,
              transition: { delay: 0.7, duration: 0 },
            }}
            // className="fixed top-0 left-0"
          >
            <motion.div
              className="container shadow-xl"
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
                  Sign in
                </Link>
              </motion.li>
            </motion.div>
          </motion.menu>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button className="rounded-full" onClick={cycleOpen}>
          <FeatherIcon className="text-white" icon="align-right" />
        </button>
      </div>
    </div>
  )
}
