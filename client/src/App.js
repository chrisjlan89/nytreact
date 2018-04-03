import NYTContainer from "./components/NYTContainer"
import NTYSaved from "./components/NTYSaved"
import React from "react";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Nav from "./components/Navbar"

const App = () =>
<Router>
<div>
    <Nav />
    <Switch>
    <Route exact path = "/" component={NYTContainer} />
    <Route exact path = "/saved" component={NTYSaved} />
    
    </Switch>
</div>
  </Router>
  

  





export default App;
