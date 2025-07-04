import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './project/src/routes/AppRoutes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App; 