import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from '../../router';
const App = () => {
  return <div>
      <Router>
        <RouterComponent />
      </Router>
  </div>;
};

export default App;