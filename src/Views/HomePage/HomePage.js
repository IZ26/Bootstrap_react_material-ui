import React, {Component, Fragment} from 'react';
import {Input, Todo} from "../../Components";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Input/>
                <Todo/>
            </Fragment>
        )
    }
};

export default HomePage;