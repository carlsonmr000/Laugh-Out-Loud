import "./Home.css";
// import JokeCards from "../../components/JokeCards/JokeCards";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import {
   getJokes
} from "../../services/jokes";
import Joke from "../../components/Joke/Joke";
 import { Link, useParams } from "react-router-dom";

const Home = () => {
  // const [joke, setJoke] = useState(null);
  const [jokes, setJokes] = useState([]);
 
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
      <div className="welcome-container">
        <h1>WELCOME</h1>
        <p>Do you have a joke? You’re at the right place! Add a joke to our comedy community!</p>
        <button className="add-joke-button"><Link className="create-link" to={`/create-joke`}>Add a joke</Link></button>
      </div>

<section className="related-section">
<p className="browse-jokes-button"><Link className="jokes-link" to={`/jokes`}>Browse jokes</Link></p>
        <div className="jokes-detail">
          {jokes?.length ? (
            [...jokes]
              .splice(jokes.findIndex((joke) => joke._id === id)+ 1, 4)
              .map((joke) => <Joke key={joke.id} joke={joke}  />)
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Home;