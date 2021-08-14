import { useState, useEffect } from 'react'
import './JokeDetail.css'
import Layout from '../../components/Layout/Layout'
import { getOneJoke, deleteJoke } from '../../services/jokes'
import { useParams, Link, useHistory } from 'react-router-dom'

const JokeDetail = (props) => {

    const [joke, setJoke] = useState([])
    const [isLoaded, setLoaded] = useState(false)
     const history = useHistory();
    const { id } = useParams()
 

    useEffect(() => {
        const fetchJoke = async (jokeID) => {
            const joke = await getOneJoke(jokeID)
            setJoke(joke)
            setLoaded(true)
        }
        fetchJoke(id)
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    const handleSubmit = () => {
        const deleteOneJoke = async () => {
          await deleteJoke(id);
          setTimeout(() => {
            history.push("/jokes");
          }, 500);
        };
        deleteOneJoke();
      };

    return (
        <Layout>
            <div className="joke-detail">
                    <div className="title">{joke.title}</div>
                    <div className="content">{joke.content}</div>
                    <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/jokes/${joke._id}/edit`}>Edit</Link></button>
                        <button className="delete-button" to="/jokes" onClick={handleSubmit}>Delete</button>
                    </div>
            </div>
        </Layout>
    )
}

export default JokeDetail