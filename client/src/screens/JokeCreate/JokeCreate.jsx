import { useState } from 'react'
import './JokeCreate.css'
import Layout from '../../components/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createJoke } from '../../services/jokes'

const JokeCreate = (props) => {

    const [joke, setJoke] = useState({
            title: '',
            content: ''
        })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { title, value } = event.target
        setJoke({
                ...joke,
                [title]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createJoke(joke)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/jokes`} />
    }
    return (
        <Layout>
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-title"
                    placeholder='Title'
                    value={joke.title}
                    name='title'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <textarea
                    className="textarea-content"
                    rows={5}
                    placeholder='Content'
                    value={joke.content}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )
}

export default JokeCreate