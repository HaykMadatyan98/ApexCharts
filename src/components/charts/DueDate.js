import ReactApexChart from 'react-apexcharts';

function DueDate() {

  const state = [3, 2]
  const options = {
    chart: {
      type: 'donut',
      fontFamily: 'monospace',
    },
    colors: [
      "#43BCCD",
      "#6D32A5"
    ],
    legend: {
      position: "left",
      fontSize: 13,
      fontWeight: 800,
      offsetY: 114,
      offsetX: 10,
      itemMargin: {
        "vertical": 17
      }
    },
    dataLabels: {
      enabled: false
    },
    labels: [`Complated due date (${state[0]})`, `Nearing due date (${state[1]})`]
  };

  return (
    <div className='bg-white rounded-3xl'>
      <div className='flex w-full justify-between pt-3 pl-5'>
        <div className='flex items-center justify-between gap-3 text-sm'>
          <h3 className='text-[#A3A6B9]'>DUE DATE</h3>
          <span className=' flex items-center justify-between gap-2'>All
            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
          </span>
        </div>
      </div>
      <ReactApexChart options={options} series={state} type="donut" width={580} height={300} />
    </div>
  )
}

export default DueDate;
