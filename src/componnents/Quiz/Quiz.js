import React from 'react';

const Quiz = ({datas}) => {
     console.log(datas)
     const {name,logo}=datas;
    //  const [name,logo]=quize;
    return (
        <div className='flex justify-center mt-16  p-3'>
             <div className='grid grid-cols-3 justify-center items-center'>
       
                  <img className='object-contain  h-48 w-96 p-4 border bg-indigo-500' src={logo} alt="" />
                  <h2 className='text-3xl font-semibold text-center'>Topis : {name}</h2>
                   <button className='text-2xl font-bold text-white p-4 rounded bg-red-400'>start quiz</button>
             </div>
        </div>
    );
};

export default Quiz;