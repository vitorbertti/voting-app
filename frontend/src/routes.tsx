import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import SignIn from './pages/sign-in';

const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Route component={Home} path="/" exact />
         <Route component={SignIn} path="/sign-in" />
      </BrowserRouter>
   );
};

export default Routes;
