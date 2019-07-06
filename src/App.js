import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about/About'));
const Destination = lazy(() => import('./pages/destination/Destination'));




function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/index.html" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/destinations" component={Destination}/>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
