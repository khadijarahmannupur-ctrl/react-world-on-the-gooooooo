import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) =>{
        console.log('handle visited countries',country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags =(flag) => {
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
    }
    
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div className='text-center'>
            <h1>In the Countries: {countries.length}</h1>
            <h2>Total Country Visited: {visitedCountries.length}</h2>
            <h2>Total Visited Flag: {visitedFlags.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        country={country} 
                        key={country.cca3.cca3} 
                        handleVisitedCountries={handleVisitedCountries} 
                        handleVisitedFlags={handleVisitedFlags}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;