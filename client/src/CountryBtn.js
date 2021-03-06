import React from 'react'
import { Link } from 'react-router-dom';

const CountryBtn = (props) => {
    return (
        <Link to={`/countries/${props.name}`}><div className={"CountryBtn" + ' ' + props.darkMode}>
            <img src={props.img} alt={props.name + ' ' + 'Flag'} width="100%" height="50%"/>
            <div className="CountryInfo">
                <h1>{props.name}</h1>
                <div className="Info">
                    <div className="InfoPair">
                        <h3>Population:</h3>
                        <p>{props.population}</p>
                    </div>
                    <div className="InfoPair">
                        <h3>Region:</h3>
                        <p>{props.region}</p>
                    </div>
                    <div className="InfoPair">
                        <h3>Capital:</h3>
                        <p>{props.capital || "N/A"}</p>
                    </div>
                </div>
            </div>
        </div></Link>
    );
};

export default CountryBtn;