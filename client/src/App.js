import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import TopBar from './TopBar'
import Main from './Main'
import Country from './Country'
import './styles/styles.css'


class App extends Component {

  state = {
    countriesList: [],
    darkMode: 'lightMode',
    searchCriteria: 'https://restcountries.com/v3.1/all'
  }


  getCountries = async () => {
    await fetch(this.state.searchCriteria, {
      method: 'GET'
    }).then(res => {
      return res.json()
    })
    .then(data => 
      this.setState({countriesList: data}),
      )
  }

  setRegion = (region) => {
    this.setState({searchCriteria: `https://restcountries.com/v3.1/${region}`}, () => {
      this.getCountries()
    })
  }

  changeTheme = () => {
    if (this.state.darkMode === 'lightMode') {
      this.setState({darkMode: 'darkMode'})
    } else {
      this.setState({darkMode: 'lightMode'})
    }
  }

  componentDidMount() {
    this.getCountries()
  }

  render() {
    return (
      <div className={"App" + ' ' + this.state.darkMode + 2}>
        <Router>
          <ScrollToTop />
          <TopBar darkMode={this.state.darkMode} changeTheme={this.changeTheme}/>
          <div className={"Content" + ' ' + this.state.darkMode + 2}>
            <Switch>
              <Route exact path="/">
                <Main search={this.search} setRegion={this.setRegion} darkMode={this.state.darkMode} countriesList={this.state.countriesList}/>
              </Route>
              {this.state.countriesList.map((country) => (
                <Route path={`/countries/${country.name.common}`} render={(props) => 
                  <Country {...props} 
                  darkMode={this.state.darkMode}
                  name={country.name.common}
                  img={country.flags.png}
                  population={country.population}
                  region={country.region}
                  subRegion={country.subregion}
                  capital={country.capital}
                  domain={country.tld}
                  currencies={country.currencies}
                  languages={country.languages}
                  borderingCountries={country.borders}
                  countriesList={this.state.countriesList}
                  />
                } />
              ))}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
