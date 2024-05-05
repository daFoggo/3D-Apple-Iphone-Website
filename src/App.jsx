import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import * as Sentry from "@sentry/react";


const App = () => {

  return (
    <main className="bg-black">
      <NavBar></NavBar>
      <Hero></Hero>
      <Highlights></Highlights>
      <Model></Model>
    </main>
  )
}

export default Sentry.withProfiler(App);