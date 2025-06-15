import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //wrap whole app (children) in ThemeProvider so all componenets can access theme info, avoids prop drilling
    <ThemeProvider>
        <App />
    </ThemeProvider>
    
);

