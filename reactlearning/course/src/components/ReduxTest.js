import React, { Component } from 'react'

import{connect} from 'react-redux'

class ReduxTest extends Component {
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <div>
                    <button onClick={()=>this.props.minus()}>-</button>
                    <button onClick={()=>this.props.add()}>+</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({ num:state });
const mapDispatchToProps = dispatch =>({
    add: ()=> dispatch({type:"add"}),
    minus: () =>dispatch({type:"minus"})
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTest);