import React from 'react';//library to enable us build react component
import ReactDOM from 'react-dom';//enable us to play react component in the context of DOM
import App from './App';

ReactDOM.render(
    //we can pass params into component by using 'props';
      //and in component, we can use the 'props' by typing `{this.props.txt}`
    <App txt="this is txt prop" cat={5}/>,
    document.getElementById('root')
);
