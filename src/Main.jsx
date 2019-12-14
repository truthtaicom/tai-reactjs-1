import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/ProductList/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./components/Layout/Layout";
import dataJSON from './data.json'
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

/*

A
  - B 
    - C
      - D
        - E
          - F
            - G
    - H
M

            Flux x

1 - Ai la parent cua component minh muon tuong tac
2 - Minh muon truyen xuong ( lay tu parent) hay truyen len ( parent)
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
    <>
      <Header addedProductsLength={addedProducts.length}>
        <Cart products={addedProducts}/>
      </Header>
      <Layout>
        {/* <ProductList data={dataJSON.data} onClickProduct={callbackOfParent}/>
        <Sidebar /> */}
      </Layout>
        <Login />
        {/* <Register /> */}
      <Footer />
    </>
  );
}

export default Main;
