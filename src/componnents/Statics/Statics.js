import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const reciveData = useLoaderData();
   
    const {data} = reciveData;

    console.log(data)
    return (
        <div>
              <h1 className='text-4xl font-semibold m-8 text-center'>Total question noumber</h1>
          <div className='m-8 flex justify-center items-center'>
            <LineChart height={400}width={800} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </LineChart>
          </div>
        </div>
    );
};

export default Statics;