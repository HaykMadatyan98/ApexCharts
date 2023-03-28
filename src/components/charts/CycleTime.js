import ReactApexChart from 'react-apexcharts';

function CycleTime() {
  const state = [
    {
      name: "Average Cycle Time",
      data: [12, 5, 12, 18]
    },
    {
      name: "Agreet TAT",
      data: [9, 10, 19, 10]
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      background: 'white',
      fontFamily: 'circular',
      toolbar: {
        show: false
      }
    },
    grid: {
      padding: {
        top: 25,
        left: 150,
        rigth: 150,
        bottom: 25
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [
      "#43BCCD",
      "#6D32A5"
    ],
    markers: {
      size: 12,
      fillOpacity: 1,
      strokeWidth: 5,
      colors: '#fff',
      strokeColors: [
        "#43BCCD",
        "#6D32A5"
      ]
    },
    legend: {
      show: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      categories: ['TASKS APROVING', 'KNOWLEDGE TRANSEFER', 'PRODUCTION PARALLEL', 'LIVE EXECUTION'],
    },
    yaxis: {
      tickAmount: 3,
      min: 0,
      max: 30,
    }
  };

  return (
    <div className='bg-white rounded-3xl'>
      <div className='flex w-full justify-between p-3 text-sm'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='text-[#A3A6B9]'>CYCLE TIME</h3>
            <span className='flex items-center justify-between gap-2'>All
              <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
            </span>
            <span>|</span>
            <span className='flex items-center justify-between gap-2'>Current state
              <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
            </span>
          </div>
          <div className='flex items-center justify-between gap-20'>
            <div className='flex items-center justify between gap-7'>
              <div className='bg-[#43BCCD] w-3 h-3 rounded-full'></div>
              <span className='font-bold'>Average Cycle time</span>
            </div>
            <div className='flex items-center justify between gap-7'>
              <div className='bg-[#6D32A5] w-3 h-3 rounded-full'></div>
              <span className='font-bold'>Agreed TAT</span>
            </div>
          </div>
          <div className='flex items-center justify-between gap-16'>
            <div>
              <h3 className='text-[#A3A6B9]'>TASKS APROVING</h3>
              <span className='font-bold'>12 days (avg.)</span>
            </div>
            <div>
              <h3 className='text-[#A3A6B9]'>KNOWLEDGE</h3>
              <span className='font-bold'>4 days (avg.)</span>
            </div>
            <div>
              <h3 className='text-[#A3A6B9]'>PRODUCTION</h3>
              <span className='font-bold'>13 days (avg.)</span>
            </div>
            <div>
              <h3 className='text-[#A3A6B9]'>LIVE</h3>
              <span className='font-bold'>8 days (avg.)</span>
            </div>
            <div>
              <h3 className='text-[#A3A6B9]'>TOTAL</h3>
              <span className='font-bold'>37 days (avg.)</span>
            </div>
          </div>
        </div>
      </div>
      <ReactApexChart options={options} series={state} type="line" height={350} width={1570} />
    </div>
  )
}

export default CycleTime;
