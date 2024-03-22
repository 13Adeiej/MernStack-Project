import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function DomainDistributionChart({ domains }) {
    const domainCounts = {};

    domains.forEach(domain => {
        domainCounts[domain.name] = domainCounts[domain.name] ? domainCounts[domain.name] + 1 : 1;
    });

    const chartData = {
        labels: Object.keys(domainCounts),
        datasets: [{
            label: 'Domain Distribution',
            data: Object.values(domainCounts),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };
 
    const chartOptions = {
        scales: {
            xAxes: [{
                type: 'category', // Specify the x-axis scale as 'category'
                labels: Object.keys(domainCounts),
            }],
        },
    };


       return <Bar data={chartData} 
       options = { chartOptions }/>;
}

export default DomainDistributionChart;