import { useState, useEffect } from 'react'
import './JokeEdit.css'
import { useParams, Redirect, useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getOneJoke, updateJoke } from '../../services/jokes'

const JokeEdit = (props) => {
  const [joke, setJoke] = useState({
    title: '',
    content: '',
    user_id: props.user?.id
  })



  const params = useParams()
  const history = useHistory()
  // console.log(params.id)

  const [isUpdated, setUpdated] = useState(false)

  useEffect(() => {
    const fetchJoke = async (jokeID) => {
      const joke = await getOneJoke(jokeID)
      setJoke(joke)
    }
    fetchJoke(params.id)
  }, [params.id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setJoke({
      ...joke,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateJoke(params.id, joke)
    setUpdated(updated)
      history.push('/jokes')
  }

  if (isUpdated) {
    return <Redirect to={`/jokes`} />
  }

  return (
    <>
      <div className='joke-edit'>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-title'
            placeholder='Title'
            value={joke.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className='textarea-content'
            rows={5}
            placeholder='content'
            value={joke.content}
            name='content'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default JokeEdit