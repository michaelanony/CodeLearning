import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Lifecycle from './Lifecycle';
import CartSample from './CartSample';
import CommentList from './components/CommentList';
import Composition from './components/Composition';
import AntdTest from './components/AntdTest';
import store from './store'
import ReduxTest from './components/ReduxTest';
import {Provider} from 'react-redux';
import Sagas from './stores/Sagas';
// import Hoc from './components/Hoc';

// ReactDOM.render(<h1>React真酷</h1>, document.querySelector('#root'))
//ReactDOM.render(<App/>, document.querySelector('#root'))
//ReactDOM.render(<CommentList/>, document.querySelector('#root'))
// ReactDOM.render(<Composition/>, document.querySelector('#root'))
ReactDOM.render(<Sagas/>, document.querySelector('#root'))

//ReactDOM.render(<Hoc stage="react"/>, document.querySelector('#root'))
// ReactDOM.render(<AntdTest stage="react"/>, document.querySelector('#root'))
// ReactDOM.render(<Lifecycle/>, document.querySelector('#root'))
// ReactDOM.render(<CartSample title="React购物车"/>, document.querySelector('#root'))


// 动态渲染
// function tick() {
//     // ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>, document.querySelector('#root'))
// }
// setInterval(tick, 1000);
// function render(){
//     ReactDOM.render((
//         <Provider store = {store}>
//             <ReduxTest/>
//         </Provider>
//     ), document.querySelector('#root'))
// }
// render()