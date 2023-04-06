import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="w-screen h-screen bg-gray-800 text-white text-lg font-serif">
      <Header />
      <Landing />
      <About />
      <Contact />
      <Footer />

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )

}

export default App
