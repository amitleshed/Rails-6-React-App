import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import About from "./About"
import Body  from "./Body"
import Home  from "./Home"


class Navbar extends React.Component { 
  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
      
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todos">
              <Body />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar
