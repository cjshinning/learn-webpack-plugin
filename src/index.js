// import _ from 'lodash';
// import './style.css';

// function component(){
//     const element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     return element;
// }

// document.body.appendChild(component());


// // 参考：
// // https://juejin.cn/post/6844903880866824200
// // https://segmentfault.com/a/1190000021821557
// // webpack中英文官网
// https://webpack.wuhaolin.cn/5%E5%8E%9F%E7%90%86/5-4%E7%BC%96%E5%86%99Plugin.html

// loader开发
// const name = require('./name.txt');
// console.log(name);

// const html = require('./test.html');
// console.log(html);

import data from './foo.xml';

function component(){
    var element = document.createElement('div');
    element.innerHTML = data.note.body;
    element.classList.add('header');
    console.log(data);
    return element;
}

document.body.appendChild(component());
