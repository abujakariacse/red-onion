import React from 'react';
import Foods from '../../Foods/Foods';
import SearchBox from '../SearchBox/SearchBox';
import './Home.css';

const Home = () => {
    return (
        <div >
            <SearchBox />
            <Foods />
        </div >
    );
};

export default Home;