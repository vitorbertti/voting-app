import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../../services/api';

interface VotingItem {
   id: string;
   name: string;
   description: string;
   votes: number;
}

const Voting: React.FC = () => {
   const [votingItems, setVotingItems] = useState([]);

   useEffect(() => {
      api.get(`/voting-items/voting/${1}`).then((response) => {
         setVotingItems(response.data);
      });
   }, []);

   return (
      <div className="Voting">
         <h1 className="title">Voting</h1>
         <h2 className="title">Ends in 01/01/2021</h2>
         <div className="items">
            {votingItems &&
               votingItems.map((votingItem: VotingItem) => (
                  <VoteItem
                     key={votingItem.id}
                     name={votingItem.name}
                     description={votingItem.description}
                     votes={votingItem.votes}
                     id={votingItem.id}
                  />
               ))}
         </div>
      </div>
   );
};

const VoteItem: React.FC<VotingItem> = ({ name, description }) => {
   return (
      <div className="vote-item">
         <form className="form">
            <div className="item-img">
               <span>I</span>
            </div>
            <div className="field">
               <label htmlFor="username"> Name </label>
               <input type="text" id="username" value={name} readOnly />
            </div>
            <div className="field">
               <label htmlFor="description">Description</label>
               <input type="text" id="description" value={description} readOnly />
            </div>
            <button className="button">Vote</button>
         </form>
      </div>
   );
};

export default Voting;
