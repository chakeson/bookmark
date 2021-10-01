import react from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
//Pages import
import Bookmarks from './pages/bookmarks';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Error from './pages/error';
//Components import
import TopNavbarComponent from './components/topnavbarcomponent';

function App() {
  return (
    <Router>
      <TopNavbarComponent />
      <Switch>
        <Route exact path="/">
          <Bookmarks />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/dash">
          <Dashboard />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
