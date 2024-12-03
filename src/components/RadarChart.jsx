import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const RadarChartComponent = ({ characters, option1, option2 }) => {
    const data = Object.keys(characters[option1.value].capacities).map((key) => ({
        subject: key,
        [characters[option1.value].name]: characters[option1.value].capacities[key],
        [characters[option2.value].name]: characters[option2.value].capacities[key],
    }));

    return (
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar name={characters[option1.value].name} dataKey={characters[option1.value].name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name={characters[option2.value].name} dataKey={characters[option2.value].name} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    );
};

export default RadarChartComponent;