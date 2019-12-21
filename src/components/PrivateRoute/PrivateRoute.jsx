import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import firebase from 'firebase';
export default function PrivateRoute({  
  children,
  ...restProps
}) {
  const renderChildren = firebase.auth().currentUser 
                          ? children 
                          : <Redirect to="/login" />
  return (
    <Route {...restProps}>
      {renderChildren}
    </Route>
  )
}