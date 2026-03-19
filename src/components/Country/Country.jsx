import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.population.population);
    const handleVisited =() => {
        // ---------1-----------
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // ---------2-----------
        // setVisited(visited ? false : true);

        // ---------3-----------
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited ? 'country-visited': 'country'}`}>
            <img className='img' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3 className={`${visited && 'text-style'}`}>Name: {country.name.common}</h3>
            <p className={`${visited && 'text-style'}`}>Population: {country.population.population}</p>
            <p className={`${visited && 'text-style'}`}>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country': "Small Country"}</p>
            <button onClick={handleVisited} className= {`counter ${visited && 'btn-style'}`}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}} className= {`counter`}>Add visited Flag</button>
        </div>
    );
};

export default Country;