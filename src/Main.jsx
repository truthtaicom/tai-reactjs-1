import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./components/Layout/Layout";
import dataJSON from './data.json'
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import Loading from './components/Loading/Loading'

const Login = React.lazy(() => import("./components/Login/Login"));
const ProductList = React.lazy(() => import("./components/ProductList/ProductList"));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'))
const Register = React.lazy(() => import("./components/Register/Register"))
const ProductDetail  = React.lazy(() => import("./components/ProductDetail/ProductDetail"))

/*
STORE   => createContext()
  A
    - B 
      - C
        - D
          - E                               => useContext(STORE)
            - F
              - G
      - H
  M

            Flux x

1 - Ai la parent cua component minh muon tuong tac
2 - Minh muon truyen xuong ( lay tu parent) hay truyen len ( parent)
*/

/*
Use case: Muon chia se gia tri cho cac component voi nhau ( bao gom doi thu 15 )
Cach giai quyet:

1 - STORE => Luu gia tri lai => createContext() de tao STORE
2 - Su dung STORE.Provider de wrap tat ca component muon lay du lieu tu store 
  + ( voi gia tri mac dinh  - value )
  + export STORE ra de dung o buoc 3
3 - De lay gia tru STORE => su dung useContext(STORE)

*/
function Main() {
  const [addedProducts, setAddedProducts ] = useState([])
  // const products = [
  //   {
  //     name: "ABC",
  //     price: 12345678,
  //     final_price: 234567
  //   }
  // ]

  const callbackOfParent = (value) => {
    console.log(value)
    setAddedProducts([...addedProducts, value])
  }

  

  return (
    <Router>
      <Header addedProductsLength={addedProducts.length}>
        <Cart products={addedProducts}/>
      </Header>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <ProductList data={dataJSON.data} onClickProduct={callbackOfParent}/>
              <Sidebar />
            </Layout>
          </Route>
          <Route 
            path="/(login|dang-nhap)" 
            render={(props) => {
              // if(props.isLogin) {
              //   return <Login />
              // }
              // return <NotFound />
              return <Login />
            }} 
          />
          <Route path="/register">
            <Register />
          </Route>
          <Route
            path="/product-detail/:id" 
            // render={(props) => {
            //   console.log(props.match.params.id)
            //   return <ProductDetail id={props.match.params.id}/>
            // }}
          >
            <ProductDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </React.Suspense>
      
      <Footer />
    </Router>
  );
}

export default Main;
