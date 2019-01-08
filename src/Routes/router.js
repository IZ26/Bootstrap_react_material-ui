import React, {Component} from "react";
import {Switch} from "react-router-dom";
import {routes} from "./_routes";
import {DefaultLayout} from "./Layouts/defaultLayout";


class Routes extends Component {
    render(){
        return(
            <Switch>
                {
                    routes.map((component, index) => {
                        return(
                            <DefaultLayout
                                key={index}
                                path={component.path}
                                exact={component.exact}
                                component={component.component}
                            />
                        )
                    })
                }
            </Switch>
        )
    }
}

export default Routes;