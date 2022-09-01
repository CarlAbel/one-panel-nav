import React from 'react'
import "./Home.css"
import logo from '../images/logo.png'
import ME from '../images/profile.png'
import BarChart from './Charts/BarChart'




const Home = () => {
  return (
    <div className="">
      <div>
        <img src={logo} alt="" className="w-36 pt-10 pl-3" />
      </div>
      <div className="flex items-center pt-12 pl-2 ">
        <img src={ME} alt="profile-img" className="w-[60px] "/>
        <div className="flex-col ml-2 mt-3">
          <strong className="font-extrabold text-black">ADAM CHATILA</strong>
          <p className="ml-2 text-gray-400">@adam1234</p> 
        </div>
      </div>
      <div>
        <BarChart/>
      </div>

      <div className="lex justify-center">
        <h1 className="flex justify-center  text-white font-extrabold pl-28 pt-10 ">Setting Management</h1>
        <div>
          <div><img src="" alt="" />helo</div>
          <div><img src="" alt="" /></div>
        </div>
        <div>
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
        </div>
      </div>
    
    </div>
  )
}

export default Home