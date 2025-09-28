import './App.css'

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
      <div style={{marginTop:'60px'}}>

      </div>
      <footer>
        <p>2025 Abhishek Kumar | Built with React + CSS</p>
      </footer>
    </div>
  )
}

export default App
