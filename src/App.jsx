import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { About, Skills, Experience, Projects, Education, Certifications, Achievements, Contact } from './sections/Sections'
import { profile } from './data/profile'
export default function App() {
  return (<>
    <Navbar />
    <main className="site-main">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
    </main>
    <footer className="foot">© {new Date().getFullYear()} {profile.name}</footer>
  </>)
}
