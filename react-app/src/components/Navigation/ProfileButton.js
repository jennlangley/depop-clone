import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { NavLink } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useCart } from "../../context/CartContext";

function ProfileButton({ user, isLoaded }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const { closeCart } = useCart();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    closeCart();
    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu, closeCart]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    // isLoaded &&
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li className="dropdownLink"><NavLink exact to={`/users/${user.username}`}>Profile</NavLink></li>
            
            <li className="dropdownLink"><NavLink exact to="/products/manage">Your Products</NavLink></li>
            <li className="dropdownLink"><NavLink exact to="/orders">Orders</NavLink></li>
            <li className="dropdownLink">
              <button className="buttonDesign" style={{"width": "100%"}} onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li className="dropdownButton">
              <OpenModalButton
              buttonText=<button className="buttonDesign" style={{"width": "100%"}}>Log In</button>
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
              />
            </li>
            <li className="dropdownButton">
              <OpenModalButton
              buttonText=<button className="buttonDesign" style={{"width": "100%"}}>Sign Up</button>
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
              />
            </li>
            
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
