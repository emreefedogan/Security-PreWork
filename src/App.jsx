import { useState } from 'react';
import './App.css';
import Subject1 from './components/subjects/Subject1';
import Subject2 from './components/subjects/Subject2';
import Subject3 from './components/subjects/Subject3';
import Subject4 from './components/subjects/Subject4';
import Subject5 from './components/subjects/Subject5';
import Subject6 from './components/subjects/Subject6';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // Yeni state ekledik


  const selectSubject = (subject) => {
    if (selectedSubject === subject) {
      setSelectedSubject(null);
    }
    else
    {
      setSelectedSubject(subject);
    }
    
  };

  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Dark mode durumunu tersine çevir
  };


  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className='header'>
        <h1>
          Security Prework
        <button className='dark-mode-toggle' onClick={toggleDarkMode}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </h1>
      </header>
      <div className='main-content'>
        <div className={`subject-list ${darkMode ? 'dark-mode' : ''}`}>
          <ul>
            <li onClick={() => selectSubject('subject1')}>
              Web Application Vulnerabilities
            </li>
            <li onClick={() => selectSubject('subject2')}>
              How the Web Works
            </li>
            <li onClick={() => selectSubject('subject3')}>
              Linux Command Line <br/>How it works Filesystem <br/> processes,services etc.
            </li>
            <li onClick={() => selectSubject('subject4')}>
              At Least One Scripting <br/> Language - Python, PHP etc
            </li>
            <li onClick={() => selectSubject('subject5')}>
              Stages of an attack <br/> and indicent response 
            </li>
            <li onClick={() => selectSubject('subject6')}>
              Adversary tactics <br/> techniques (Mittre Attack)
            </li>
          </ul>
        </div>
        <div className={`subject-details ${darkMode ? 'dark-mode' : ''}`}>
          Hi ! Welcome the Security PreWork
          {selectedSubject === 'subject1' && <Subject1 />}
          {selectedSubject === 'subject2' && <Subject2 />}
          {selectedSubject === 'subject3' && <Subject3 />}
          {selectedSubject === 'subject4' && <Subject4 />}
          {selectedSubject === 'subject5' && <Subject5 />}
          {selectedSubject === 'subject6' && <Subject6 />}


          {/* Add more subject components here */}
        </div>
      </div>
    </div>
  );
}

export default App;
