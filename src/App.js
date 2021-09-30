import react from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
//Pages import
import Bookmarks from './pages/bookmarks';
import Error from './pages/error';
import About from './pages/about';
//Components import
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Bookmarks />
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
