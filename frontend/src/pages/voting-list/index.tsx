import React, { useEffect, useState } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import api from '../../services/api';

interface Voting {
   id: string;
   name: string;
   end_date: string;
   created_by: string;
   voted: boolean;
}

const VotingList: React.FC = () => {
   const [votings, setVotings] = useState([]);

   useEffect(() => {
      api.get('/votings/').then((response) => {
         setVotings(response.data);
      });
   }, []);

   return (
      <div className="VotingList">
         <h1 className="title">Voting List</h1>
         <div className="list">
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Created by</th>
                     <th>End date</th>
                     <th>Active</th>
                  </tr>
               </thead>
               <tbody>
                  {votings &&
                     votings.map((voting: Voting) => (
                        <tr key={voting.id} className={voting.voted ? 'deactivated' : ''}>
                           <td>
                              <Link to={`/voting/${voting.id}`}> {voting.name} </Link>
                           </td>
                           <td>
                              <Link to={`/profile/${voting.created_by}`}> {voting.created_by} </Link>
                           </td>
                           <td> {voting.end_date} </td>
                           <td> {voting.voted ? 'false' : 'true'} </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default VotingList;
