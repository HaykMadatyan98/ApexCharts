import ReactApexChart from 'react-apexcharts';

function TransitionChart() {
  const state = [{
      data: [{
        x: 'TASKS',
        y: "1",
        fillColor: "#1FC599"
      },
      {
        x: 'KNOWLEDGE TRANSEFER',
        y: "5",
        fillColor: "#43BCCD"
      },
      {
        x: 'PRODUCTION PARALLEL',
        y: "4",
        fillColor: "#6D32A5"
      },
      {
        x: 'LIVE EXECUTION',
        y: "3",
        fillColor: "#F53361"
      },
      {
        x: 'COMPLATED',
        y: "2",
        fillColor: "#F2A201"
      }
      ]
    }];
    const options = {
      chart: {
        height: 340,
        type: 'bar',
        background: 'white',
        borderRadius: 20,
        fontFamily: 'monospace',
        toolbar: {
          show: false
        }
      },
      colors: [
        "#4ecdc4",
        "#c7f464",
        "#81D4FA",
        "#fd6a6a",
        "#546E7A"
      ],
      plotOptions: {
        bar: {
          borderRadius: 12,
          columnWidth: 30
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        padding: {
          top: 25,
          left: 25,
          rigth: 25,
          bottom: 25
        }
      },
      yaxis: {
        tickAmount: 3,
        max: 6,
      }
    };

  return (

    <div className='bg-white rounded-3xl'>
      <div className='flex w-full justify-between pt-3 pl-5 text-sm'>
        <div className='flex items-center justify-between gap-3'>
          <h3 className='text-[#A3A6B9] '>TRANSITION STATE</h3>
          <span className='flex items-center justify-between gap-2'>All
            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
          </span>
          <span>|</span>
          <span className='flex items-center justify-between gap-2'>Current state
            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
          </span>
        </div>
      </div>
      <ReactApexChart options={options} series={state} type="bar" height={378} width={960} />
    </div>
  )
}

export default TransitionChart;
