import React, {useState} from 'react';
import "./Cities.css"

const cities = ["Київ", "Житомир"] // Житомира не існує!!!

const City = props => {
    return (
        <option value={props.value}>{props.name}</option>
    )
}

const Cities = () => {
    const [city, setCity] = useState(0)

    return (
        <div className={"Cities"}>
            <select value={city} onChange={event => setCity(parseInt(event.target.value))}>
                {
                    cities.map(
                        (name, id) => <City name={name} value={id}/>
                    )
                }
            </select>
            {city === 1 ? <h2>ЖИТОМИРА НЕ ІСНУЄ!!!</h2> : <></>}
        </div>
    );
};

export default Cities;