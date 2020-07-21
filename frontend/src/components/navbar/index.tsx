import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
   return (
      <div className="Navbar">
         <div className="logo">
            <Link to="/">
               <h1>Voting App</h1>
            </Link>
         </div>
         <div className="links">
            <Link to="/voting-list">Voting list</Link>
            <Link to="new-vote">New vote</Link>
            <Link to="sign-in">Sign in</Link>
            <Link to="user/profile" hidden>
               User
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
