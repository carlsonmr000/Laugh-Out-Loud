import { useState, useEffect } from 'react'
import './JokeDetail.css'
import Layout from '../../components/Layout/Layout'
import { getOneJoke, deleteJoke } from '../../services/jokes'
import { useParams, Link } from 'react-router-dom'

const JokeDetail = (props) => {

    const [joke, setJoke] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchJoke = async () => {
            const joke = await getOneJoke(id)
            setJoke(joke)
            setLoaded(true)
        }
        fetchJoke()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <div className="joke-detail">
                <div className="detail">
                    <div className="title">{joke.title}</div>
                    <div className="content">{joke.content}</div>
                    <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/jokes/${joke._id}/edit`}>Edit</Link></button>
                        <button className="delete-button" onClick={() => deleteJoke(joke._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default JokeDetail