import React,{useState} from "react"
// import { ReactDOM } from "react"
import ReactDOM from 'react-dom/client';
import Product from "./conponents/Products/product"
import ProductList from "./conponents/ProductList/ProductList"
import Main from "./conponents/Mian/Main"
import Wrapper from "./hoc/wrapper";
import Container1 from './hoc/Container1'
import "./App.css"
import AuthContext from './context/auth-context'


class App extends React.Component {
  constructor(props){
    super(props)
    console.log('App.js constractor');
    
  }

  state = {
      Products : [
         {id: 1 ,title:'book1',price : 100 },
         {id: 2 ,title:'book2',price : 200 },
         {id: 3 ,title:'book3',price : 300 },
      ],
    showProducts : false,
    showMain : true,
    auth : false
     }
  componentDidMount(){
    console.log('App.js componentDidMount');
    
  }
     changetitlehandler = (event , id) => {
      const productIndex = this.state.Products.findIndex((item) => {
         return item.id === id //ورودی
       })
       const product = {
         ...this.state.Products[productIndex]
       }
       
       product.title = event.target.value

       const products = [...this.state.Products]
       products[productIndex] = product

       this.setState ({Products:products})
      }

deletproductsHandler = (productsindex) => {
  const products = [...this.state.Products]//copy of array becuose dangeroust to use directly of array
  products.splice(productsindex, 1) 
  this.setState({products:products}) 
}

toggeleProducthandler = () => {
  const show = this.state.showProducts
  this.setState({ showProducts : !show})  
  }

loginHandler=() => {
  this.setState({ auth : true})
}
  render() {
   console.log('app.js render');
   
      let products = null
      if(this.state.showProducts){
        products = (
    <div>
      <ProductList
      products = {this.state.Products}
      click = {this.deletproductsHandler}
      change = {this.changetitlehandler}
      // isauth = {this.state.auth}
      />
   </div>
        )
        }

      return (
            <Container1 >                
            <button onClick={() => {this.setState({ showMain : false})}}>Remove main</button>
            <AuthContext.Provider value = {{auth :this.state.auth, login:this.loginHandler}}>
             {this.state.showMain ? (
            <Main
             products = {this.state.Products}
             click = {this.toggeleProducthandler}
            //  login = {this.loginHandler}
/> ) :null}
     {products}
     </AuthContext.Provider>
  </Container1>
)
  }
}

export default Wrapper(App,"center")
// export default App












// class App extends React.Component {
//   constructor(props){
//     super(props)
//     console.log('App.js constractor');
    
//   }

//   state = {
//       Products : [
//          {id: 1 ,title:'book1',price : 100 },
//          {id: 2 ,title:'book2',price : 200 },
//          {id: 3 ,title:'book3',price : 300 },
//       ],
//     showProducts : false,
//     showMain : true
//      }
//   componentDidMount(){
//     console.log('App.js componentDidMount');
    
//   }
//      changetitlehandler = (event , id) => {
//       const productIndex = this.state.Products.findIndex((item) => {
//          return item.id === id //ورودی
//        })
//        const product = {
//          ...this.state.Products[productIndex]
//        }
       
//        product.title = event.target.value

//        const products = [...this.state.Products]
//        products[productIndex] = product

//        this.setState ({Products:products})
//       }

// toggeleProducthandler = () => {
// const show = this.state.showProducts
// this.setState({ showProducts : !show})  
// }

// deletproductsHandler = (productsindex) => {
//   const products = [...this.state.Products]//copy of array becuose dangeroust to use directly of array
//   products.splice(productsindex, 1) 
//   this.setState({products:products}) 
// }

//   render() {
//    console.log('app.js render');
   
//       let products = null
//       if(this.state.showProducts){
//         products = (
//     <div>
//       <ProductList
//       products = {this.state.Products}
//       click = {this.deletproductsHandler}
//       change = {this.changetitlehandler}
//       />
//    </div>
//         )
//         }

//       return (
//           <Wrapper center ='center'>                
//             <button onClick={() => {this.setState({ showMain : false})}}>Remove main</button>
//            {this.state.showMain ? (
//             <Main 
//              products = {this.state.Products}
// click = {this.toggeleProducthandler} /> ) :null}
//  {products}
//   </Wrapper>
// )
//   }
// }








// class App extends React.Component {
//   state = {
//       Products : [
//          {id: 1 ,title:'book1',price : 100 },
//          {id: 2 ,title:'book2',price : 200 },
//          {id: 3 ,title:'book3',price : 300 },
//       ],
//     showProducts : false
//      }

//      changetitlehandler = (event , id) => {
//       const productIndex = this.state.Products.findIndex((item) => {
//          return item.id === id //ورودی
//        })
//        const product = {
//          ...this.state.Products[productIndex]
//        }
       
//        Product.title = event.target.value

//        const products = [...this.state.Products]
//        products[productIndex] = Product

//        this.setState ({Products:products})
//       }

// toggeleProducthandler = () => {
// const show = this.state.showProducts
// this.setState({ showProducts : !show})  
// }

// deletproductsHandler = (productsindex) => {
//   const products = [...this.state.Products]//copy of array becuose dangeroust to use directly of array
//   products.splice(productsindex, 1) 
//   this.setState({products:products})
// }

//   render() {
//       const btn = {
//           backgroundColor : 'blue',
//           color : 'white',
//           padding: '5px',
//           margin: '5px',
//           borderRaluis :'5px'
//       }

//       let products = null
//       if(this.state.showProducts){
//         products = (
//     <div>
//                {
//                this.state.Products.map((item,index) => {
//      return <Product
//             click = { ()=> this.deletproductsHandler(index)} //return ()=>
//              title = {item.title}
//              price = {item.price}
//              key = {item.id}
//              change = {(event) => this.changetitlehandler(event , item.id)}
//              />
//         })
//         }
      
//    </div>

//         )
//         }

//       return (
//           <div className="Myapp">
//               <h1>Show/Hide book Store</h1>
// <button style={btn} onClick = {this.toggeleProducthandler}>Show/Hide</button>
//  {products}
//   </div >
// )
//   }
// }








// ////click on price and delete that div or line
// class App extends React.Component {
//   state = {
//       Products : [
//          {id: 1 ,title:'book1',price : 100 },
//          {id: 2 ,title:'book2',price : 200 },
//          {id: 3 ,title:'book3',price : 300 },
//       ],
//     showProducts : false
//      }

// toggeleProducthandler = () => {
// const show = this.state.showProducts
// this.setState({ showProducts : !show})  
// }
// deletproductsHandler = (productsindex) => {
//   const products = [...this.state.Products]//copy of array becuose dangeroust to use directly of array
//   products.splice(productsindex, 1) 
//   this.setState({products:products})
// }
//   render() {
//       const btn = {
//           backgroundColor : 'blue',
//           color : 'white',
//           padding: '5px',
//           margin: '5px',
//           borderRaluis :'5px'
//       }
//       let products = null
//       if(this.state.showProducts){
//         products = (
//     <div>
//                {
//                this.state.Products.map((item,index) => {
//      return <Product
//             click = { ()=> this.deletproductsHandler(index)} //return ()=>
//              title = {item.title}
//              price = {item.price}
//              key = {item.id}//key to idintify date sepetetly mean to be uniq
//              />
//         })
//         }
//    </div>
//         )
//         }
//       return (
//           <div className="Myapp">
//               <h1>Show/Hide book Store</h1>
// <button style={btn} onClick = {this.toggeleProducthandler}>Show/Hide</button>
//  {products}
//   </div >
// )
//   }
// }




// class App extends React.Component {
//   state = {
//       Products : [
//          {title:'book1',price : 100 },
//          {title:'book2',price : 200 },
//          {title:'book3',price : 300 },
//       ],
//     showProducts : false
//      }

// toggeleProducthandler = () => {
// const show = this.state.showProducts
// this.setState({ showProducts : !show})  
// }

//   render() {
//       const btn = {
//           backgroundColor : 'blue',
//           color : 'white',
//           padding: '5px',
//           margin: '5px',
//           borderRaluis :'5px'
//       }

//       let products = null
//       if(this.state.showProducts){
//         products = (

//           <div className="productShow">
//           <Product 
//           title = {this.state.Products[0].title}
//           price = {this.state.Products[0].price}
//           />
//            <Product 
//           title = {this.state.Products[1].title}
//           price = {this.state.Products[1].price}
//           />
//            <Product 
//           title = {this.state.Products[2].title}
//           price = {this.state.Products[2].price}
//           />
//           </div>
//         )
//         }
//       return (
//           <div className="Myapp">
//               <h1>Show/Hide book Store</h1>
// <button style={btn} onClick = {this.toggeleProducthandler}>Show/Hide</button>
//  {products}
//   </div >
// )
//   }
// }







////show and hidding
// class App extends React.Component {
//     state = {
//         Products : [
//            {title:'book1',price : 100 },
//            {title:'book2',price : 200 },
//            {title:'book3',price : 300 },
//         ],
//       showProducts : false
//        }

// toggeleProducthandler = () => {
// const show = this.state.showProducts
// this.setState({ showProducts : !show})  
// }

//     render() {
//         const btn = {
//             backgroundColor : 'blue',
//             color : 'white',
//             padding: '5px',
//             margin: '5px',
//             borderRaluis :'5px'
//         }
//         return (
//             <div className="Myapp">
//                 <h1>Show/Hide book Store</h1>
//  <button style={btn} onClick = {this.toggeleProducthandler}>Show/Hide</button>

//             {this.state.showProducts ? (
//                 <div>
//              <Product 
//              title = {this.state.Products[0].title}
//              price = {this.state.Products[0].price}
//              />
//               <Product 
//              title = {this.state.Products[1].title}
//              price = {this.state.Products[1].price}
//              />
//               <Product 
//              title = {this.state.Products[2].title}
//              price = {this.state.Products[2].price}
//              />
//              </div>) :null
//              }
//     </div >
// )
//     }
// }






// class App extends React.Component {
//     state = {
//         Products : [
//            {title:'book1',price : 100 },
//            {title:'book2',price : 200 },
//            {title:'book3',price : 300 },
//         ],
//        }
//        chanchpriceHandler = (newtitle) => {
//         this.setState({
//             Products : [
//                 {title:newtitle,price : 150 },
//                 {title:'booknew',price : 250 },
//                 {title:'book2new',price : 350 },
//              ],
//         }
//         )
//        }
//        changetitlehandler = (event) =>{
//     this.setState({
//         Products : [
//             {title:'book1',price : 150 },
//             {title:event.target.value,price : 250 },
//             {title:'book3',price : 350 },
//          ],
//     }
//     )
//  }
//     render() {
//         const btn = {
//             backgroundColor : 'blue',
//             color : 'white',
//             padding: '5px',
//             margin: '5px',
//             borderRaluis :'5px'
//         }
//         return (
//             <div className="Myapp">
//                 <h1>Book store</h1>
//              <Product 
//              title = {this.state.Products[0].title}
//              price = {this.state.Products[0].price}
//              />
//               <Product 
//              title = {this.state.Products[1].title}
//              price = {this.state.Products[1].price}
//              change = {this.changetitlehandler}
//              />
//               <Product 
//              title = {this.state.Products[2].title}
//              price = {this.state.Products[2].price}
//              click = {() => this.chanchpriceHandler('adding newtitle')}
//              />
//              <button style={btn} onClick = {this.chanchpriceHandler}>change price</button>
//     </div >
// )
//     }
// }





  ////seting dinamic states by using classes
// class App extends React.Component {

//     state = {
//         Products : [
//            {title:'book1',price : 100 },
//            {title:'book2',price : 200 },
//            {title:'book3',price : 300 },
//         ],   
//        }
//        chanchpriceHandler = () => {
//         this.setState({
//             Products : [
//                 {title:'book1new',price : 150 },
//                 {title:'book2new',price : 250 },
//                 {title:'book3new',price : 350 },
//              ],
//         }
//         )
//        }
//     render() {
//         return (
//             <div className="Myapp">
//                 <h1>Book store</h1>
//              <Product 
//              title = {this.state.Products[0].title}
//              price = {this.state.Products[0].price}
//              />
//               <Product 
//              title = {this.state.Products[1].title}
//              price = {this.state.Products[1].price}
//              />
//               <Product 
//              title = {this.state.Products[2].title}
//              price = {this.state.Products[2].price}
//              />
//              <button onClick = {this.chanchpriceHandler}>change price</button>
//     </div >
// )
//     }
// }






//dinamic state useing hook methods(use...👆) new 
// const App  = props => {
//   const [productState,setproductState] = useState({   ////use array bec thay two
//             Products : [
//            {title:'book1',price : 100 },
//            {title:'book2',price : 200 },
//            {title:'book3',price : 300 },
//         ],
//    })

//    const chanchpriceHandler = () =>{
//      setproductState({
//         Products : [
//             {title:'book1new',price : 150 },
//             {title:'book2new',price : 250 },
//             {title:'book3new',price : 350 },
//          ],
//      })
//    }

//            return (
//             <div id="main" className="container">
//                 <h1>react started</h1>
//              <Product 
//              title = {productState.Products[0].title}
//              price = {productState.Products[0].price}
//              />
//               <Product 
//              title = {productState.Products[1].title}
//              price = {productState.Products[1].price}
//              />
//               <Product 
//              title = {productState.Products[2].title}
//              price = {productState.Products[2].price}
//              />
//              <button onClick = {chanchpriceHandler}>change price</button>
//     </div >
// )
// }








////setting static state 
{/* <div>
{<><Product title="book1" price="150">
    👆good quality
  </Product><Product title="book2" price="180" /></>}
</div> */}


// const App = () => {
//     // return React.createElement('div', {id: 'main', className:'container'},'Hello World')
// return (
//     <div id="main" className="container">
//         <h1>react started</h1>
//         <Product/>
//         <Product/>
//         <Product/>
//     </div>
// )
// }








// export default App