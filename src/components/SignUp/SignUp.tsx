import { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const SignUp = () => {

  // URL for the backend
  const url = 'https://to-do-planna-nest.up.railway.app/' || 'http://localhost:3000/'

  // ERROR, SUCCESS, LOADING
  const [authError, setAuthError] = useState('')
  const [authSuccess, setAuthSuccess] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)

  // Function to validate the form and create a new user
  const createUser = async (username: string, email: string, password: string, password2: string) => {

    // Check for empty fields
    if (!username || !email || !password || !password2) {
      setAuthError('Please fill in all fields')
      return;
    }

    // Check for valid email address 
    const re = /\S+@\S+\.\S+/
    if (!re.test(email)) {
      setAuthError('Please enter a valid email address')
      return;
    }

    // Check if passwords match
    if (password !== password2) {
      setAuthError('Passwords do not match')
      console.log('Passwords do not match')
      return;
    }

    // Check password length
    if (password.length < 6) {
      setAuthError('Password must be at least 6 characters')
      return;
    }

    // Check username length
    if (username.length < 3 || username.length > 30) {
      setAuthError('Username must be between 3 and 30 characters')
      return
    }

    // create user
    try {
      // clear error message
      setAuthError('')
      // set loading to true when loading user profile data from server and before setting user state
      setAuthLoading(true)

      // create user - http://localhost:3000/users
      const response = await axios.post(`${url}/users`, { username, email, password })

      // set success message
      setAuthSuccess(true)
      return response
    }
    catch (err) {
      // set error message
      setAuthError('Error signing up!')
      console.log(err)
    }

    finally {
      // set loading to false when user state is set
      setAuthLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-image-login bg-cover bg-center bg-no-repeat">
      <Form
        createUser={createUser}
        authError={authError}
        authSuccess={authSuccess}
        authLoading={authLoading} />
    </div>
  )
}

export default SignUp
