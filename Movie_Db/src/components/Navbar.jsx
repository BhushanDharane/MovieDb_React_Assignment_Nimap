import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
   return (

       <nav className="navbar">
           <h1 className="title">Movie Db</h1>
           <ul>
               <li><Link to="/">Popular</Link></li>
               <li><Link to="/top-rated">Top Rated</Link></li>
               <li><Link to="/upcoming">Upcoming</Link></li>
               <input type="text" placeholder="Movie Name" />
               <li><Link to="/search">Search</Link></li>
           </ul>
       </nav>
   );
};

export default Navbar;