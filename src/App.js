import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/project/Projects';
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation();

  return (
    // <Router>
      <div className="app">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3">

              <Sidebar />

            </div>
            <div className="col-lg-9 app_main-content">
              {/* navbar */}

              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                  <Route exact path="/" component={About} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/projects" component={Projects} />
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    // </Router>
  );
}

export default App;