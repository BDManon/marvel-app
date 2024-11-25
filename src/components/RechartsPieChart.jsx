import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { prepareData } from './chart-utils';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919']


const RechartsPieChart = ({ data }) => {
    
    const prepareData2 = prepareData(data);
    
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={prepareData2}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
                label
            >
            {prepareData2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            </Pie>
            <Legend />
            <Tooltip />
        </PieChart>
    )
};
export default RechartsPieChart;