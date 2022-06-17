import React, { useEffect, useState } from 'react';
import SingleCountrie from './SingleCountrie';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className='container max-w-6xl mx-auto'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    countries.map((country, index) => <SingleCountrie key={index} country={country} />)
                }
            </div>
        </div>
    );
};

export default Home;