import { useState, useEffect } from 'react'
import './JokeCards.css'
import JokeCard from '../JokeCard/JokeCard'
import { getJokes } from '../../services/jokes'

const JokeCards = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const fetchJokes = async () => {
      const allJokes = await getJokes()
      setJokes(allJokes)
    }
    fetchJokes()
  }, [])

  const CARDS = jokes
    .reverse()
    .map((joke, index) =>
      index < 8 ? (
        <JokeCard
          _id={joke._id}
          title={joke.title}
          content={joke.content}
          comment={joke.comment}
          key={index}
        />
      ) : null
    )

  return (
    <div className='joke-cards'>
      <div className='latest'>Browse Jokes</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default JokeCards