import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid grid-cols-2 sm:p-4 lg:p-5'>
            <div className='text-center sm:ml-1 lg:text-4xl sm:text-2xl font-bold text-indigo-400'>
                <h1><Link to='/'>CODEZBrain-Quiz</Link></h1>
            </div>
            <div className='lg:text-2xl font-semibold sm:ml-3'>
                <Link  className='mx-6'  to='/'>Quizes</Link>
                <Link to='/Statics'>Statistics</Link>
                <Link  className='mx-6' to='/Blog'>Blog</Link>
                <Link to='/Contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Header;