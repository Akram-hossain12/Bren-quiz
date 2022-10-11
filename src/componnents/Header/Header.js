import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid grid-cols-2 p-5'>
            <div className='text-center text-4xl font-bold'>
                <h1><Link to='/'>Brain-Quiz</Link></h1>
            </div>
            <div className='mx-6 text-2xl font-semibold '>
                <Link to='/'>Quizes</Link>
                <Link className='mx-6' to='/Statics'>Static</Link>
                <Link  className='mx-6' to='/Blog'>Blog</Link>
                <Link to='/Contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Header;