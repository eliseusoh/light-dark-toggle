## 🌗 Light-Dark Toggle React App
Welcome! This is a simple React app that lets you switch between light and dark mode with a single button. Perfect for learning about React Context and theming! 🎨

---

## ✨ Features
- Toggle Light/Dark Mode: Click the button to switch themes!
- React Context: No prop drilling—theme state is global.
- Smooth CSS Transitions: Enjoy a clean, animated switch.
- useSate: to manage theme state.
- useContext: to make theme accessible across components.
- createContext: to create theme context.
- Context Provider: to wrap app and share state globally.
- Custom components: eg ToggleButton.
- Dynamic className for conditional styling.
- CSS variables.
- useEffect: to apply class theme directly to document.body.

---

## 🛠️ How It Works
- ThemeContext.jsx creates a context with theme and toggleTheme.
- index 8.js wraps the app in ThemeProvider so all components can access the theme.
- ToggleButton.jsx uses the context to show and toggle the current theme.
- App 9.js updates the <body> class for global styling.
- index 6.css defines variables and styles for both themes.

---

## 🚀 Quick Start
## 1. Install dependencies
```bash
npm install
```

## 2. Run the app
```bash
npm start
```

