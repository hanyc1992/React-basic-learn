- `import React from 'react';`
    + library to enable us build react component
- `import ReactDOM from 'react-dom';`
    + enable us to play react component in the context of DOM
- JSX
    + a HTML like syntax
    + 不同点: 因为在react中`class`是一个*reserved name*,所以要用`className`来代替
    + all JSX compiled into javascript
        * 实际上会使用`React.createElement`函数来创建
        * 这就决定了只能return 唯一一个element
- props & states
    + props是static value, it's not meant to be changed by out component
        * 使用的时候{this.props.propName}
    + state是被component管理并且更新的
        * 使用的时候{this.state.stateName}
- 两种创建react component的方法
    + extends React.Component
        * 使用props的时候是`{this.props.propName}`
        * 可以包含state, 使用的时候是`{this.state.stateName}`
    + define a stateless function, which simply returns JSX
        * 使用props的时候是`{props.propName}` - 这里props是作为参数在函数传进去的
        * 无状态, stateless
- 关于{this.props.children}
    + 被react框架自动设置的一个props属性
    + 对于某一个component使用`{this.props.children}`,可以类似**理解成**这个component的innerHTML(但是不一样,会套用createElement,结果变成props.children?)
        *详细可见[官方文档](https://facebook.github.io/react/docs/jsx-in-depth.html#children-in-jsx)
- `this.refs.refName`
    + 在elements里加入attribute: `ref="refName"`
    + 然后,`this.refs`返回所有标注了`ref`的elements.然后可以按照refName来指定出具体的那个element
    + 但是注意: **stateless function components cannot be given refs!!!**
    
    
### React mount/unmount component lifecycle
- 当component加到DOM里的时候,叫作**mounting**
    + 如果只是修改component里面的值,这个不是mounting
- 当component从DOM里移除的时候,叫作**unmounting**

##### Mounting lifecycle phrase
1. `componentWillMount()`: right before component mount into the DOM
2. `componentDidMount()`: fire off once our component has actually been mounted to the DOM
    - 注意,Mount的时候,先是componentWillMount(),然后是render(),最后才是mount成功调用componentDidMount()
    
##### Unmounting lifecycle phrase
1. `componentWillUnmount()`: fire off when our component is about to leave the DOM
    - 备注: 可以使用`ReactDOM.unmountComponentAtNode(document.getElementById('a'))`来unmount一个component
    - 但是首先要先 `import ReactDOM from 'react-dom';`,来让我们可以 play react component in the context of DOM
    - 可以在以上这些mounting/unmounting function里设置/改变state
    
----

### React component update lifecycle
- `componentWillReceiveProps(nextProps)`: fire off when new properties are coming in
- `shouldComponentUpdate(nextProps, nextState)`: 返回一个true/false,表示是不是要re-render
    + 只会影响是不是要re-render,不会影响props和states的更新
- `componentDidUpdate(prevProps, preState)`:fire off when a component finishs re-render


### 具体好的例子
###### 筛选的功能
- 对一个array,可以利用array.map来在JSX里render出来
    + 而且在render之前,可以先用array.filter来筛选那些需要render,这样就可以起到**筛选的功能**
    
----

### 使用Babel来compile JSX
- 首先在html里引入`<script src="http://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.1/babel.min.js"></script>`
    + 这就会加入`window.Babel`这个变量
- `window.Babel.transform(code, {preset: ['es2015', 'react']})`
    + 告诉说用这两个preset来compile code
- 这只是一种方法,实际项目编译可能不是这么写的

----

### JSX深究
- Fundamentally, JSX just provides syntactic sugar for the `React.createElement(component, props, ...children)` function

### children
- `children`是一个props上的属性.是在an opening tag and a closing tag之间的content
- **注意:**如果content多余一个,children就是一个array; 但是若只有一个,就是一个单独的Object
- `React.Children.toArray(this.props.children)`会将children转换成array,不管是不是多余一个
- `React.Children.only(this.props.children)`只有当children只有一个的时候回返回这个children;
    + 若多余一个,就会报error
- !!! `props.children` isn't the actual children !!!
    + It's a descriptor of the children, you don't actually have anything to change(change the props, add functionality)
    + we can only read from it
- 可以使用`React.cloneElement(element,[props],[...children])`来新建一个element,然后再修改
    + 常用的用法之一就是: extend functionality of children components