import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

export default function NavBar() {
    const [darkMode, setDarkMode] = useDarkMode(false);
 const toggleMode = e => {
    
   setDarkMode(!darkMode);
 };
    return(
        <div>
       <nav className="navbar">
      <h1>World Cup Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
        </div>
    )
}