import React from 'react';
import './styles.css';

const Profile: React.FC = () => {
   return (
      <div className="Profile">
         <h1 className="title">User Profile</h1>
         <form className="form">
            <div className="profile-img">
               <span>U</span>
            </div>
            <div className="field">
               <label htmlFor="username">Username</label>
               <input type="text" id="username" value="User" readOnly />
            </div>
            <div className="field">
               <label htmlFor="email">E-mail</label>
               <input
                  type="email"
                  id="email"
                  placeholder="example@example.com"
                  value="user@example.com"
                  readOnly
               />
            </div>
         </form>
      </div>
   );
};

export default Profile;
