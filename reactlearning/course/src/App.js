import React, { Component } from 'react'
import logo from "./logo.svg"
import  "./App.css"
import { Table } from 'antd';

function Welcome1(props) {
  return(
      <div>
        Hello,{props.name}
      </div>
  )
}
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      date: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(()=> {
      this.setState({
        date:new Date()
      })
    }, 1000);
  }
  componentWillUnmount() {
      clearInterval(this.timer);
  }

    formateName(user){
    return user.firstName + ' '+user.lastName;
  }
  render() {
    const name = 'jerry';

    return (
      <div>

        <h1>{name}</h1>
        <p>{this.formateName({firstName:'tom',lastName:'jerry'})}</p>
        <img src={logo}/>
        <Welcome1 name="tom"></Welcome1>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}
