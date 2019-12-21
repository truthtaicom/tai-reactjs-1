import React, { useEffect } from "react"
import firebase from 'firebase'

export const ThemeContext = React.createContext("")

function ThemeContextComponent ({children }) {
  const [themeValue, setThemeValue] = React.useState("white")
  const [user, setUser] = React.useState()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user)
      }
  });

  }, [])

  const switchTheme = () => {
    if(themeValue === "white") {
      setThemeValue("black")
    } else {
      setThemeValue("white")
    }
  }

  return (
    <ThemeContext.Provider value={{ switchTheme, user, value: themeValue }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextComponent