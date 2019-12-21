import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext';
export default function LoginRoute({  
  children,
  ...restProps
}) {
  const { user } = useContext(ThemeContext)

  return (
    <Route {...restProps}>
      {user ? <Redirect to="/" /> : children}
    </Route>
  )
}