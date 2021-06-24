import React from 'react';
import { Link } from 'react-router-dom';

import LightArrow from './assets/img/LightArrow.svg'
import DarkArrow from './assets/img/DarkArrow.svg'

const Country = (props) => {

    const countryLinks = props.countriesList.filter(country => props.borderingCountries.includes(country.alpha3Code))
    const languages = props.languages.map(language => language.name)
    const currencies = props.currencies.map(currency => currency.name)

    
    return (
        <div className={"Country" + ' ' + props.darkMode + 2}>
            <img className="BackArrow" src={props.darkMode === 'lightMode' ? (LightArrow) : (DarkArrow)} alt="" />
            <Link to="/"><h5 className={"BackButton" + ' ' + props.darkMode}>Back</h5></Link>
            <div className="NoDisplayDesktop">
            <img className="Flag" src={props.img} alt={props.name + " Flag"} width="80%"/>
            <h1>{props.name}</h1>
            <div className="PairContainer">
                <div className="InfoPair">
                    <h3>Native Name:</h3>
                    <p>{props.nativeName}</p>
                </div>
                <div className="InfoPair">
                    <h3>Population:</h3>
                    <p>{props.population}</p>
                </div>
                <div className="InfoPair">
                    <h3>Region:</h3>
                    <p>{props.region}</p>
                </div>
                <div className="InfoPair">
                    <h3>Sub Region:</h3>
                    <p>{props.subRegion}</p>
                </div>
                <div className="InfoPair">
                    <h3>Capital:</h3>
                    <p>{props.capital}</p>
                </div>
            </div>
            <div className="PairContainer">
                <div className="InfoPair">
                    <h3>Top Level Domain:</h3>
                    <p>{props.domain}</p>
                </div>
                <div className="InfoPair">
                    <h3>Currencies:</h3>
                    <p>{currencies.join(', ')}</p>
                </div>
                <div className="InfoPair">
                    <h3>Languages:</h3>
                    <p>{languages.join(', ')}</p>
                </div>
            </div>
            <h2>Border Countries:</h2>
            <div className="BorderCountries">
                {countryLinks.map(country => (
                    <Link to={`/countries/${country.name}`}><h5 className={"CountryLink" + ' ' + props.darkMode}>{country.name}</h5></Link>
                ))}
            </div>
            </div>
            <div className="NoDisplayMobile">
            <img className="Flag" src={props.img} alt={props.name + " Flag"} width="80%"/>
            <div className="Container1">
            <h1>{props.name}</h1>
            <div className="PairContainer">
                <div className="InfoPair">
                    <h3>Native Name:</h3>
                    <p>{props.nativeName}</p>
                </div>
                <div className="InfoPair">
                    <h3>Population:</h3>
                    <p>{props.population}</p>
                </div>
                <div className="InfoPair">
                    <h3>Region:</h3>
                    <p>{props.region}</p>
                </div>
                <div className="InfoPair">
                    <h3>Sub Region:</h3>
                    <p>{props.subRegion}</p>
                </div>
                <div className="InfoPair">
                    <h3>Capital:</h3>
                    <p>{props.capital}</p>
                </div>
            </div>
            </div>
            <div className="Container2">
            <div className="PairContainer">
                <div className="InfoPair">
                    <h3>Top Level Domain:</h3>
                    <p>{props.domain}</p>
                </div>
                <div className="InfoPair">
                    <h3>Currencies:</h3>
                    <p>{currencies.join(', ')}</p>
                </div>
                <div className="InfoPair">
                    <h3>Languages:</h3>
                    <p>{languages.join(', ')}</p>
                </div>
            </div>
            </div>
            </div>
            <div className="NoDisplayMobile">
            <div className="BorderCountries">
                <h2>Border Countries:</h2>
                <div className="Neighbors">
                    {countryLinks.map(country => (
                        <Link to={`/countries/${country.name}`}><h5 className={"CountryLink" + ' ' + props.darkMode}>{country.name}</h5></Link>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Country;