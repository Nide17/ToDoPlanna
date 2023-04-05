import Landing from './components/Landing/Landing'
import Header from './components/Header/Header'
import Content from './components/Landing/Content'

const App = () => {

  return (
    <div className="w-screen h-screen bg-gray-800 text-white text-lg font-serif">
      <Header />
      <Landing />
      <Content />
    </div>
  )

}

export default App
