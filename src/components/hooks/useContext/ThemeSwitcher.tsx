import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher: React.FC = () => {
    const { theme, toggle } = useTheme();

    useEffect(() => {
        if(theme === 'light'){
            document.body.style.backgroundColor= '#ffffff';
        }else{
            document.body.style.backgroundColor='#333333'
        }
    }, [theme])
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggle}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
