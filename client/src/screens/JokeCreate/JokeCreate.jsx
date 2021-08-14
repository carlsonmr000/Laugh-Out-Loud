import { useState, useEffect } from 'react'
import './JokeCreate.css'
import Layout from '../../components/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { verify } from "../../services/users";
import { createJoke } from '../../services/jokes'

const JokeCreate = (props) => {

    const [joke, setJoke] = useState({
            title: '',
            content: ''
        })

    const [isCreated, setCreated] = useState(false)
    const [userBool, setUserBool] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
          const userExists = await verify();
          setUserBool(userExists ? true : false);
        };
        checkUser();
      }, []);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setJoke({
          ...joke,
          [name]: value,
        });
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();
        const addJoke = async () => {
          const created = await createJoke(joke);
          setCreated({ created });
        }
        addJoke();
      };
    if (isCreated) {
        return <Redirect to={`/jokes`} />
    }

    return !userBool && userBool !== null ?(
        <Redirect to="/login" />
      ) : (
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