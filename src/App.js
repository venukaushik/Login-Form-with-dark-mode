import React, { useState } from 'react';
import './App.css'
import Login from "./Components/Login";

function App() {

  const [mode, setMode] = useState('mode' ? 'light' : 'dark')

  const [modeIcon, setModeIcon] = useState('fas fa-toggle-off')

  const [modeText, setModeText] = useState('Dark')

  const toggleTheme = () => {
    if (mode === 'dark') {
      setMode('light')
      setModeText('Dark ')
      setModeIcon('fas fa-toggle-off')
    } else {
      setMode('dark')
      setModeText('Light')
      setModeIcon('fas fa-toggle-on')
    }
  }
  return (
    <Login mode={mode} modeIcon={modeIcon} modeText={modeText} toggleTheme={toggleTheme} />
  )
}

export default App