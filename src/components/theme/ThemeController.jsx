import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeController() {
  // theme
  const [theme, setTheme] = useState("light");
  console.log(theme);
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
      className="cursor-pointer text-2xl bg-primary text-white p-2 rounded-xl"
    >
      {toggleThemeIcon ? (
        <MdLightMode></MdLightMode>
      ) : (
        <MdDarkMode></MdDarkMode>
      )}
    </button>
  );
}

export default ThemeController;
