import React from "react";
import ReactDOM  from "react-dom";
import './index.css'
import App from "./App";
import authContext from "./context/auth-context";

ReactDOM.render(
<authContext.Provider>
<App />
</authContext.Provider>
,
document.getElementById('root'))
// console.log('index.js');

