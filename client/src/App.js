import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import Jokes from "./screens/Jokes/Jokes";
import JokeCreate from "./screens/JokeCreate/JokeCreate";
import JokeEdit from "./screens/JokeEdit/JokeEdit";
import JokeDetail from "./screens/JokeDetail/JokeDetail";
import LogIn from "./screens/LogIn/LogIn";
import SignUp from "./screens/SignUp/SignUp";
import { Route, Switch } from "react-router-dom";
import { verify } from "./services/users";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [user, setUser] = useState(null);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      setUser(user ? user : null);
    };
    fetchUser();
  }, [toggleFetch]);

  return (
    <div className="app">
      <Layout setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} user={user} setUser={setUser}> 
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/jokes">
            <Jokes user={user} />
          </Route>
          <Route exact path="/create-joke">
            <JokeCreate user={user} />
          </Route>
          <Route exact path="/jokes/:id/edit">
            <JokeEdit user={user} />
          </Route>
          <Route exact path="/jokes/:id">
            <JokeDetail user={user} />
          </Route>
          <Route exact path="/log-in">
            <LogIn setUser={setUser} />
          </Route>
          <Route exact path="/sign-up">
            <SignUp setUser={setUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
