import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { verify, signout } from "../../services/users";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = () => {
  const [userExists, setUserExists] = useState(null);
  // const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();


  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);



//   useEffect(() => {
//     const handleResize = () => {
//       // if we're at desktop size
//       if (window.innerWidth > 425) {
//         // untoggle the hamburger menu 
//         setShowMenu(false);
//       }
//     }
//     // add an event listener to the resize event on the window
//     window.addEventListener('resize', handleResize);
//     // unmounts we'll remove that event listener
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     }
//   }, []);

  const handleClick = async () => {
   await signout();
   setUserExists(false)
      history.push("/");
     
}

  return (
    <header>
      {/* <FontAwesomeIcon
        className={showMenu ? `fa-times` : `fa-bars`}
        icon={showMenu ? faTimes : faBars }
        onClick={() => setShowMenu(!showMenu)}
      /> */}
      <Link to="/" className="nav">
        <h1 className="navbar-title">LaughOutLOUD</h1>
      </Link>

      <nav className="navbar">
        <div className="navbar-left-container">
          <Link to="/">Home</Link>
          { userExists ? (
            <>
              <Link to="/add-joke">Add Joke</Link>
              <button onClick={handleClick}>Sign Out</button>
            
            </>
          ) : (
            <>
            <Link to="/log-in">LogIn</Link>
            <Link to="/sign-up">SignUp</Link>
          </>
        
          )}
        </div>


        {/* {showMenu ?  <div className="mobile-navbar-container">
           <Link to="/" className="nav-link">Home</Link>
          {userExists ? (
            <>
              <Link to="/sign-out" className="nav-link">Sign Out</Link>
            </>
          ) : (
            <Link to="/sign-up" className="nav-link">Log In/Register</Link>
            <Link to="/sign-up" className="nav-link">Sign Up</Link>
          )} 
        </div> : <></> } */}
      </nav>

    </header>
  );
};

export default Nav;