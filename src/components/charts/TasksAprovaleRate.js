import ReactApexChart from 'react-apexcharts';

function TasksAprovaleRate() {
    const state = [{
        data: [
            {
                x: "Reviewed tasks",
                y: 71,
                fillColor: "#43BCCD"
            },
            {
                x: "Not reviewed tasks",
                y: 29,
                fillColor: "#6D32A5"
            }
        ]
    }];
    const options = {
        chart: {
            height: 350,
            type: 'bar',
            fontFamily: 'monospace',
            toolbar: {
                show: false
            }
        },
        colors: [
            "#43BCCD",
            "#6D32A5"
        ],
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#05081d"]
            }
        },
        xaxis: {
            categories: ['Reviewed tasks', 'Not reviewed tasks'],
            labels: {
                show: false,
            }
        },
        grid: {
            show: false,
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
    };
    return (
        <div className='flex bg-white rounded-3xl text-sm'>
            <div className='flex flex-col'>
                <div className='flex w-full justify-between pt-3 pl-5'>
                    <div className='flex items-center justify-between gap-3'>
                        <h3 className='text-[#A3A6B9]'>TASKS REVIEW RATE</h3>
                        <span className='flex items-center justify-between gap-2'>All
                            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
                        </span>
                    </div>
                </div>
                <div className='flex flex-col justify-center h-full gap-8'>
                    <div className='flex items-center justify between gap-3 pl-3'>
                        <div className='bg-[#43BCCD] w-3 h-3 rounded-full'></div>
                        <span className='font-bold'>Reviewed tasks (26)</span>
                    </div>
                    <div className='flex items-center justify between gap-3 pl-3'>
                        <div className='bg-[#6D32A5] w-3 h-3 rounded-full'></div>
                        <span className='font-bold'>Not reviewed tasks (18)</span>
                    </div>
                </div>
            </div>
            <ReactApexChart options={options} series={state} type="bar" height={378} width={350} />
        </div>
    )
}

export default TasksAprovaleRate;
