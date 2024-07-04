import React,{Component} from "react";
import Product from "../Products/product";

class ProductList extends Component{
shouldComponentUpdate(nextprops, nextState){
   console.log('productlist shouldComponentUpdate');
   return true
}
getSnapshotBeforeUpdate(prevProps, prevState){
   console.log('productlist getSnapshotBeforeUpdate');
   return null
}
componentDidUpdate(){
   console.log('productlist componentDidUpdate');
}
componentWillUnmount(){
   console.log('productlist componentWillUnmount');
   
}
render(){
   console.log('productlist.js render');
   return this.props.products.map((item , index) => {
      return (
   
   <Product
          click = {() => this.props.click(index)} //changing this becu this is function not obj and can change the some names of function like change title to click
           title = {item.title}
           price = {item.price}
           key = {item.id}
           change = {(event) =>this.props.change(event , item.id)}
         //  isauth = {this.props.isauth}
           />
     )  })

}

}

export default ProductList