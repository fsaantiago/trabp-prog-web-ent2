// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './items/Header';
import Home from './items/Home';
import Portfolio from './items/Portfolio';
import AboutMe from './items/AboutMe';
import Contact from './items/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact items={Home} />
          <Route path="/portfolio" items={Portfolio} />
          <Route path="/sobre-mim" items={AboutMe} />
          <Route path="/contato" items={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
