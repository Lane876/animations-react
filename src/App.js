import "./styles/App.css";
import Navbar from "./components/Navbar";
import TopButton from "./components/TopButton";
import First from "./screens/First";
import Second from "./screens/Second";
import Third from "./screens/Third";
import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark" : "light-mode"}>
      <CustomCursor />
      <Navbar showBelow={20} setDarkMode={setDarkMode} darkMode={darkMode} />
      <TopButton showBelow={400} />
      <First />
      <Second />
      <Third />
    </div>
  );
}

export default App;
