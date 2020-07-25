import React, { useState } from 'react';
import './styles.css';

import { FaTrash } from 'react-icons/fa';

const NewVote: React.FC = () => {
   return (
      <div className="NewVote">
         <h1 className="title">New Vote</h1>
         <form className="form">
            <table>
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Name</th>
                     <th>End date</th>
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
   const [name, setName] = useState('');
   const [endDate, setEndDate] = useState('');

   return (
      <tbody>
         <tr className="new-vote">
            <td>
               <button className="upload">Upload image</button>
            </td>
            <td>
               <input type="text" required id="name" onChange={(e) => setName(e.target.value)} value={name} />
            </td>
            <td>
               <input
                  type="date"
                  required
                  id="name"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
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
