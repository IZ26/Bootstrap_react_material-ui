const initialState = {
    todoItems: []
};

export function getValue(state='', action){
    switch(action.type){
        case 'SET_VALUE':
            return action.payload;
        default:
            return state;
    }
}

export function getTodoItems(state=initialState.todoItems, action){
    switch(action.type){
        case 'SET_TODO':
            return [...state, action.payload];
        default:
            return state;
    }
}