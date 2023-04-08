import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

// CONTEXT
import { createContext } from 'react'
export const AuthContext = createContext({} as any)
export const UserTasksContext = createContext({} as any)

const App = () => {

  return (
    <div className="w-screen h-screen bg-gray-800 text-white text-lg font-serif">
      {/* PROVIDING CONTEXT TO ALL CHILDREN */}
      <AuthContext.Provider value={{}}> 
        <UserTasksContext.Provider value={{}}>
          <Header />
          <Landing />
          <About />
          <Contact />
          <Footer />
        </UserTasksContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default App
