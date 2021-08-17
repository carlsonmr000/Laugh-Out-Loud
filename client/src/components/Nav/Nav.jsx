// import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signout } from "../../services/users";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = (props) => {
  // const [userExists, setUserExists] = useState(null);
  // const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();


  // useEffect(() => {
  //   const checkSigned = async () => {
  //     const valid = await verify();
  //     setUserExists(valid ? true : false);
  //   };
  //   checkSigned();
  // }, []);

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
    props.setUser(false);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  // const handleClick = () => {
  //   props.user ? history.push("/create-joke") : history.push("/log-in")
  // }

  return (
    <header>
      {/* <FontAwesomeIcon
        className={showMenu ? `fa-times` : `fa-bars`}
        icon={showMenu ? faTimes : faBars }
        onClick={() => setShowMenu(!showMenu)}
      /> */}
      <Link to="/" className="nav">
        <h1 className="navbar-title">LaughOut</h1>
        <h1 className="navbar-title-two">Loud</h1>
        

      </Link>

      <nav className="navbar">
        <div className="navbar-left-container">
          <Link to="/" className="home">Home</Link>
          {props.user ? (
            <>
              <Link to="/create-joke" className="add-joke-link">Add Joke</Link>
              <button onClick={handleClick}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/log-in" className="login">LogIn</Link>
              <Link to="/sign-up" className="signup">Sign Up</Link>
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
