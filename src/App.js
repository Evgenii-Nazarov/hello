import React, {useState} from 'react';
import Navigation from './components/Navigation';
import './App.css';
import logo from "./logo.svg";
import List from "./components/List";

const title = "HackerMaps";
const locations = [
    'Lombard St, San Francisco, CA, USA',
    'PIER 39, The Embarcadero, San Francisco, CA, USA',
    'Golden Gate Bridge, San Francisco, CA, USA',
    `Fisherman's Wharf, San Francisco, CA, USA`,
    'Alcatraz Island, San Francisco, CA, USA'
];

function App() {
    const [list, setList] = useState(locations)

    const moveUp = (index) => {
        const updatedList = list.map((el, i) => {
            if (i === index) return list[index - 1]
            if (i === index - 1) return list[index]
            return el
        })

        setList(updatedList)
    }

    const moveDown = (index) => {
        const updatedList = list.map((el, i) => {
            if (i === index) return list[index + 1]
            if (i === index + 1) return list[index]
            return el
        })

        setList(updatedList)
    }

    return (
        <div className="App">
            <nav className="app-header layout-row align-items-center justify-content-center">
                <div className="layout-row align-items-center">
                    <img alt="" src={logo} className="logo"/>
                    <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
                </div>
            </nav>
            <List list={list} moveUp={moveUp} moveDown={moveDown} listLength={list.length}/>
            <Navigation locations={locations}/>
        </div>
    );

}

export default App;
