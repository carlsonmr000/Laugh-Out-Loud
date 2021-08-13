import { useState, useEffect } from 'react'
import './JokeEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getOneJoke, updateJoke } from '../../services/jokes'

const JokeEdit = (props) => {
  const [joke, setJoke] = useState({
    title: '',
    content: ''
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchJoke = async () => {
      const joke = await getOneJoke(id)
      setJoke(joke)
    }
    fetchJoke()
  }, [id])

  const handleChange = (event) => {
    const { title, value } = event.target
    setJoke({
      ...joke,
      [title]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateJoke(id, joke)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/jokes/${id}`} />
  }

  return (
    <Layout>
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
    </Layout>
  )
}

export default JokeEdit