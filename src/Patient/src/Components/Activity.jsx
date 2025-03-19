import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../Styles/Activity.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Lower Activity',
                data: [38, 18, 72, 20, 55, 65, 42],
                backgroundColor: '#0B3779', // Dark Blue
                stack: 'Stack 0',
            },
            {
                label: 'Higher Activity',
                data: [20, 30, 25, 15, 25, 20, 20],
                backgroundColor: '#46C3D6', // Light Blue
                stack: 'Stack 0',
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false }, // Hide legend to match image
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.raw}%`; // Show % in tooltips
                    }
                }
            }
        },
        scales: {
            x: { 
                grid: { display: false },
                ticks: { font: { weight: 'bold' } }
            },
            y: { 
                beginAtZero: true,
                max: 100,
                ticks: { callback: (value) => `${value}%` }, // Add % symbol
                grid: { drawBorder: false }
            }
        }
    };

    return (
        <div className="activity-card">
            <div className="activity-header">
                <h3>Your Activity</h3>
                <h3>Weekly</h3>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
}

export default ActivityChart;
