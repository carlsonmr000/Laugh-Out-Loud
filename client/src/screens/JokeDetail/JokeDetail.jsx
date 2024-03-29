import { useState, useEffect } from "react";
import "./JokeDetail.css";
import { getOneJoke, deleteJoke } from "../../services/jokes";
import { useParams, useHistory } from "react-router-dom";

const JokeDetail = (props) => {
  const [user, setUser] = useState({});
  const [joke, setJoke] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchJoke = async (jokeID) => {
      const joke = await getOneJoke(jokeID);
      setJoke(joke);
      setUser(props.user);
      setLoaded(true);
    };
    fetchJoke(id);
  }, [id, props.user]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = () => {
    const deleteOneJoke = async () => {
      await deleteJoke(id);
      setTimeout(() => {
        history.push("/jokes");
      }, 500);
    };
    deleteOneJoke();
  };

  const handleClick = () => {
    history.push(`/jokes/${id}/edit`);
  };

  return (
    <div>
      <div className="joke-detail">
        <div className="detail-title">{joke.title}</div>
        <div className="content-container">
          <div className="detail-content">{joke.content}</div>
        </div>
        <div className="button-container">
          {user ? (
            <>
              {" "}
              <button className="detail-edit" onClick={handleClick}>
                Edit
              </button>
              <button
                className="detail-delete"
                to="/jokes"
                onClick={handleSubmit}
              >
                Delete
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default JokeDetail;