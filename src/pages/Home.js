import React from 'react'
import Charts from "../pages/Charts";
import "./Home.css"
import logo from '../images/logo.png'
import ME from '../images/profile.png'




const Home = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="" className="w-36 pt-10 pl-3" />
      </div>
      <div className="flex items-center pt-12 pl-2 ">
        <img src={ME} alt="profile-img" className="w-[60px] "/>
        <div className="flex-col ml-2 mt-3">
          <strong className="font-extrabold text-black">ADAM CHATILA</strong>
          <p className="ml-2 text-gray-400">@adam1234</p> 
        </div>
        <Charts/>
      </div>
    
    </div>
  )
}

export default Home