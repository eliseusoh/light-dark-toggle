import React, { useContext, useEffect } from 'react';
import './App.css';
import ToggleButton from './ToggleButton';
import { ThemeContext } from './ThemeContext';



function App() {

  const {theme} = useContext(ThemeContext);

  //to update the theme className for entire body (for styling)
  //[] = only run when theme value changes
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);


  return (
      <div className='app-container'>
        <h1>Hello Elise.</h1>
         <ToggleButton/>
    </div>
  );
}

export default App;
