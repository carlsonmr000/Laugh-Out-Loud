import { useEffect, useState } from "react";
import { getJokes } from "../../services/jokes";
import Joke from "../../components/Joke/Joke";
 import { Link } from "react-router-dom";

import "./Jokes.css";
 

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  // const [jokeList, setJokeList] = useState([]);

  // const { id } = useParams();

  
  useEffect(() => {
    const fetchJokes = async () => {
      const results = await getJokes();
      setJokes(results);
    };
    fetchJokes();
  }, []);

  return (
    <>
<section className="related-section">
<p className="browse-jokes-button"><Link className="jokes-link" to={`/jokes`}>Joke List</Link></p>
        <div className="jokes-parent">
          {jokes?.length ? (
            [...jokes]
              .map((joke) => <Joke key={joke.id} joke={joke}  />)
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default Jokes;