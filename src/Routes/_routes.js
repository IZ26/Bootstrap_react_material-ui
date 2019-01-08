import React from "react";
import {Home} from "../Views";

export const routes = [
    {
        path: '/',
        exact: true,
        component: (props) => <Home {...props}/>
    }
]