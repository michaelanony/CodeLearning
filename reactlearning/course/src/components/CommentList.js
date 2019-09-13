import React, { Component, PureComponent } from 'react'

// function Comment({data}){
//     console.log("sa")
//     return(
//         <div>
//             <p>{data.body}</p>
//             <p>{data.author}</p>
//         </div>
//     )
// }
class Comment extends PureComponent {
    
    shouldComponentUpdate(nextProps){
        if(nextProps.data.body == this.props.data.body && 
           nextProps.data.author == this.props.data.author
           ){
               return false;
           }
           return true;
    }
    render() {
        console.log('render')
        return (
            <div>
                <p>{this.props.data.body}</p>
                <p>-----{this.props.data.author}</p>
            </div>
        )
    }
}

export default class CommentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        };
      
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                comments:[
                    {body: 'react', author:'face'},
                    {body:'vue', author:'youyu'},
               ]
            })
      
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.comments.map((c,i) => (
                    <Comment key={i} data={c} author={c.author}></Comment>
                ))}
            </div>
        )
    }
}
