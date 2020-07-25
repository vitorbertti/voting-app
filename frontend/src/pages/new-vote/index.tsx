import React, { useState } from 'react';
import './styles.css';

import { FaTrash } from 'react-icons/fa';

const NewVote: React.FC = () => {
   const [name, setName] = useState('');
   const [endDate, setEndDate] = useState('');

   return (
      <div className="NewVote">
         <h1 className="title">New Vote</h1>
         <form className="form">
            <div className="voting-info">
               <div className="info">
                  <label htmlFor="name">Voting name</label>
                  <input
                     type="text"
                     required
                     id="name"
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                  />
               </div>
               <div className="info">
                  <label htmlFor="end-date">End date</label>
                  <input
                     type="date"
                     required
                     id="end-date"
                     onChange={(e) => setEndDate(e.target.value)}
                     value={endDate}
                  />
               </div>
            </div>
            <table>
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Description</th>
                     <th>Remove</th>
                  </tr>
               </thead>

               <ChildComponent />
            </table>
            <button className="button">Add vote item</button>
         </form>
      </div>
   );
};

const ChildComponent = () => {
   const [itemName, setItemName] = useState('');
   const [description, setDescription] = useState('');

   return (
      <tbody>
         <tr className="new-vote">
            <td>
               <button className="upload">Upload image</button>
            </td>
            <td>
               <input
                  type="text"
                  required
                  id="itemName"
                  onChange={(e) => setItemName(e.target.value)}
                  value={itemName}
               />
            </td>
            <td>
               <input
                  type="text"
                  required
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
               />
            </td>
            <td>
               <div className="remove-vote">
                  <button title="Delete" className="svg">
                     <FaTrash />
                  </button>
               </div>
            </td>
         </tr>
      </tbody>
   );
};

export default NewVote;
