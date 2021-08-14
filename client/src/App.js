
import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Jokes from './screens/Jokes/Jokes'
import JokeCreate from './screens/JokeCreate/JokeCreate'
import JokeEdit from './screens/JokeEdit/JokeEdit'
import JokeDetail from './screens/JokeDetail/JokeDetail'
import LogIn from './screens/LogIn/LogIn'
import SignUp from './screens/SignUp/SignUp'
import { Route, Switch } from 'react-router-dom'
import { verify } from "./services/users";
import { useState, useEffect } from "react";



const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      setUser(user ? user : null);
    };
    fetchUser();
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jokes" component={Jokes} />
        <Route path="/add-joke" component={JokeCreate} />
        <Route exact path="/jokes/:id/edit" component={JokeEdit} />
        <Route exact path="/jokes/:id" component={JokeDetail} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/log-in"><LogIn setUser={setUser} /></Route>
        <Route exact path="/sign-up"><SignUp setUser={setUser} /></Route>
      </Switch>
    </div>
  )
}

export default App