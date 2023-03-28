import ReactApexChart from 'react-apexcharts';

function ComplationRate() {
  const state= [
    {
        name: "Complated on time",
        data: [
            { x: "TASKS", y: 5 },
            { x: "KNOWLEDGE TRANSEFER", y: 4 },
            { x: "PRODUCTION PARALLEL", y: 3 },
            { x: "LIVE EXECUTION", y: 1 }
        ]
    },
    {
        name: "Complated over due date",
        data: [
            { x: "TASKS", y: 1.5 },
            { x: "KNOWLEDGE TRANSEFER", y: 3 },
            { x: "PRODUCTION PARALLEL", y: 2 },
            { x: "LIVE EXECUTION", y: 0.5 }
        ]
    },
    {
        name: "Not complated",
        data: [
            { x: "TASKS", y: 1 },
            { x: "KNOWLEDGE TRANSEFER", y: 0.5 },
            { x: "PRODUCTION PARALLEL", y: 4 },
            { x: "LIVE EXECUTION", y: 5 }
        ]
    }
];

  const options = {
    chart: {
        fontFamily: 'monospace',
        background: 'white',
        borderRadius: 20,
        toolbar: {
            show: false
        },
        type: "bar",
    },
    plotOptions: {
        bar: {
            borderRadius: 20
        },
    },
    colors: [
        "#43BCCD",
        "#6D32A5",
        "#F53361"
    ],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 15,
        colors: ['transparent']
    },
    grid: {
        padding: {
            right: 25,
            left: 15,
            top: 25
        }
    },
    legend: {
        show: false,
    },
    yaxis: {
        tickAmount: 3,
        max: 6,
    }
}
  return (
    <div className='bg-white rounded-3xl'>
      <div className='text-sm flex w-full justify-between p-3'>
        <div className='flex items-center justify-between gap-3'>
          <h3 className='text-[#A3A6B9] '>COMPLETATION RATE</h3>
          <span className='flex items-center justify-between gap-2'>All
            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
          </span>
          <span>|</span>
          <span className='flex items-center justify-between gap-2'>Current state
            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
          </span>
        </div>
        <div className='flex items-center justify between gap-5'>
          <div className='flex items-center justify between gap-2'>
            <div className='bg-[#43BCCD] w-3 h-3 rounded-full'></div>
            <span>Completed on time</span>
          </div>
          <div className='flex items-center justify between gap-2'>
            <div className='bg-[#6D32A5] w-3 h-3 rounded-full'></div>
            <span>Completed over due date</span>
          </div>
          <div className='flex items-center justify between gap-2'>
            <div className='bg-[#F53361] w-3 h-3 rounded-full'></div>
            <span>Not complated</span>
          </div>
        </div>
      </div>
      <ReactApexChart options={options} series={state} type="bar" height={378} width={960} />
    </div>
  )
}

export default ComplationRate;
