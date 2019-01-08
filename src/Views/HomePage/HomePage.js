import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Input} from "../../Components";

const styles = theme => ({});

class HomePage extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Input label='To do'/>
            </div>
        )
    }
};

export default withStyles(styles)(HomePage);