import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'

const DoughnotChart = () => {
    const [state,setState] = useState(
        {
            series: [30, 55, 41, 17, 15],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                  align: 'center',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 369
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          }
    )
  return (
    
    <div id="chart">
        <h1 className="text-center mt-6 font-bold text-white text-xl mb-6 ">Visitors</h1>
    <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
  </div>
    
  )
}

export default DoughnotChart