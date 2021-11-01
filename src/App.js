import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
//Pages import
import Bookmarks from './pages/bookmarks/bookmarks';
import Dashboard from './pages/dashboard/dashboard';
import About from './pages/about/about';
import Error from './pages/error/error';
//Components import
import TopNavbarComponent from './components/topnavbarcomponent';
import Footer from './components/footer';
import GoToTop from './components/gototop';
//Context component
//import DashboardProvider from './pages/dashboard/components/contextDashboard'
//import Wrapper from './pages/dashboard/wrapper';
//import Dashboard from './pages/dashboard/dashboard';

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
      <GoToTop />
      <Footer />
    </Router>
  );
}

export default App;

/*
          <DashboardProvider>
            <Dashboard />
          </DashboardProvider>
 */