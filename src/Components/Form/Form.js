import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {styles} from "./style";
import PropTypes from 'prop-types';

const Input = (props) => {
    const {classes} = props;
    return(
        <TextField
            id="standard-name"
            label={props.label}
            className={classes.textField}
            value={props.value}
            onChange={props.onChange}
            margin="normal"
        />
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired
}

export default withStyles(styles)(Input);