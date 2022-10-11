import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Option = ({option}) => {
     console.log(option)
    return (
        <div className='mt-3'>
            <p className='flex items-center'><button><CheckCircleIcon className='w-6 h-6 text-white'></CheckCircleIcon></button>{option}</p>
        </div>
    );
};

export default Option;