import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const {data} = quizes;

    // console.log(data)
    return (
        <div className=' bg-gray-100'>
            {data.map(datas =><Quiz key={datas.id} datas={datas}></Quiz>)}     
        </div>
    );
};

export default Quizes;