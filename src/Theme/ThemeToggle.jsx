//import './ThemeToggle.css';
import { Container } from 'reactstrap';
import { ThemeContext, themes } from './themeContex';
import React from 'react';
import ToggleDark from './ToggleDark';

function ThemeToggle() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="ThemeToggle">
      <header className="ThemeToggle-header">
      
      </header>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>

      
 
    </div>
  );
}

export default ThemeToggle;