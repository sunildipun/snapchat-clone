import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WebCamCapture from './component/WebCamCapture/WebCamCapture.component';
import Preview from './component/Preview/Preview.component';

function App() {
  return (
    <div className="app">
      <h2> Let build snapchat 🚀 </h2>

        <Router>
          <div className="app__body">
            <Switch>
              <Route path="/preview">
                <Preview />
              </Route>
              <Route exact path="/">
                <WebCamCapture />
              </Route>
            </Switch>
          </div>
        </Router> 
    </div>
  );
}

export default App;
