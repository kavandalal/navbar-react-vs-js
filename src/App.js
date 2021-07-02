import "./App.css";
import {Switch,Route} from "react-router-dom";

import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Info from "./Components/Info.js";
import About from "./Components/About.js";
import Help from "./Components/Help.js";

function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* this path and the 'to' in Link in Navbar should be same otherwise the content wont show */}
          <Route exact path="/info" component={Info}/>
          <Route exact path="/aboutus" component={About}/>
          <Route exact path="/help" component={Help}/>
      </Switch>
      <h4>
        This site is just here to show the difference in how fast the navbar with React is from that of JS, as React has Client-Side Routing rather than Server-Side Routing 
      </h4>
    </>
  );
}

export default App;
