import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

function Student() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    // Render the chart
    useEffect(() => {
        // Sample labels for the radar chart
        const projects_required = ['Datascience', 'AI', 'ML', 'Fullstack', 'CyberSecurity', 'iOS', 'Robotics'];
        
        // Sample data for the radar chart
        const data = [50, 89, 44, 98, 45, 100, 76];

        const ctx = chartRef.current.getContext('2d');

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'radar', // Changed to 'radar'
            data: {
                labels: projects_required,
                datasets: [{
                    label: 'Internship Students',
                    data: data,
                    backgroundColor: '#fce4c7',
                    borderColor: 'rgba(25, 192, 162, 1)',
                    borderWidth: 1,
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
                    r: {
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
    }, []); // No dependencies needed since the data is defined inside

    return (
        <div style={{ width: '250px', height: '250px' }}>
            <canvas ref={chartRef} width={400} height={400}></canvas>
        </div>
    );
}

export default Student;
