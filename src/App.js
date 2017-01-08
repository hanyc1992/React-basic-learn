import React from 'react';

//creat component in different ways:

//#1  extends React.Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'state txt!'
    }
  }

  /**
   * 不是standard method,只是custom method
   * @param e, which is an event
   */
  update(e) {
    //setState只会override我们在这里设置的值,不会影响其他的值
    this.setState({txt: e.target.value})
  }

  render() {
    //using JSX, which is a HTML like syntax
    //all JSX compiled into javascript(using React.createElement)
    return (
        <div>
          <h1>hello worlds</h1>
          <h2>{this.props.txt}</h2>
          <h3>{this.state.txt}</h3>
          <input type="text" onChange={this.update.bind(this)}/>
        </div>
    )
    //这句话等价于  return React.createElement('h1', null, `hello world`)
      //注意:JSX只能return 唯一一个node element,也就是说不能`return <h1>hello</h1> <h2>world</h2>`
  }
}

//we can define the type of props we are looking for in component
  //`propTypes` is a object
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired //如果定义了required,但是没有传入,就会在console里报错
}

//we can also set a series of default props
App.defaultProps = {
  txt: "default txt",
  cat: 6
}

////#2  define a stateless function, which simply returns JSX
//const App = () => <h1>hello world</h1>

//两者区别: class component可以包含state,但是function component是无状态的

export default App