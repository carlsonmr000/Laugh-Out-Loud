import { Link, useHistory } from "react-router-dom";
import { signout } from "../../services/users";
import "./Nav.css";

const Nav = (props) => {

  const history = useHistory();

  const handleClick = async () => {
    await signout();
    props.setUser(false);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <header className="navbar">
      <Link to="/" className="nav-link">
        <h1 className="navbar-title">LaughOutLOUD</h1>
      </Link>

      <nav className="navbar-right">
        <div className="navbar-right-container">
          <Link to="/" className="item">Home</Link>
          {props.user ? (
            <>
              <Link to="/create-joke" className="item">Add Joke</Link>
              <button className="item" onClick={handleClick}>Sign-Out</button>
            </>
          ) : (
            <>
              <Link to="/log-in" className="item">Log-In</Link>
              <Link to="/sign-up" className="item">Sign-Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  ); 
};

export default Nav;
