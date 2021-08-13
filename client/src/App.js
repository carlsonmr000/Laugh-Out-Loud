
import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Jokes from './screens/Jokes/Jokes'
import JokeCreate from './screens/JokeCreate/JokeCreate'
import JokeEdit from './screens/JokeEdit/JokeEdit'
import JokeDetail from './screens/JokeDetail/JokeDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jokes" component={Jokes} />
        <Route path="/add-joke" component={JokeCreate} />
        <Route exact path="/jokes/:id/edit" component={JokeEdit} />
        <Route exact path="/jokes/:id" component={JokeDetail} />
      </Switch>
    </div>
  )
}

export default App