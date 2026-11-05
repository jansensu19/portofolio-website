import './App.css'
import Contact from './components/Contact/contact'
import Experience from './components/Experience/experience'
import Navbar from './components/Navbar/navbar'
import Profile from './components/Profile/profile'
import Projects from './components/Projects/projects'

function App() {

  return (
    <>
      <Navbar />
      <Profile />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Experience />
      <hr className="section-divider" />
      <Contact />
    </>
  )
}

export default App
