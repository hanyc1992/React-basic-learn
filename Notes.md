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