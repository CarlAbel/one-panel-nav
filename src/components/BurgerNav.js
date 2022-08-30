import "../styles.css";
import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Order History", to: "/orderHistory", id: 2 },
  { name: "Messages", to: "/messages", id: 3 },
  { name: "Products", to: "/products", id: 4 },
  { name: "Customers", to: "/customers", id: 5 },
  { name: "Sign In", to: "/signIn", id: 6 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

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
};

export default function BurgerNav() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.aside
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
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
      </div>
    </main>
  );
}
