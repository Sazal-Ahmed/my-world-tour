import { useState } from 'react';

import ('./Country.css');
const Country = ({country}) => {
    console.log(country);

        const {name, flags, population , area, cca3
        } = country;

        const [visible, setVisible] = useState(false);

        const handleVisible = () => {
            setVisible(!visible);
        }
   
    return (
        <div className={`country ${visible && 'visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code :{cca3}</small></p>
            <button onClick={handleVisible}>{visible?'visited' : 'going'}</button>
            {
                visible ? 'I am visited this country' : 'I want to visit'
            }
        </div>
    );
};

export default Country;