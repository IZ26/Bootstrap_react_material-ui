export function todosActions(value){
    return{
        type: 'SET_VALUE',
        payload: value
    }
}

export function setTodoItem(value){
    return{
        type: 'SET_TODO',
        payload: value
    }
}