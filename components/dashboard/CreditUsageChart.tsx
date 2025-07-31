import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { CreditUsageData } from '../../types';

interface CreditUsageChartProps {
    data: CreditUsageData[];
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-800 text-white p-2 rounded-md shadow-lg text-right">
                <p className="font-bold">{`${payload[0].value} اعتبار`}</p>
                <p className="text-sm text-slate-300">{label}</p>
            </div>
        );
    }

    return null;
};


const CreditUsageChart: React.FC<CreditUsageChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: -20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  axisLine={false} 
                  tickLine={false}
                  reversed={true}
                />
                <YAxis 
                  orientation="right"
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  axisLine={false} 
                  tickLine={false} 
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#14B8A6', strokeWidth: 1, strokeDasharray: '3 3' }}/>
                <Line type="monotone" dataKey="uv" stroke="#14B8A6" strokeWidth={2} dot={false} activeDot={{ r: 6, fill: '#14B8A6' }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CreditUsageChart;