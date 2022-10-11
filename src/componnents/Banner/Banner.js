import React from 'react';
import img from './img/brain-1773892_1280.png';
import './banner.css'


const Banner = () => {
    return (
        <div className='grid grid-cols-2 bg-orange-200'>
             <div className='flex justify-center  items-center'>
                <h1 className='text-6xl font-semibold text-rose-400'>Can You Pass <br/> <span className='text-4xl mt-10 mb-10'>This Brain Busting </span><br/>Trivia Quiz?</h1>
             </div>
             <div className='flex justify-center items-center p-14 imgBanner'>
                <img className='overflow-hidden' src={img} alt=''/>
             </div>
        </div>
    );
};

export default Banner;