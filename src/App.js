import React, {Component} from 'react';
import Navigation from './components/Navigation';
import './App.css';
import logo from "./logo.svg";

const title = "HackerMaps";
const locations = [
    'Lombard St, San Francisco, CA, USA',
    'PIER 39, The Embarcadero, San Francisco, CA, USA',
    'Golden Gate Bridge, San Francisco, CA, USA',
    `Fisherman's Wharf, San Francisco, CA, USA`,
    'Alcatraz Island, San Francisco, CA, USA'
];

class App extends Component {

    constructor() {
        super();
        this.locations = [...locations];
    }

    render() {
        return (
            <div className="App">
                <nav className="app-header layout-row align-items-center justify-content-center">
                    <div className="layout-row align-items-center">
                        <img alt="" src={logo} className="logo"/>
                        <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
                    </div>
                </nav>
                <Navigation locations={this.locations}/>
            </div>
        );
    }
}

export default App;
