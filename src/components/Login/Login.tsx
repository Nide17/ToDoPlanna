// This is the login page
// Just a centered form for login styled with tailwind css

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-image-login bg-cover bg-center bg-no-repeat">
      <form className="flex flex-col items-center justify-center w-5/6 sm:w-2/5 h-2/3 bg-blue-500 rounded-lg sm:hover:scale-110 sm:hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg shadow-white">

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
          type="text"
          placeholder="Name"
        />
        <input
          className="w-5/6 sm:w-2/3 h-10 my-4 text-center sm:my-2 px-2 rounded-lg"
          type="password"
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
