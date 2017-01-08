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