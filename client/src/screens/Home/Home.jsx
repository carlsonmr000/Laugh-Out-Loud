import './Home.css'
import JokeCards from '../../components/JokeCards/JokeCards'
import Layout from '../../components/Layout/Layout'
import { useState, useEffect } from "react";
import {
  // getOneJoke,
  getJokes
} from "../../services/jokes";
// import Joke from "../../components/Joke/Joke";
// import { verify } from "../../services/users";
// import { useParams } from "react-router-dom";

const Home = (props) => {

  // const [joke, setJoke] = useState(null);
  const [jokes, setJokes] = useState(null);

  const [isLoaded, setLoaded] = useState(false);
  // const [userExists, setUserExists] = useState(null);
  // const [toggleFetch, setToggleFetch] = useState(false);
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchJoke = async () => {
  //     const joke = await getOneJoke(id);
  //     setJoke(joke);
  //     setLoaded(true);
  //   };
  //   fetchJoke();
  // }, [id, toggleFetch]);

  useEffect(() => {
    const fetchJokes = async () => {
      const results = await getJokes();
      setJokes(results);
    };
    fetchJokes();
  }, []);

  // useEffect(() => {
  //   const checkSigned = async () => {
  //     const valid = await verify();
  //     setUserExists(valid ? true : false);
  //   };
  //   checkSigned();
  // }, []);

  if (!isLoaded) {
    return <h1>Cannot load jokes</h1>;
  }


  return (
    <Layout>
      <div className="home">
        <JokeCards />
      </div>
      {/* <section className="related-section">
        <h1 className="related">Browse Jokes</h1>
        <div className="all-jokes-detail">
          {jokes?.length ? (
            [...jokes]
              .splice(jokes.findIndex((joke) => joke._id === id)+ 1, 4)
              .map((joke) => <Joke key={joke._id} joke={joke} />)
          ) : (
            <h2>Failed to load jokes</h2>
          )}
        </div>
      </section> */}
    </Layout>
  )
}

export default Home