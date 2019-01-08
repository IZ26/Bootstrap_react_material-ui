import React, {Component} from 'react';
import {connect} from "react-redux";
import {setTodoItem, todosActions} from "../../../redux/Actions/Todos/TodosActions";
import {compose} from "redux";
import {Form} from "../../Presentationals";

class Input extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
    }
    onChangeUsername(e){
        return this.props.setValue(e.target.value);
    }
    submit = () => {
        this.props.setTodoItem({subtitle: this.props.value});
    }
    render(){
        const {classes} = this.props;
        console.log(this.props);
        return(
            <Form
                label="to make"
                value={this.props.value}
                onChange={this.onChangeUsername}
                submit={this.submit}
            />
        )
    }
}

const mapStateToProps = state => {
    return{
        value: state.getValue,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        setValue: (value) => dispatch(todosActions(value)),
        setTodoItem: (value) => dispatch(setTodoItem(value))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Input);