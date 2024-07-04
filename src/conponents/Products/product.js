import React, { Component } from "react";
import "./product.css"
import Wrapper from "../../hoc/wrapper";
import AuthContext from "../../context/auth-context";


class Product extends Component {
  constructor(props) {
    super(props)
    this.inputref = React.createRef()
  }
  //using another way
  static contextType = AuthContext

  componentDidMount() {
    this.inputref.current.focus();//input focus
  }
  render() {

    return <react-fragment >
      {this.context.auth ? <p>logged in!</p> : <p>please login</p>}
      {/* <AuthContext.Consumer > */}
      {/* {(context) => context.auth ? <p>logged in!</p> : <p>please login</p>}  */}
      {/* </AuthContext.Consumer> */}

      <p> product name : {this.props.title} </p>
      <p onClick={this.props.click}> price is : {this.props.price} </p>
      <p>{this.props.children}</p>
      <input ref={this.inputref} type="text" onChange={this.props.change} value={this.props.title}
      />
    </react-fragment>
  }
}
export default Wrapper(Product, 'product')
