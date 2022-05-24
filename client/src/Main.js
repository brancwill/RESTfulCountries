import React, {useState} from 'react';
import CountryBtn from './CountryBtn'
import SearchDark from './assets/img/searchDark.svg'
import SearchLight from './assets/img/searchLight.svg'

const Main = (props) => {

    const [display, setDisplay] = useState('hidden');
    const [searchTerm, setSearchTerm] = useState('');

    const handleClick = () => {
        if (display === 'hidden') {
            setDisplay('unhidden');
        } else {
            setDisplay('hidden')
        }
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className={"Main" + ' ' + props.darkMode + 2}>
            <img className='SearchIcon' src={props.darkMode === 'lightMode' ? (SearchLight) : (SearchDark)} alt='' />
            <div className="Filters">
                <input onChange={handleChange} value={searchTerm} placeholder="Search for a country..." type='text' className={props.darkMode} name="countrySearch" />
                <button className={props.darkMode} onClick={() => handleClick()} type="button">Filter by Region</button>
            </div>
            <div className={display + ' ' + props.darkMode}>
                <ul>
                    <a href='#' onClick={() => props.setRegion('all')}><li>All</li></a>
                    <a href='#' onClick={() => props.setRegion('region/Africa')}><li>Africa</li></a>
                    <a href='#' onClick={() => props.setRegion('region/Americas')}><li>Americas</li></a>
                    <a href='#' onClick={() => props.setRegion('region/Asia')}><li>Asia</li></a>
                    <a href='#' onClick={() => props.setRegion('region/Europe')}><li>Europe</li></a>
                    <a href='#' onClick={() => props.setRegion('region/Oceania')}><li>Oceania</li></a>
                </ul>
            </div>
            <div className="CountryList">
                {props.countriesList.filter((val) => {
                    if (searchTerm == '') {
                        return val
                    } else if (val.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((country, index) => (
                    <CountryBtn 
                    key={index}
                    name={country.name.common}
                    img={country.flags.png} 
                    population={country.population}
                    capital={country.capital}
                    region={country.region}
                    darkMode={props.darkMode}/>
                ))}
            </div>
        </div>
    );
};

export default Main;