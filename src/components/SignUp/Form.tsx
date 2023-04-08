import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = ({ createUser, authLoading, authError, authSuccess }: any) => {

  const redirect = useNavigate()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await createUser(name, email, password, password2)
    response && setTimeout(() => {
      redirect('/login')
    }, 3000)
  }

  return (
    <form className="flex flex-col items-center justify-center w-5/6 sm:w-2/5 h-4/5 bg-blue-500 rounded-lg sm:hover:scale-110 sm:hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg shadow-white" onSubmit={handleSubmit}>

      <div className="flex-none w-120 h-16 flex items-center justify-center text-center">
        <a href="/" className='p-1 font-bold'>
          <span className='block text-4xl text-blue-100 leading-8'>ToDoPlanna</span>
          <span className='block text-[12px] text-slate-800 underline underline-offset-4 leading-6'>Organize, be productive</span>
        </a>
      </div>

      {/* NOTIFICATION - LOADING, ERROR, SUCCESS */}
      {authLoading && <small className="text-yellow-500 text-center animate-ping">Loading ...</small>}
      {authError && <small className="text-red-700 text-center animate-bounce">{authError}</small>}
      {authSuccess && <small className="text-green-500 text-center animate-bounce">Success, login!</small>}

      <h1 className="text-4xl font-bold mb-6">
        SignUp
      </h1>

      <input
        className="w-5/6 sm:w-2/3 h-9 my-3 text-center sm:my-2 px-2 rounded-lg"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-5/6 sm:w-2/3 h-9 my-3 text-center sm:my-2 px-2 rounded-lg"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-5/6 sm:w-2/3 h-9 my-3 text-center sm:my-2 px-2 rounded-lg"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="w-5/6 sm:w-2/3 h-9 my-3 text-center sm:my-2 px-2 rounded-lg"
        type="password"
        placeholder="Verify"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button type="submit" className="w-5/6 sm:w-2/3 h-9 my-3 text-center sm:my-2 rounded-lg bg-slate-900 text-white">
        SignUp
      </button>

      <p className="text-center text-white text-sm underline underline-offset-4">
        <a href="/login">Already have an account? Login</a>
      </p>
    </form>
  );
}

export default Form;
