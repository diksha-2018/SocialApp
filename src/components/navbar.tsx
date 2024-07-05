import React from 'react';
import { NavLink } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import './navbar.css';

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (
    <div className="navbar">
      <div className="nav-links">
        <NavLink 
          className={({ isActive }) => isActive ? "link1 active-link" : "link1"} 
          to="/" 
        >
          Home
        </NavLink>
        {!user ? (
          <NavLink 
            className={({ isActive }) => isActive ? "login active-link" : "login"} 
            to="/login" 
          >
            Login
          </NavLink>
        ) : (
          <NavLink 
            className={({ isActive }) => isActive ? "login active-link" : "login"} 
            to="/createpost" 
          >
            Create Post
          </NavLink>
        )}
      </div>
      {user && (
        <div className="div2">
          <img src="https://img.icons8.com/material-outlined/512/guest-male.png" alt="User Icon" />
          <div className="user-info">
            <p className="user">{user?.displayName}</p>
            <button className="signout" onClick={signUserOut}>Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
