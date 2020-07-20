import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';

const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Route component={Home} path="/" exact />
      </BrowserRouter>
   );
};

export default Routes;
