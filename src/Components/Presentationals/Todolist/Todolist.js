import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "./style";

const Todo = (props) =>{
    const {classes} = props;
    return(
        <div>
            <h1 className={classes.title}>To do</h1>
            {
                props.content.length <= 0 ? <p>Empty</p> : props.content.map((datas, index) => {
                    return(
                        <div key={index}>
                        <p>{datas.subtitle}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default withStyles(styles)(Todo);