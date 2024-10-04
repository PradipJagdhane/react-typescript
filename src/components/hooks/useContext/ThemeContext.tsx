import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be whiting a Themprovider");
  }
  return context;
};

interface ThemproviderProps {
  children: ReactNode;
}

export const Themprovider: React.FC<ThemproviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggle = () => {
    setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
