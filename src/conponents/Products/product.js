import React,{Component} from "react";
import "./product.css"
import Wrapper from "../../hoc/wrapper";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import AuthContext from "../../context/auth-context";
// import Container from "../../hoc/Container"
// const price = 100

class Product extends Component {
  constructor(props){
  super(props)
  this.inputref = React.createRef()
  }
  //using another way
  static contextType = AuthContext

  componentDidMount(){
    this.inputref.current.focus();//input focus
  }
render(){
  console.log('product.js render');

  return <react-fragment > 
    {/* <AuthContext.Consumer > */}
    {this.context.auth ? <p>logged in!</p> : <p>please login</p>} 
    {/* {(context) => context.auth ? <p>logged in!</p> : <p>please login</p>}  */}
    {/* </AuthContext.Consumer> */}

    {/* {this.props.isauth ? <p>logged in!</p> : <p>please login</p>}  */}
    <p> product name : {this.props.title} </p>
    <p onClick={this.props.click}> price is : {this.props.price} </p>
    <p>{this.props.children}</p>
    <input ref={this.inputref} type="text" onChange={this.props.change} value={this.props.title}
    />
    </react-fragment>
}
}
  export default Wrapper(Product, 'product')
 