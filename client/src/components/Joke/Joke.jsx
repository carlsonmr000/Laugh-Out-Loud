import { Link } from "react-router-dom";
import "./Joke.css";

const Joke = (props) => {
  const { id, title, content, comment} = props.joke;
  return (

      <article>
        <div className="joke-header">
        <Link className="joke" to={`/jokes/${id}`}>
      <h3>{title}</h3></Link>
        </div>
        <div className="joke-content">
             <h3>{content}</h3>
        </div>
        <div className="joke-comment">
          <p>{comment}</p>
        </div>
      </article>
  );
};

export default Joke;