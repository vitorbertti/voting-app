import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
   return (
      <div className="SignIn">
         <h1 className="title">Sign in</h1>
         <form className="form">
            <div className="field">
               <label htmlFor="email">E-mail</label>
               <input type="email" id="email" placeholder="example@example.com" required />
            </div>
            <div className="field">
               <label htmlFor="password">Password</label>
               <input type="password" id="password" placeholder="***********" required />
            </div>
            <button type="submit">Sign in</button>
            <Link to="/create-account">Create an account</Link>
         </form>
      </div>
   );
};

export default SignIn;
