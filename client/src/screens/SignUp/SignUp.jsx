import { useState } from 'react'
import './SignUp.css'
import { signup } from '../../services/users'
import { useHistory, Link } from 'react-router-dom'

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signup(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  // const renderError = () => {
  //   const toggleForm = form.isError ? 'danger' : ''
  //   if (form.isError) {
  //     return (
  //       <button type='submit' className={toggleForm}>
  //         {form.errorMsg}
  //       </button>
  //     )
  //   } else {
  //     return <button type='submit'>Sign Up</button>
  //   }
  // }

  const { username, email, password } = form

  return (
    <>
      <div className='signup-parent'>
      <h3 className="signup-message">Sign Up</h3>
      <form onSubmit={onSignUp}>
      <label className="signup-email-label">Email address:</label>
        <input
          required
          type='email'
          name='email'
          value={email}
          placeholder='Enter email'
          onChange={handleChange}
          className="signup-email"
        />
        <label className="signup-username-label">Username:</label>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter username'
          onChange={handleChange}
          className="signup-username"
        />
        <label className="signup-password-label">Password:</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
          className="signup-password"
        />
            <button type="submit" className="signup-submit">
            <h3>Submit</h3>
          </button>
      </form>
      <p>
          Already have an account?{" "}
          <Link to="/log-in" className="login-link">
            Log In!
          </Link>
        </p>
    </div>
    </>
    
  )
}

export default SignUp