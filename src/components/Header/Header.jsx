import React, { useState, useContext } from 'react'
import firebase from 'firebase';
import { ThemeContext } from '../../ThemeContext';

function Header(props) {
    const [userInfo, setUserInfo] = useState({ })
    // const [valuex, switchValuex] = useContext(ThemeContext)
    const { value, switchTheme: switchThemeValue } = useContext(ThemeContext)
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            setUserInfo(user)
            console.log(user, "user")
        }
    });

    const onLogout = async () => {
        await firebase.auth().signOut()
        window.location.href= "/"
    }

    const switchTheme = () => {
        switchThemeValue()
    }

    const userEmail = userInfo && userInfo.email
  return (
    <header>
            <div id="header-sticky" className="header-area box-90 sticky-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
                            <div className="logo">
                                <a href="#"><img src="./assets/logo_shop.png" alt="" /></a>
                            </div>

                            <div className="category-menu">
                                <h4>Category</h4>
                                <ul>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Table lamp</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Furniture</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Chair</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Men</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Women</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Cloth</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Trend</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
                            <div className="main-menu text-center">
                                <nav id="mobile-menu" style={{ display: "block"}} >
                                    <ul>
                                        <li>
                                            <a href="./index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="./detail.html">Product Detail</a>
                                                </li>
                                                <li>
                                                    <a href="./login.html">login</a>
                                                </li>
                                                <li>
                                                    <a href="./register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="./cart.html">Shoping Cart</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li onClick={switchTheme}><span class="badge badge-pill badge-dark">{value}</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
                            <div className="header-right f-right">
                                
                                <ul>
                                
                                    {
                                        userEmail && <span>Xin chao {userInfo.email}</span>
                                    }
                                    <li className="search-btn">
                                        <a className="search-btn nav-search search-trigger" href="#"><i className="fas fa-search"></i></a>
                                    </li>
                                    {
                                        userEmail 
                                        ? <li className="login-btn"><a onClick={onLogout}><i className="fas fa-sign-out-alt"></i></a></li>
                                        : <li className="login-btn"><a href="#"><i className="fas fa-user"></i></a></li>
                                    }
                                    <li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart"></i> <span className="cart-count">{props.addedProductsLength}</span></a>
                                        {
                                            props.children
                                        }
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 d-xl-none">
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header