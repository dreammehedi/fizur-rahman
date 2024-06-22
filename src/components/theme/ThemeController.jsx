import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeController() {
  // theme
  const [theme, setTheme] = useState("light");

  // toggle theme icon
  const [toggleThemeIcon, setToggleThemeIcon] = useState(true);

  // handle theme
  const handleTheme = () => {
    setToggleThemeIcon(!toggleThemeIcon);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={handleTheme}
      className="cursor-pointer text-2xl dark:bg-white dark:text-primary bg-primary text-white p-2 rounded-xl"
    >
      {toggleThemeIcon ? (
        <MdDarkMode></MdDarkMode>
      ) : (
        <MdLightMode></MdLightMode>
      )}
    </button>
  );
}

export default ThemeController;
