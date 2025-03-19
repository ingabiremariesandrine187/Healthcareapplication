import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../Styles/ActivityChart.css';

const data = [
    { month: "Jan", activity: 30 },
    { month: "Feb", activity: 25 },
    { month: "Mar", activity: 40 },
    { month: "Apr", activity: 50 },
    { month: "May", activity: 55 },
    { month: "Jun", activity: 45 },
    { month: "Jul", activity: 60 },
    { month: "Aug", activity: 0 },
    { month: "Sep", activity: 10 },
    { month: "Oct", activity: 15 },
    { month: "Nov", activity: 35 },
    { month: "Dec", activity: 55 }
];

const ActivityChart = () => {
    return (
        <div className="activity-card">
            <div className="activity-header">
                <h3>Your Activity</h3>
                <h3>Year</h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontWeight: 'bold' }} />
                    <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Line type="monotone" dataKey="activity" stroke="#0B3779" strokeWidth={2} dot={{ r: 4, fill: '#0B3779' }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ActivityChart;
