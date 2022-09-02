import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'


const BarChart = () => {
  const [state,setState] = useState({
    options: {
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return Number(val).toLocaleString() + "$";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: [
          "Jun2022",
          "Jul 2022",
          "Aug 2022",
          "Sep 2022",
          "Oct 2022",
          "Dec 2022"
        ],
        position: "bottom",
        labels: {
          offsetY: 0
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs_: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return Number(val).toLocaleString() + "€";
          }
        }
      },
      title: {
        floating: true,
        offsetY: 0,
        align: "center",
        style: {
          color: "#444"
        }
      },
      chart: {
        animations: {
          enabled: false
        }
      }
    },
    series: [
      {
        name: "Chiffre d'affaires",
        data: [8976, 12987, 9853, 10986, 3571]
      }
    ]
  })
  setTimeout(() => {
    this.setState({
      series: [
        {
          name: "Chiffre d'affaires",
          data: [8976, 12987, 9853, 67, 3571]
        }
      ]
    });
  }, 4000);

  
  return (
    <div>
      <h1 className="text-center mt-6 font-bold text-white text-xl">Profits</h1>
      <div className="row">
        <div className="col-4">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height="300"
        />
        </div>
      </div>
    </div>
  )
}

export default BarChart