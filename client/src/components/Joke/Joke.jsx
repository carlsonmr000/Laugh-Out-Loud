import { Link } from "react-router-dom";
import "./Joke.css";

const Joke = (props) => {
  const { jokeID, title, content, comment} = props.joke;
  return (
    <Link className="joke" to={`/jokes/${jokeID}`}>
      <article>
        <div className="joke-header">
          <h3>{title}</h3>
        </div>
        <div className="joke-content">
             <h3>{content}</h3>
        </div>
        <div className="joke-comment">
          <p>{comment}</p>
        </div>
      </article>
    </Link>
  );
};

export default Joke;