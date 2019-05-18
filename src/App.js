import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
// import logo from './logo.svg';
// import './App.css';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));




function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/index.html" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
