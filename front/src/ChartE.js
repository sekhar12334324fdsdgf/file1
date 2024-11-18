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
            axios.get('http://localhost:3011/employee') // Replace with your API endpoint
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
            type: 'line', // Changed to 'bar'
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Salary by Employee',
                    data: chartData.data,
                    borderWidth: 1,
                    backgroundColor: '#e4c7fc',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    hoverOffset: 4,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
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
        <div>  <strong>EMPLOYEE SALARYS</strong>
        <div style={{ width: '250px', height: '250px' }}>
            <canvas ref={chartRef} width={400} height={400}></canvas>
            </div>
        </div>
    );
}

export default ChartComponent;
