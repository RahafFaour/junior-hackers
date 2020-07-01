import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import OurProgramme from './Components/OurProgramme/OurProgramme'
import AboutUs from './Components/AboutUs/AboutUs'
import OurVision from './Components/OurVision/OurVision'
import Album from './Components/Album/Album'
import Newsletters from './Components/Newsletters/Newsletters'
import Donate from './Components/Donate/Donate'

class App extends Component {
    render() {

        return (
    <div className="App">
        <BrowserRouter>
            <div>
                <Switch> 
                    <Route exact path= '/' component={Home}/>
                    <Route exact path= '/OurProgramme' component={OurProgramme}/>
                    <Route exact path= '/AboutUs' component={AboutUs}/>
                    <Route exact path= '/OurVision' component={OurVision}/>
                    <Route exact path= '/Album' component={Album}/>
                    <Route exact path= '/newsletters' component={Newsletters}/>
                    <Route exact path= '/donate' component={Donate}/>
                </Switch>   
            </div>
        </BrowserRouter>
    </div>
        );
    }
}
export default App;