import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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
                     <td>2021/01/01</td>
                     <td>true</td>
                  </tr>
                  <tr>
                     <td>
                        <Link to="/voting2">Voting 2</Link>
                     </td>
                     <td>
                        <Link to="/profile/user">User</Link>
                     </td>
                     <td>2021/01/01</td>
                     <td>true</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Home;
