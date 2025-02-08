import { useState } from "react";

function useTheme(defaultTheme = "light") {
  
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

export default useTheme;
