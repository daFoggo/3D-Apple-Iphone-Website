import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App = () => {
  return (
    <main className="bg-black">
      <NavBar></NavBar>
      <Hero></Hero>
      <Highlights></Highlights>
    </main>
  )
}

export default App