import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartBarProps {
    labels: string[];
    data: number[];
    label: string;
}

const ChartBar: React.FC<ChartBarProps> = ({ labels, data, label }) => {
    const chartData = {
        labels,
        datasets: [
            {
                label,
                data,
                backgroundColor: 'rgba(255, 59, 48, 0.6)', // accent color
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' as const },
            title: { display: true, text: label },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default ChartBar;
