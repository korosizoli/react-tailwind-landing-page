import About from "./components/container/About"
import Hero from "./components/container/Hero"
import Features from "./components/container/Features"
import Faq from "./components/container/Faq"
import Works from "./components/container/Works"
import Studies from "./components/container/Studies"
import Contact from "./components/container/Contact"
import Cta from "./components/container/Cta"
import Footer from "./components/container/Footer"
import Navbar from "./components/navbar/Navbar"


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Faq />
      <Works />
      <Studies />
      <Contact />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
