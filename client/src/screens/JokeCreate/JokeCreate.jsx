import { useState, useEffect } from "react";
import "./JokeCreate.css";
// import Layout from '../../components/Layout/Layout'
import { Redirect } from "react-router-dom";
import { verify } from "../../services/users";
import { createJoke } from "../../services/jokes";

const JokeCreate = (props) => {
  const [joke, setJoke] = useState({
    title: "",
    content: "",
    user_id: props.user?.id,
  });

  const [isCreated, setCreated] = useState(false);
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
    };
    addJoke();
  };
  if (isCreated) {
    return <Redirect to={`/jokes`} />;
  }

  return !userBool && userBool !== null ? (
    <Redirect to="/log-in" />
  ) : (
    <div className="create-parent">
      <form className="create-form" onSubmit={handleSubmit}>
        <label htmlFor="title" className="create-title">
          Title:
        </label>
        <input
          className="create-input-title"
          placeholder="Title"
          value={joke.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <label htmlFor="content" className="create-content">
          Content:
        </label>
        <textarea
          className="create-textarea-content"
          rows={5}
          placeholder="Content"
          value={joke.content}
          name="content"
          required
          onChange={handleChange}
        />
        <button type="submit" className="create-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JokeCreate;
