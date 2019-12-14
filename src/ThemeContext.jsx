import React from "react"

export const ThemeContext = React.createContext("")

function ThemeContextComponent ({children }) {
  const [themeValue, setThemeValue] = React.useState("white")

  const switchTheme = () => {
    if(themeValue === "white") {
      setThemeValue("black")
    } else {
      setThemeValue("white")
    }
  }

  return (
    <ThemeContext.Provider value={{ switchTheme, value: themeValue }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextComponent