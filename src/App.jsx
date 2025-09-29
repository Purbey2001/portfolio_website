import './App.css'
import { BsAt } from "react-icons/bs";
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  

  return (
    <div>
      <header>
        <div className='logoHeader'>
          <div className='logo'>
            <span>AK</span>
          </div>
          <div>
            <span className='title'>Abhishek Kumar</span>
            <br />
            <span>Aspiring Devloper</span>
          </div>
        </div>
        <div className='section'>
          <button>Home</button>
          <button>Skills</button>
          <button>Projects</button>
          <button>Achievements</button>
          <button>About</button>
          <button>Resume</button>
          <button>Contact</button>
        </div>
        <div className='section'>
          <button>
            Get In Touch
          </button>
        </div>
      </header>
      <div className='content'>
        <Home/>
        <Skills/>
        <Projects/>
        <Achievements/>
        <About/>
        <Resume/>
        <Contact/>
      </div>
      <footer>
        <p><BsAt/> 2025 Abhishek Kumar | Built with React + CSS</p>
      </footer>
    </div>
  )
}

export default App
