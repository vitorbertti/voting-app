import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import SignIn from './pages/sign-in';
import CreateAccount from './pages/create-account';
import Profile from './pages/profile';
import VotingList from './pages/voting-list';

const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Route component={Home} path="/" exact />
         <Route component={SignIn} path="/sign-in" />
         <Route component={CreateAccount} path="/create-account" />
         <Route component={Profile} path="/profile/:id" />
         <Route component={VotingList} path="/voting-list" />
      </BrowserRouter>
   );
};

export default Routes;
