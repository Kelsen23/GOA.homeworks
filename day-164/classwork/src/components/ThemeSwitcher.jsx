import useTheme from "../hooks/useTheme";

export default function ThemeSwitcher() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Theme: {theme}</p>
      
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
