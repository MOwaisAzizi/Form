import React, { useEffect, useRef,useContext } from "react";
import Product from "../Products/product";
import AuthContext from "../../context/auth-context";

const Mian = (props) =>{
    const btnRef = useRef(null)
    
    const authcontext = useContext(AuthContext)
    console.log(authcontext.auth);
    
useEffect(() => {
    console.log('Main.js useEfect');
    btnRef.current.click();
    // setTimeout(() => {
    //     alert('http request')
    // }, 2000)
    return ()=> {
        console.log('main.js cleanup');
    }
},[])

// [props.products]
    const btn = {
        backgroundColor : 'blue',
        color : 'white',
        padding: '5px',
        margin: '5px',
        borderRaluis :'5px'
    }

return(
<div>

<h1>Show/Hide book Store</h1>
<button ref={btnRef} style={btn} onClick = {props.click}>Show/Hide</button>
 
 <button onClick={authcontext.login}>login!</button>
{/* <AuthContext.Consumer>
{(context) => <button onClick={context.login}>login!</button>}
</AuthContext.Consumer> */}
{/* <button onClick={props.login}>login!</button> */}
</div>

)
}


export default Mian   