import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "./style";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: "ilan",
        }
    }
    render() {
        const {classes} = this.props;
        const {user} = this.state;
        console.log(this.props);
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography color="inherit" className={classes.grow}>
                            News
                        </Typography>
                        <Button color="secondary">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
};

export default withStyles(styles)(Header);