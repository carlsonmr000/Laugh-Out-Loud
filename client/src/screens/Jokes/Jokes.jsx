import { useEffect, useState } from "react";
import { getJokes } from "../../services/jokes";
import Joke from "../../components/Joke/Joke";
 import { Link, useParams } from "react-router-dom";

import "./Jokes.css";
import Layout from "../../components/Layout/Layout";
 

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
   const [jokeList, setJokeList] = useState([]);

  const { id } = useParams();

  
  useEffect(() => {
    const fetchJokes = async () => {
      const results = await getJokes();
      setJokes(results);
    };
    fetchJokes();
  }, []);

  return (
    <Layout>
<section className="related-section">
<p className="browse-jokes-button"><Link className="jokes-link" to={`/jokes`}>Joke List</Link></p>
        <div className="jokes-detail">
          {jokes?.length ? (
            [...jokes]
              .map((joke) => <Joke key={joke.id} joke={joke}  />)
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Jokes;