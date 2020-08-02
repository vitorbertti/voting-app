import React, { useState, useEffect } from 'react';
import './styles.css';

import { FaTrash } from 'react-icons/fa';
import api from '../../services/api';

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
   const [errors, setErrors] = useState(['', '']);

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

   const handleValidation = () => {
      const itemName = name;
      const itemEndDate = endDate;
      let formIsValid = true;
      let addError = [...errors];

      if (!itemName) {
         formIsValid = false;
         addError[0] = 'Cannot be empty';
      } else {
         addError[0] = '';
      }

      if (!itemEndDate) {
         formIsValid = false;
         addError[1] = 'Cannot be empty';
      } else {
         addError[1] = '';
      }

      setErrors(addError);
      return formIsValid;
   };

   const save = async (e: any) => {
      e.preventDefault();

      if (!handleValidation()) {
         alert('Form has errors.');
      } else {
         const response = await api.post('/votings/create/', {
            name,
            end_date: endDate,
            voted: false,
            created_by: 'UserTeste',
         });

         const votingId = response.data.id;

         if (items.length) {
            items.map(async (item) => {
               await api.post('/voting-items/create', {
                  name: item.name,
                  description: item.description,
                  votes: 0,
                  voting_id: votingId,
               });
            });
         }
         alert('The Voting was created');
      }
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
                  <span style={{ color: 'red' }}>{errors[0]}</span>
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
                  <span style={{ color: 'red' }}>{errors[1]}</span>
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
                     <ChildComponent
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                        items={items}
                        setItems={setItems}
                        index={item.id}
                        errors={errors}
                     />
                  ))}
               </tbody>
            </table>
            <button className="button" onClick={(e) => addItem(e)}>
               Add vote item
            </button>
            <button className="button" onClick={(e) => save(e)}>
               Save
            </button>
         </form>
      </div>
   );
};

export const ChildComponent: React.FC<any> = ({ item, removeItem, items, setItems, index, errors }) => {
   const [itemName, setItemName] = useState('');
   const [description, setDescription] = useState('');

   useEffect(() => {
      updateFieldChanged(index);
   }, [itemName, description, index]);

   function updateFieldChanged(index: any) {
      let newItem = [...items];
      console.log(newItem);

      if (newItem) {
         newItem[index].name = itemName;
         newItem[index].description = description;
         setItems(newItem);
      }
   }

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
