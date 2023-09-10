import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    const [visitedFlags, setVisitedflags] = useState([]);

    useEffect(()=>{
        fetch ('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then (data => setCountries(data));

    },[])

    const handleVisitedcountries = country => {
        console.log('added');
        const visitedNewCountry = [...visitedCountries, country];
        setvisitedCountries(visitedNewCountry);
    }
    const handleVisitedflags = flags =>{
        const visitenewdFlags = [...visitedFlags, flags];
        setVisitedflags(visitenewdFlags);
    }



    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                 <h5>Visited Countries</h5>
                 <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                 </ul>
            </div>
            <div className="flgs-container">
                {
                    visitedFlags.map((flags, idx) => <img key={idx}  src={flags.png}></img>)
                }
            </div>

           <div className="country-container">
           {
                countries.map(country => <Country 
                     key={country.cca3}
                     handleVisitedflags={handleVisitedflags}
                     handleVisitedcountries={handleVisitedcountries}
                      country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;