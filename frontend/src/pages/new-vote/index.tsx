import React, { useState } from 'react';
import './styles.css';

import { FaTrash } from 'react-icons/fa';

// interface Props {
//    items: number[];
// }

interface Item {
   id: number;
   name: string;
   description: string;
}

const NewVote: React.FC = () => {
   const [name, setName] = useState('');
   const [endDate, setEndDate] = useState('');
   const [items, setItems] = useState([{ id: 0, name: '', description: '' }]);
   const [itemId, setItemId] = useState(0);

   const addItem = (e: any) => {
      e.preventDefault();
      let newId = itemId;
      setItems([...items, { id: ++newId, name: '', description: '' }]);
      setItemId(itemId + 1);
   };

   const removeItem = (e: any, id: number) => {
      e.preventDefault();
      items.splice(id, 1);
      setItems(items.filter((item) => item.id !== id));
   };

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
               <tbody>
                  {items.map((item) => (
                     <ChildComponent key={item.id} item={item} removeItem={removeItem} />
                  ))}
               </tbody>
            </table>
            <button className="button" onClick={(e) => addItem(e)}>
               Add vote item
            </button>
         </form>
      </div>
   );
};

export const ChildComponent: React.FC<any> = ({ item, removeItem }) => {
   const [itemName, setItemName] = useState('');
   const [description, setDescription] = useState('');

   return (
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
               <button title="Delete" className="svg" onClick={(e) => removeItem(e, item.id)}>
                  <FaTrash />
               </button>
            </div>
         </td>
      </tr>
   );
};

export default NewVote;
