import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className=""  id={theme}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
