import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import OurPrograms from './Components/OurProgramme/OurProgramme'
import AboutUs from './Components/AboutUs/AboutUs'
import OurVision from './Components/OurVision/OurVision'
import Album from './Components/Album/Album'
import ContactUs from './Components/ContactUs/ContactUs'
import Donate from './Components/Donate/Donate'
import NewsLetter from './Components/NewsLetter/Cards'


import page1 from './Components/OurProgramme/page1';
import page2 from './Components/OurProgramme/page2';
import page3 from './Components/OurProgramme/page3';
import page4 from './Components/OurProgramme/page4';

class App extends Component {
    render() {

        return (
    <div className="App">

        <BrowserRouter>
            <div>
                <Switch> 
                    <Route exact path= '/' component={Home}/>
                    <Route exact path= '/ourprograms' component={OurPrograms}/>
                    <Route exact path= '/aboutus' component={AboutUs}/>
                    <Route exact path= '/ourvision' component={OurVision}/>
                    <Route exact path= '/album' component={Album}/>
                    <Route exact path= '/contactus' component={ContactUs}/>
                    <Route exact path= '/donate' component={Donate}/>
                    <Route exact path= '/newsletter' component={NewsLetter}/>

                    <Route exact path= '/page1' component={page1}/>
                    <Route exact path= '/page2' component={page2}/>
                    <Route exact path= '/page3' component={page3}/>
                    <Route exact path= '/page4' component={page4}/>
                </Switch>   
            </div>
        </BrowserRouter>
    </div>
        );
    }
}
export default App;