// import React, { Component } from 'react'
// import { tsConstructorType } from '@babel/types';

// //包装用户表单，增加数据管理能力、校验
// function kFormCreate(Comp) {
//     return class extends Component {
//         constructor(props) {
//             super(props);
//             this.options = {};
//             this.state = {};
//         }
//         handleChange = e => {
//             const { name, value } = e.target;
//             this.setState({
//                 [name]: value
//             })
//         }
//         getFieldDec = (field, option, InputComp) => {
//             this.options[field] = option;
//             return (
//                 <div>
//                     {React.cloneElement(InputComp, {
//                         name: field,
//                         value: this.state[field] || '',
//                         onChange: this.handleChange
//                     })}
//                 </div>
//             )
//         }
//         render() {
//             return <Comp {...this.props} getFieldDec={this.getFieldDec}></Comp>
//         }
//     };
// }


// @kFormCreate
// class KFormSample extends Component {
//     onSubmit = ()=>{

//     }
//     render() {
//         const { getFieldDec } = this.props;
//         return (
//             <div>
//                 {
//                     getFieldDec('uname', {
//                         rules: [{ required: true, message: "Please enter the user name" }]
//                     }, <input type="text" />)
//                 }
//                 {
//                     getFieldDec('upwd', {
//                         rules: [{ required: true, message: "Please enter the password" }]
//                     }, <input type="password" />)
//                 }

//                 <button>login</button>
//             </div>
//         )
//     }
// }
// export default KFormSample
