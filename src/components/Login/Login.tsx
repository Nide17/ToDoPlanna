import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

// This is the login page
// Just a centered form for login styled with tailwind css

function Login() {

  const url = import.meta.env.VITE_BACKEND_URL
  const history = useNavigate()

  // ERROR, SUCCESS, LOADING
  const [authError, setAuthError] = useState<string>('')
  const [authSuccess, setAuthSuccess] = useState<boolean>(false)
  const [authLoading, setAuthLoading] = useState<boolean>(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Function to validate the form and login
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Check for empty fields
    if (!email || !password) {
      setAuthError('Please fill in all fields')
      return;
    }

    // Check for valid email address 
    const re = /\S+@\S+\.\S+/
    if (!re.test(email)) {
      setAuthError('Please enter a valid email address')
      return;
    }

    // Check password length
    if (password.length < 6) {
      setAuthError('Password must be at least 6 characters')
      return;
    }

    // login
    try {
      // clear error message
      setAuthError('')

      // set loading to true when loading user profile data from server and before setting user state
      setAuthLoading(true)

      // login user - http://localhost:5000/auth/login
      const response = await axios.post(`${url}/auth/login`, { email, password })
      console.log(response.data)

      if (response.data) {
        // set success message
        setAuthSuccess(true)

        // set loading to false
        setAuthLoading(false)

        // set token & user in local storage
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))

        // redirect to todayTodos
        setTimeout(() => {
          history('/todayTodos')
        }, 3000)
      }
      else {
        // set error message
        setAuthError('Error logging in!')
        // set loading to false
        setAuthLoading(false)
        console.log(response)
      }

    } catch (error) {
      // set error message
      setAuthError('Error logging in!')

      // set loading to false
      setAuthLoading(false)
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-image-login bg-cover bg-center bg-no-repeat">

      <form className="flex flex-col items-center justify-center w-5/6 sm:w-2/5 h-2/3 bg-blue-500 rounded-lg sm:hover:scale-110 sm:hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg shadow-white" onSubmit={handleSubmit}>

        {/* NOTIFICATION - LOADING, ERROR, SUCCESS */}
        <div className="flex-none w-120 h-16 flex items-center justify-center text-center">
          <a href="/" className='p-1 font-bold'>
            <span className='block text-4xl text-blue-100 leading-8'>ToDoPlanna</span>
            <span className='block text-[12px] text-slate-800 underline underline-offset-4 leading-6'>Organize, be productive</span>
          </a>
        </div>

        <h1 className="text-4xl font-bold my-8">
          Login
        </h1>
        <input
          className="w-5/6 sm:w-2/3 h-10 my-4 text-center sm:my-2 px-2 rounded-lg"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="w-5/6 sm:w-2/3 h-10 my-4 text-center sm:my-2 px-2 rounded-lg"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="w-5/6 sm:w-2/3 h-10 my-4 text-center sm:my-2 rounded-lg bg-slate-900 text-white">
          Login
        </button>

        <p className="text-center text-white text-sm underline underline-offset-4">
          <a href="/signup">Don't have an account? Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
