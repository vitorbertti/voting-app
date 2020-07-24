import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const VotingList: React.FC = () => {
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
                  <tr>
                     <td>
                        <Link to="/voting1">Voting 1</Link>
                     </td>
                     <td>
                        <Link to="/profile/user">User</Link>
                     </td>
                     <td>01/01/2021</td>
                     <td>true</td>
                  </tr>
                  <tr>
                     <td>
                        <Link to="/voting2">Voting 2</Link>
                     </td>
                     <td>
                        <Link to="/profile/user">User</Link>
                     </td>
                     <td>01/01/2021</td>
                     <td>true</td>
                  </tr>
                  <tr>
                     <td>
                        <Link to="/voting2">Voting 3</Link>
                     </td>
                     <td>
                        <Link to="/profile/user2">User2</Link>
                     </td>
                     <td>30/12/2020</td>
                     <td>true</td>
                  </tr>
                  <tr>
                     <td>
                        <Link to="/voting2">Voting 4</Link>
                     </td>
                     <td>
                        <Link to="/profile/user5">User5</Link>
                     </td>
                     <td>15/10/2020</td>
                     <td>true</td>
                  </tr>
                  <tr>
                     <td>
                        <Link to="/voting2">Voting 5</Link>
                     </td>
                     <td>
                        <Link to="/profile/user6">Use6</Link>
                     </td>
                     <td>03/08/2020</td>
                     <td>true</td>
                  </tr>
                  <tr>
                     <td>
                        <Link to="/voting2">Voting 6</Link>
                     </td>
                     <td>
                        <Link to="/profile/user">User</Link>
                     </td>
                     <td>01/08/2020</td>
                     <td>true</td>
                  </tr>
                  <tr className="deactivated">
                     <td>
                        <Link to="/voting2">Voting 7</Link>
                     </td>
                     <td>
                        <Link to="/profile/user2">User2</Link>
                     </td>
                     <td>10/05/2020</td>
                     <td>false</td>
                  </tr>
                  <tr className="deactivated">
                     <td>
                        <Link to="/voting2">Voting 8</Link>
                     </td>
                     <td>
                        <Link to="/profile/user3">User3</Link>
                     </td>
                     <td>28/04/2020</td>
                     <td>false</td>
                  </tr>
                  <tr className="deactivated">
                     <td>
                        <Link to="/voting2">Voting 9</Link>
                     </td>
                     <td>
                        <Link to="/profile/user">User</Link>
                     </td>
                     <td>04/03/2020</td>
                     <td>false</td>
                  </tr>
                  <tr className="deactivated">
                     <td>
                        <Link to="/voting2">Voting 10</Link>
                     </td>
                     <td>
                        <Link to="/profile/user8">User8</Link>
                     </td>
                     <td>11/01/2020</td>
                     <td>false</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default VotingList;
