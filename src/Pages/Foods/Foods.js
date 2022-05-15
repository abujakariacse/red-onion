import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Foods.css';

const Foods = () => {
    return (
        <div className='foods-header mt-3'>
            <Link to='/home/breakfast'>Breakfast</Link>
            <Link to='/home/lunch'>Lunch</Link>
            <Link to='/home/dinner'>Dinner</Link>
            <Outlet />
        </div>
    );
};

export default Foods;