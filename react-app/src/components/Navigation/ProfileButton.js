import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { NavLink } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user, isLoaded }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

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
            <li className="dropdownLink"><NavLink exact to={`/${user.username}`} className="dropdownLink">Profile</NavLink></li>
            
            <li className="dropdownLink"><NavLink exact to="/products/manage" className="dropdownLink">Your Products</NavLink></li>
            <li className="dropdownLink"><NavLink exact to="/orders" className="dropdownLink">Orders</NavLink></li>
            <li className="dropdownLink">
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li className="dropdownLink">
              <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
              />
            </li>
            <li className="dropdownLink">
              <OpenModalButton
              buttonText="Sign Up"
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
