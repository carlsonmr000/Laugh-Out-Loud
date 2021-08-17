import { Link } from "react-router-dom";
import "./Joke.css";

const Joke = (props) => {
  const { id, title, content } = props.joke;
  return (
    
    // <div className="joke-parent">

      <div className="joke-container">

        <div className="title">
        <Link className="joke" to={`/jokes/${id}`}>
          <h3 className="joke-header">{title}</h3>
        </Link>

        </div>
        <h3 className="joke-content">{content}</h3>
      </div>
    // </div>
  );
};

export default Joke;
