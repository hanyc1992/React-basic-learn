import React from 'react';

//creat component in different ways:

//#1  extends React.Component
//class App extends React.Component {
//  render() {
//    //using JSX, which is a HTML like syntax
//    //all JSX compiled into javascript(using React.createElement)
//    return <h1>hello worlds</h1>
//    //这句话等价于  return React.createElement('h1', null, `hello world`)
//  }
//}

//#2  define a stateless function, which simply returns JSX
const App = () => <h1>hello world</h1>

//两者区别: class component可以包含state,但是function component是无状态的

export default App