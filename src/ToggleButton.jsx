import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

export default function ToggleButton(){

    //this is the magic line
    //uses useContext hook to get current theme and toggle function from context provider
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
}