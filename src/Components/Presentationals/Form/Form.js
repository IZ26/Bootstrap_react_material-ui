import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {styles} from "./style";
import PropTypes from 'prop-types';


const Input = (props) => {
    const {classes} = props;
    return(
        <div>
            <TextField
                id="standard-name"
                label={props.label}
                className={classes.textField}
                value={props.value}
                onChange={props.onChange}
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={props.submit}
            >
                Primary
            </Button>
        </div>
    )
};


Input.propTypes = {
    label: PropTypes.string.isRequired
};

export default withStyles(styles)(Input);