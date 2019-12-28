import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

export default function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const onSubmit  = async (e) => {
    e.preventDefault();
    props.registerAction(email, password)

  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onLogin = () => {
    history.push('/login')
  }

  return (
    <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Register</h1>
                  <ul className="breadcrumb-menu">
                    <li><a href="index.html">home</a></li>
                    <li><span>Register</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Signup From Here</h3>
                  <p className="text-danger">{props.error}</p>
                  <form onSubmit={onSubmit}>
                    <label htmlFor="email-id">Email Address <span>**</span></label>
                    <input id="email-id" type="text" onChange={onChangeEmail} placeholder="Enter Username or Email address..." />
                    <label htmlFor="pass">Password <span>**</span></label>
                    <input id="pass" type="password" onChange={onChangePassword} placeholder="Enter password..." />
                    <div className="mt-10" />
                    <button type="submit" className="btn theme-btn-2 w-100">Register Now</button>
                    <div className="or-divide"><span>or</span></div>
                    <button className="btn theme-btn w-100" onClick={onLogin}>login Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
  )
}