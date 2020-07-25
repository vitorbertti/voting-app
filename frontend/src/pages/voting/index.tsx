import React from 'react';
import './styles.css';

const Voting: React.FC = () => {
   return (
      <div className="Voting">
         <h1 className="title">Voting</h1>
         <h2 className="title">Ends in 01/01/2021</h2>
         <div className="items">
            <VoteItem />
            <VoteItem />
            <VoteItem />
            <VoteItem />
            <VoteItem />
         </div>
      </div>
   );
};

const VoteItem = () => {
   return (
      <div className="vote-item">
         <form className="form">
            <div className="item-img">
               <span>I</span>
            </div>
            <div className="field">
               <label htmlFor="username">Name</label>
               <input type="text" id="username" value="Item 1" readOnly />
            </div>
            <div className="field">
               <label htmlFor="description">Description</label>
               <input type="text" id="description" value="It is a good item" readOnly />
            </div>
            <button className="button">Vote</button>
         </form>
      </div>
   );
};

export default Voting;
