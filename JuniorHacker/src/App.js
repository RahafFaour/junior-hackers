import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import OurProgramme from './Components/OurProgramme/OurProgramme'
import AboutUs from './Components/AboutUs/AboutUs'
import OurVision from './Components/OurVision/OurVision'
import Album from './Components/Album/Album'
import ContactUs from './Components/ContactUs/ContactUs'
import Donate from './Components/Donate/Donate'
import NewsLetter from './Components/NewsLetter/NewsLetter'

class App extends Component {
    render() {

        return (
    <div className="App">

        <BrowserRouter>
            <div>
                <Switch> 
                    <Route exact path= '/' component={Home}/>
                    <Route exact path= '/ourprogramme' component={OurProgramme}/>
                    <Route exact path= '/aboutus' component={AboutUs}/>
                    <Route exact path= '/ourvision' component={OurVision}/>
                    <Route exact path= '/album' component={Album}/>
                    <Route exact path= '/contactus' component={ContactUs}/>
                    <Route exact path= '/donate' component={Donate}/>
                    <Route exact path= '/newsletter' component={NewsLetter}/>
                </Switch>   
            </div>
        </BrowserRouter>
    </div>
        );
    }
}
export default App;