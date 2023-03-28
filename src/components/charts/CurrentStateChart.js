import ReactApexChart from 'react-apexcharts';

function CurrentStateChart() {
    const state = [
        {
            name: "Current state",
            data: [70]
        },
        {
            name: "Agreed timing",
            data: [15]
        },
        {
            name: "Time left",
            data: [15]
        }
    ];
    const options = {
        chart: {
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false
            },
            type: "bar"
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: "50%",
                borderRadius: 3,
                borderRadiusWhenStacked: 'all',
            },
        },
        colors: [
            "#43BCCD",
            "#6D32A5",
            "#F53361"
        ],
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false
        },
        legend: {
            fontSize: 14,
        },
        xaxis: {
            labels: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        }
    }

    return <ReactApexChart options={options} series={state} type="bar" height={100} width={440} />
}

export default CurrentStateChart;
