import React, { Component } from "react";
import Product from "../Products/product";

class ProductList extends Component {

   render() {
      return this.props.products.map((item, index) => {
         return (
            <Product
               click={() => this.props.click(index)}
               title={item.title}
               price={item.price}
               key={item.id}
               change={(event) => this.props.change(event, item.id)}
            />
         )
      })
   }

}

export default ProductList