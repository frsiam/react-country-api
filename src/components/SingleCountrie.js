import React from 'react';
import { Link } from 'react-router-dom';

const SingleCountrie = ({ country }) => {

    return (
        <div className="col">
            <div className="card h-100">
                <img className='w-full h-2/3 img-fluid card-img-top' src={country.flags.png} alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><span className='text-2xl font-semibold'>{country.name.common}</span></h5>
                    <p className="card-text"></p>
                    <Link className='text-decoration-none w-100' to={`details/${country.ccn3}`}><button className='btn btn-outline-dark w-100'><span className='text-uppercase'>Details</span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCountrie;