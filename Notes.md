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