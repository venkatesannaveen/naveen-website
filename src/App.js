import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Research from './components/Research';
import Publications from './components/Publications';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div class='content'>
            <Navbar />
            <Sidebar />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={AboutMe} />
            <Route path='/research' component={Research} />
            <Route path='/publications' component={Publications} />
        </div>
    </Router>
  );
}

export default App;
