import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const CountryDetails = () => {
    const { countryId } = useParams();
    const [country, setCountry] = useState([]);
    // console.log(countryId)
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryId}`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [countryId])

    if (!country || !countryId) {
        return <Loading />
    }
    return (
        <div className="container mt-8 max-w-5xl">
            <div className="card text-center">
                <div className="card-header text-xl font-semibold">
                    Details Information of <span className='text-2xl font-bold text-orange-500'>{country[0]?.name?.common}</span>
                </div>
                <div className="card-body bg-slate-100">
                    <h1 className='text-lg font-semibold bg-white p-3 lg:w-1/2 mx-auto shadow-xl'>Capital : <span>{country[0]?.capital}</span></h1>
                    <div className='flex justify-center items-center flex-col my-4'>
                        <img className='w-2/12' src={country[0]?.coatOfArms?.png} alt="" />
                        <span className='font-semibold text-gray-800'>Coat of Arms</span>
                    </div>
                    <div className='lg:w-1/2 border border-opacity-30 shadow-md p-4 mx-auto'>
                        <h1 className='text-xl'>Continents : <span className='text-rose-500'>{country[0]?.continents[0]}</span></h1>
                        <h1 className='text-xl'>Official Name : <span className='text-rose-500'>{country[0]?.name?.official}</span></h1>
                        <h1 className='text-xl'>Population: <span className='text-rose-500'>{country[0]?.population}</span></h1>
                        <h1 className='text-xl'>Start of Week: <span className='text-rose-500'>{country[0]?.startOfWeek}</span></h1>
                        <h1 className='text-xl'>Subregion: <span className='text-rose-500'>{country[0]?.subregion}</span></h1>
                        <h1 className='text-xl'>TimeZone: <span className='text-rose-500'>{country[0]?.timezones[0]}</span></h1>
                    </div>

                    {
                        country[0] && <div>
                            <a target='_blank' rel='noreferrer' href={country[0]?.maps?.googleMaps} className="btn btn-info mt-2">Google Map</a>
                            <br />
                            <a target='_blank' rel='noreferrer' href={country[0]?.maps?.openStreetMaps} className="btn btn-dark mt-4">Street View</a>
                        </div>
                    }
                </div>
                <div className="card-footer text-muted">
                    Thank You
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;