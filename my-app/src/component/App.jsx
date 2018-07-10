import React, { Component } from 'react';
import '../styles/app.css';

import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';
import Home from './HomeComponent';
import Gaode from './gaode/Gaode';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/hello">Hello</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/gaode">Gaode</Link></li>
            </ul>
            <hr/>
              <Route exact={true} path="/" component={Home} />
              <Route path="/hello" component={Hello} />
              <Route path="/about" component={About} />
              <Route path="/books" component={Books} />
              <Route path="/gaode" component={Gaode} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
