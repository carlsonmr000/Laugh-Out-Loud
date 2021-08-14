import { useEffect, useState } from "react";
import { getJokes } from "../../services/jokes";
import Joke from "../../components/Joke/Joke";
import { Link } from "react-router-dom";

import "./Jokes.css";
import Layout from "../../components/Layout/Layout";
 

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
    <Layout>
      {/* <div className="all-jokes">
        {jokeList.length ? (
          jokeList.map((joke) => <Joke key={joke._id} joke={joke} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div> */}

          <div className="jokes-container">
    <p className="browse-jokes-button"><Link className="jokes-link" to={`/jokes`}>Browse jokes</Link></p>
        {jokes.map((joke) => {
          return (
            <Joke
              id={joke.id}
              title={joke.title}
              content={joke.content}
              key={joke.id}
            />
          );
        })}
      </div> 
    </Layout>
  );
};

export default Jokes;