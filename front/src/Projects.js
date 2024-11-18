import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

function ChartComponent() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    // Render the chart
    useEffect(() => {
        // Sample labels for the x-axis
        const projects_required = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const ctx = chartRef.current.getContext('2d');

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'bar', // Change this to the desired chart type
            data: {
                labels: projects_required,
                datasets: [{
                    label: 'Monthly Data',
                    data: [50, 28, 89, 23, 37, 13, 6, 44, 98, 45, 100, 76],
                    borderWidth: 1,
                    backgroundColor: 'rgba(175, 192, 192)',
                    borderColor: 'rgba(75, 192, 192, 1)',
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
                        beginAtZero: true,
                    }
                },
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true,
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []); // No dependencies needed since projects_required is inside

    return (
        <div style={{ width: '250px', height: '250px' }}>
            <canvas ref={chartRef} width={400} height={400}></canvas>
        </div>
    );
}

export default ChartComponent;
