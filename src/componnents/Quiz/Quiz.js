import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({datas}) => {
     console.log(datas)
     const {name,logo,id}=datas;
    
    return (
        <div className='flex justify-center p-3'>
             <div className='grid grid-cols-3 justify-center items-center mt-16'>
       
                  <img className='object-contain  h-48 w-96 p-4 border-orange-600 bg-indigo-500' src={logo} alt="" />
                  <h2 className='text-3xl font-semibold text-center'>Topis : {name}</h2>
                   <button className='text-2xl font-bold text-white p-4 rounded bg-red-400'><Link to={`/quiz/${id}`}>start quiz</Link></button>
             </div>
        </div>
    );
};

export default Quiz;