import {combineReducers} from "redux";
import {getValue, getTodoItems} from "./Todos/Todos";


export const rootReducer = combineReducers({
    getValue,
    getTodoItems
})