import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../common/UserContext";




function MyNav({ logout }) {

  const {  currentUser } = useContext(UserContext);


  
  function authNav() {
    return (
      <ul>
        <li>
          <NavLink to="/profile">
            Your Profile
          </NavLink>
        </li>
        <div>
        <NavLink>
          <button onClick={logout}>
              Logout
            </button>
        </NavLink>
          
        </div>
      </ul>
    );
  }

  
  function guestNav() {
    return (
      <ul>

        <div>
          <Link to="/">
                WarmUp
          </Link >

          <Link to="/login">
            <button>
              Login
            </button>      
          </Link >

          
        </div>

      </ul >
    );
  }



  const fetchNav = () => {

      return (
        <div>
          <div>
            <div>
              <Link to="/">
                WarmUp
              </Link >
            </div>
            {currentUser ? (<div> Player {currentUser.username}!</div>) : "" }
          </div>
          {currentUser ? authNav() : guestNav()}
        </div>
      );

  }

  return (
    <div>
      {fetchNav()}
    </div>
  );
}

export default MyNav;