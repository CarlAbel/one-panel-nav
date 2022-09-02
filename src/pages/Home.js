import React from "react"

import logo from "../images/logo.png"
import ME from "../images/profile.png"
import history from "../images/history.png"
import add from "../images/add.png"
import product from "../images/product.png"
import customers from "../images/customer.png"
import BarChart from "./Charts/BarChart"
import DoughnotChart from "./Charts/DoughnotChart"
import LineChart from "./Charts/LineChart"

const Home = () => {
  return (
    <div className="bg-primary-100">
      <div>
        <img src={logo} alt="" className="w-40 pt-10 pl-3" />
      </div>
      <div className="flex items-center pt-8 pl-2 ">
        <img src={ME} alt="profile-img" className="w-[44px] " />
        <div className="flex-col ml-2 mt-3">
          <strong className="font-bold text-black text-sm">ADAM CHATILA</strong>
          <p className="ml-2 text-gray-400 text-xs">@adam1234</p>
        </div>
      </div>
      <div>
        <BarChart />
        <DoughnotChart />
        <LineChart />
      </div>

      <div className=" justify-center">
        <h1 className=" text-white font-extrabold text-center pt-10 pb-10 text-xl	 ">
          Setting Management
        </h1>
        <div className="flex justify-center gap-12">
          <div className="transform transition duration-500 hover:scale-150">
            <a href="OrderHistory">
              <img src={history} alt="" className="w-28" />
              <h2 className="text-center">History</h2>
            </a>
          </div>
          <div className="transform transition duration-500 hover:scale-150">
            <a href="#"></a>
            <img src={add} alt="" className="w-28" />
            <h2 className="text-center">Add To Cart</h2>
          </div>
        </div>
        <div className="flex justify-center gap-12 mt-6">
          <a href="Products">
            <div className="transform transition duration-500 hover:scale-150">
              <img src={product} alt="" className="w-28" />
              <h2 className="text-center">Products</h2>
            </div>
          </a>
          <div className="transform transition duration-500 hover:scale-150">
            <a href="Customers">
              <img src={customers} alt="" className="w-28" />
              <h2 className="text-center">Customers</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
