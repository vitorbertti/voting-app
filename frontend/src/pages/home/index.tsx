import React, { useState, useEffect } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import api from '../../services/api';

interface Voting {
   id: string;
   name: string;
   end_date: string;
   created_by: string;
}

const Home: React.FC = () => {
   const [votings, setVotings] = useState([]);

   useEffect(() => {
      api.get('/votings/').then((response) => {
         setVotings(response.data.slice(0, 3));
      });
   }, []);

   return (
      <div className="Home">
         <h1 className="title">Welcome</h1>
         <div className="recent-voting">
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Created by</th>
                     <th>End date</th>
                  </tr>
               </thead>
               <tbody>
                  {votings &&
                     votings.map((voting: Voting) => (
                        <tr key={voting.id}>
                           <td>
                              <Link to={`/voting/${voting.id}`}> {voting.name} </Link>
                           </td>
                           <td>
                              <Link to={`/profile/${voting.created_by}`}> {voting.created_by} </Link>
                           </td>
                           <td> {voting.end_date} </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Home;
