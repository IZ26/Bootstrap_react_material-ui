import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import {Header} from "../../Layouts";

export const DefaultLayout = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={matchProps => (
            <Fragment>
                <Header/>
                <Component {...matchProps}/>
            </Fragment>
        )} />
    )
};
