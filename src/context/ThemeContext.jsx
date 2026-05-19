import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const ThemeContext = createContext()

export function ThemeProvider({children}) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("shinfi-theme") === "dark"
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("shinfi-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("shinfi-theme", "light")
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)