import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden mr-6">
        <GiHamburgerMenu className="h-7 w-7"/>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/dashBoard">Dashboard</Link></li>
        <li><Link to="/myPortfolio">My Portfolio</Link></li>
      </ul>
    </div>
    <span className="btn btn-ghost normal-case text-xl text-center">Luxury E-commerce Ltd</span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
       <li><Link to="/home">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/dashBoard">Dashboard</Link></li>
        <li><Link to="/myPortfolio">My Portfolio</Link></li>
    </ul>
  </div>
</div>

)
};

export default Header;
