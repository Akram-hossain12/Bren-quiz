import React from 'react';
import Option from '../option/Option';

const Start = ({q}) => {
   console.log(q)
   const {question,options}= q;
     
    return (
        <div className='border p-8 grid grid-cols-1 ml-80 mr-80 mt-10 bg-orange-200'>
             <div className='text-2xl'>{question}
                {
                    options.map(option => <Option
                    option={option}
                    ></Option> )
                }
           </div>
        </div>
    );
};

export default Start;