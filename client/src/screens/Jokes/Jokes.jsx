import { useState, useEffect } from 'react'
import './Jokes.css'
import Joke from '../../components/Joke/Joke'
import Layout from '../../components/Layout/Layout'
import Search from '../../components/Search/Search'

import { getJokes } from '../../services/jokes'

const Jokes = () => {
  const [jokes, setJokes] = useState([])
  const [searchResult, setSearchResult] = useState([])
 
  useEffect(() => {
    const fetchJokes = async () => {
      const allJokes = await getJokes()
      setJokes(allJokes)
      setSearchResult(allJokes)
    }
    fetchJokes()
  }, [])

  const handleSearch = (event) => {
    const results = jokes.filter((joke) =>
      joke.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
  }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className='jokes'>
        {searchResult.map((joke, index) => {
          return (
            <Joke
              _id={joke._id}
              title={joke.title}
              content={joke.content}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Jokes