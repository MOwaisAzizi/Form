import React, { useState } from "react"
import ReactDOM from 'react-dom/client';
import Product from "./conponents/Products/product"
import ProductList from "./conponents/ProductList/ProductList"
import Main from "./conponents/Mian/Main"
import Wrapper from "./hoc/wrapper";
import Container1 from './hoc/Container1'
import "./App.css"
import AuthContext from './context/auth-context'


class App extends React.Component {

  state = {
    Products: [
      { id: 1, title: 'book1', price: 100 },
      { id: 2, title: 'book2', price: 200 },
      { id: 3, title: 'book3', price: 300 },
    ],
    showProducts: false,
    showMain: true,
    auth: false
  }

  changetitlehandler = (event, id) => {
    const productIndex = this.state.Products.findIndex((item) => {
      return item.id === id //ورودی
    })
    const product = {
      ...this.state.Products[productIndex]
    }

    product.title = event.target.value

    const products = [...this.state.Products]
    products[productIndex] = product

    this.setState({ Products: products })
  }

  deletproductsHandler = (productsindex) => {
    const products = [...this.state.Products]
    products.splice(productsindex, 1)
    this.setState({ products: products })
  }

  toggeleProducthandler = () => {
    const show = this.state.showProducts
    this.setState({ showProducts: !show })
  }

  loginHandler = () => {
    this.setState({ auth: true })
  }
  render() {

    let products = null
    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.Products}
            click={this.deletproductsHandler}
            change={this.changetitlehandler}
          />
        </div>
      )
    }

    return (
      <Container1 >
        <button onClick={() => { this.setState({ showMain: false }) }}>Remove main</button>
        <AuthContext.Provider value={{ auth: this.state.auth, login: this.loginHandler }}>
          {this.state.showMain ? (
            <Main
              products={this.state.Products}
              click={this.toggeleProducthandler}
            />) : null}

          {products}
        </AuthContext.Provider>
      </Container1>
    )
  }
}

export default Wrapper(App, "center")
