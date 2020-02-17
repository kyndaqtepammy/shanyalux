import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home  from './Home';
import Bookings  from './Bookings';
import BusHire from './BusHire';
import About  from './About';
import Contact  from './Contact';
import NoMatch from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import './assets/css/styleMod.css';



function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} activeClassName="active"/>
            <Route exact path="/bookings" component={Bookings} activeClassName="active"/>
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/bus-hire" component={BusHire}/>
            <Route  component={ NoMatch}/>
          </Switch>
        </Router>
        {/* <Footer/> */}
    </React.Fragment>
  );
}

export default App;
