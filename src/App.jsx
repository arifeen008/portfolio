import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-16">
          <About />
        </section>
        
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
          <Skills />
        </section>
        
        <section id="projects" className="py-16">
          <Projects />
        </section>
              
      </main>

      <Footer />
    </>
  )
}

export default App