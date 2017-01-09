import React from 'react';

//creat component in different ways:

//#1  extends React.Component
class App extends React.Component {
  constructor() {
    super();//super method is used to get our context
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
    this.setState({
      txt: e.target.value,
      //关于refs的备注: stateless function components cannot be given refs!!!
        //`this.refs`返回所有标注了`ref`的elements,然后根据标注名来索引
        //`this.refs`可以帮助找到指定的某一个element(有些类似elementId?)
      aa: this.refs.aa.value
    });
  }

  render() {
    //using JSX, which is a HTML like syntax
    //all JSX compiled into javascript(using React.createElement)
    return (
        <div>
          <h1>hello worlds</h1>
          <h2>{this.props.txt}</h2>
          <h3>{this.state.txt}</h3>
          <Widget update={this.update.bind(this)} foo={6} bar="dddd"/>
          <Widget update={this.update.bind(this)} foo={6} bar="dddd" />
          <hr/> <h3>{this.state.aa}</h3>
          <input ref="aa" onChange={this.update.bind(this)}/>
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

const Widget = (props) =>
    <input type="text" onChange={props.update}/>

Widget.propTypes = {
  //we can use React built-in type & `isRequired` to validate
  foo: React.PropTypes.number.isRequired,
  /**
   * we can also define a function to customize our validation
   * @param props, all the props defined in this component
   * @param propName, the specific prop name, this this case is 'bar'
   * @param component, the react componet
   */
  bar: function(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if (props[propName].length < 3) {
      return new Error(`${propName} was too short`);
    }
  }
}

export default App