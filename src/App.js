import React from 'react';

//creat component in different ways:

//#1  extends React.Component
class App extends React.Component {
  render() {
    //using JSX, which is a HTML like syntax
    //all JSX compiled into javascript(using React.createElement)
    return (
        <div>
          <h1>hello worlds</h1>
          <h2>this is yuchao</h2>
        </div>
    )
    //这句话等价于  return React.createElement('h1', null, `hello world`)
      //注意:JSX只能return 唯一一个node element,也就是说不能`return <h1>hello</h1> <h2>world</h2>`
  }
}

////#2  define a stateless function, which simply returns JSX
//const App = () => <h1>hello world</h1>

//两者区别: class component可以包含state,但是function component是无状态的

export default App