import React, { Component } from 'react'
import { func } from 'prop-types';

//Dialog
function Dialog(props){
    return(
        <div style={{border:`4px solid ${props.color ||'blue'}`}}>
        {props.children}
        <div className="footer">{props.footer}</div>
        </div>
        
        
    )
}
function WelcomeDialog(){
    const confirmBtn = <button onClick={()=>alert('good!')}>确定</button>
    return(
        <Dialog color="green" footer={confirmBtn}>
            <h1>Welcome</h1>
            <p>Thank you</p>
        </Dialog>
    )
}
const api ={
    getUser: ()=>({name:'jerry', age:20})
}
function Fetcher(props){
    let user = api[props.name]();
    return props.children(user);
}
function FilterP(props){
    return (
        <div>
            {React.Children.map(props.children, child =>{
                console.log(child);
                if(child.type != 'p'){
                    return;
                }
                return child;
            })}
        </div>
    )
}

function RadioGroup(props){
    return(
        <div>
            {React.Children.map(props.children,child=>{
                return React.cloneElement(child,{name: props.name})
            })}
        </div>
    )
}

function Radio({children,...rest}){
    return(
        <label>
            <input type="radio" {...rest}/>{children}
        </label>
    )
}
export default class Composition extends Component {
    render() {
        return (
            <div>
                <WelcomeDialog></WelcomeDialog>
                <Fetcher name="getUser">{({name,age}) =>(<p>{name}-{age}</p>)}</Fetcher>
                <FilterP><h3>React</h3><p>reactgood</p></FilterP>
                <RadioGroup>
                    <Radio value="vue">vue</Radio>
                    <Radio>react</Radio>
                    <Radio>angular</Radio>
                </RadioGroup>
            </div>
        )
    }
}
