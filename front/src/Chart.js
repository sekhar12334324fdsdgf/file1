import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

function ChartComponent() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [chartData, setChartData] = useState({ labels: [], data: [] });

    // Fetch data from the backend
    useEffect(() => {
        const fetchData = () => {
            axios.get('http://localhost:3011/managerd') // Replace with your API endpoint
                .then(response => {
                    setChartData({
                        labels: response.data.map(item => item.name), // Assuming response has 'name' field
                        data: response.data.map(item => item.salary), // Assuming response has 'salary' field
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };

        fetchData();
    }, []);

    // Render the chart
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Salary by Manager',
                    data: chartData.data,
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [chartData]);

    return (
        <div>
            <strong>MANAGER SALARYS</strong>
        <div style={{ width: '250px', height: '250px' }}>
            <canvas ref={chartRef} width={'400'} height={'400'}></canvas>
        </div>
        </div>
    );
}

export default ChartComponent;
