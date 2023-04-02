import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CatchUp from './CatchUp';
import Feed from './Feed'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Routes>
              <Route path='/' element={<CatchUp />} />
              <Route path='/feed' element={<Feed />} />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}

export default App
