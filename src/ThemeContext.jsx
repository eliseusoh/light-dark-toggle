import React, {createContext, useState} from 'react'

//creating context
//its like a shared storage box for theme info
export const ThemeContext = createContext()

//this is a wrapper componenet
//{children} means whatsever gets wrapped inside this component eg App
export function ThemeProvider({children}){

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        //current gives current value of state so it can be changed to opposite
        setTheme((current)=>(current === 'light' ? 'dark' : 'light'))
    };

    //bundling theme state and function into one object 
    //this is what we will share with the app 
    const value = {theme, toggleTheme};

    return(
        //like magic backpack
        //you put theme info and toggle function in
        //wrap the app in it
        //any componenet can grab the items easily using useContext(ThemeContext)
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )


}