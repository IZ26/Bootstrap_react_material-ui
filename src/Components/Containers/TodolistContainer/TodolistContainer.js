import React, {Component} from 'react';
import {Todolist} from "../../Presentationals";
import {connect} from "react-redux";
import {compose} from "redux";

class Todo extends Component{
    render(){
        return(
            <Todolist
                content={this.props.todoItems}
            />
        )
    }
}
const mapStateToProps = state => {
    return{
        todoItems: state.getTodoItems,
    }
}


export default compose(connect(mapStateToProps))(Todo);
