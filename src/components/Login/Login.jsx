import React, { useState, useContext } from 'react';
import firebase from "firebase"
import { ThemeContext } from '../../ThemeContext';
import { Link, useHistory } from 'react-router-dom'

export default function Login(props) {
  const theme = useContext(ThemeContext)
  // const { error, loading, login } = props;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const onSubmit  = async (e) => {
    e.preventDefault()
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      history.push('/')
      setErrorMsg('')
    } catch(error) {
      setErrorMsg(error.message)
    }
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onRegister = () => {
    history.push('/register')
  }


  const textColor = theme.value === 'white' ?  "black" : 'white'
  
  return (
    <main style={{ backgroundColor: theme.value }}>
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col=md-12">
                <div className="breadcrumb-text text-center">
                  <h1>Login</h1>
                  <ul className="breadcrumb-menu">
                    <li><a href="index.html">home</a></li>
                    <li><span>Login</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60" style={{ color: textColor }}>Login From Here</h3>
                  <p className="text-danger">{errorMsg}</p>
                  <form onSubmit={onSubmit}>
                    <label style={{ color: textColor }} htmlFor="name">Email Address <span>**</span></label>
                    <input 
                      id="name" 
                      type="text" 
                      placeholder="Enter Username or Email address..."
                      onChange={onChangeEmail}
                    />
                    <label style={{ color: textColor }}  htmlFor="pass">Password <span>**</span></label>
                    <input id="pass" type="password" placeholder="Enter password..." onChange={onChangePassword} />
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember" style={{ color: textColor }}>Remember me!</label>
                      </span>
                      <span className="forgot-login f-right">
                        <a href="#">Lost your password?</a>
                      </span>
                    </div>
                    {/* {
                      loading  
                      ? <p>Loading....</p>
                      : <button className="btn theme-btn-2 w-100">Login Now</button>
                    } */}

                    <button className="btn theme-btn-2 w-100">Login Now</button>

                    <div className="or-divide"><span>or</span></div>
                    <button className="btn theme-btn w-100" onClick={onRegister}>Register Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}