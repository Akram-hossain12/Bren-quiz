import React from 'react';
import img from './img/brain-1773892_1280.png';
import './banner.css'


const Banner = () => {
    return (
        <div className='grid grid-cols-2 bg-orange-200'>
             <div className='flex justify-center  items-center'>
                <h1 className='lg:text-5xl sm:text-3xl font-semibold text-rose-400'>Can You Pass <br/> <span className='lg:text-3xl sm:text-2xl mt-10 mb-10'>This Brain Busting </span><br/>Trivia Quiz?</h1>
             </div>
             <div className='flex justify-center items-center sm:p-8 lg:p-14 imgBanner'>
                <img className='overflow-hidden' src={img} alt=''/>
             </div>
        </div>
    );
};

export default Banner;