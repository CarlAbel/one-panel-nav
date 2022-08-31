import React from 'react'
import { useState } from "react";
import { UserData } from '../Data'
import BarChart from '../components/BarChart'

const Charts = () => {
  const [userData, setUSserData] = useState({
    labels: UserData.map((data)=> data.year),
    datasets: [{
      label:"Company Gained",
      data: UserData.map((data)=> data.companyGain),
    }]
  })
  return (
    <BarChart chartData={userData} />
  )
}

export default Charts