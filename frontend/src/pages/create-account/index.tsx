import React, { useState } from 'react';
import './styles.css';

const CreateAccount: React.FC = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handleSubmit = (e: any) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         alert('Please make sure your passwords match');
         return;
      }

      console.log(username);
      console.log(email);
   };

   return (
      <div className="CreateAccount">
         <h1 className="title">Create your account</h1>
         <form className="form" onSubmit={handleSubmit}>
            <div className="field">
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
               />
            </div>
            <div className="field">
               <label htmlFor="email">E-mail</label>
               <input
                  type="email"
                  id="email"
                  placeholder="example@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </div>
            <div className="field">
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  id="password"
                  placeholder="***********"
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            </div>
            <div className="field">
               <label htmlFor="password">Confirm Password</label>
               <input
                  type="password"
                  id="confirm-password"
                  placeholder="***********"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
               />
            </div>
            <button type="submit">Create account</button>
         </form>
      </div>
   );
};

export default CreateAccount;
