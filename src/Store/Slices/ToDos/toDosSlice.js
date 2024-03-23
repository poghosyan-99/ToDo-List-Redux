export const initialaToDos = [];

export const toDosReducer = (state = initialaToDos, action) => {
    switch(action.type) {
        case 'AddTodoItem':
            return [
                ...state,
                {
                    id: new Date().getTime().toString(),
                    title: action.payload,
                    isCompleted: false
                },
            ];
        case 'DeleteTodoItem':
            return state.filter((el) => el.id !== action.payload);
        case 'CheckTodoItem':
            return state.map((el) => 
                el.id === action.payload ? {...el, isCompleted: !el.isCompleted} : el
            );
        case 'EditToDoItem':
            return state.map((el) => el.id === action.payload.editingId ? {...el, title: action.payload.title} : el);
        default:
            return state;
    }
};

export const selectTodos = (state) => state.todos;

export const addTodoItemAction = (payload) => ({type: 'AddTodoItem', payload});
export const deleteTodoItemAction = (payload) => ({type: 'DeleteTodoItem', payload});
export const checkTodoItemAction = (payload) => ({type: 'CheckTodoItem', payload});
export const actionEditingToDo = (payload) => ({type: 'EditToDoItem', payload});

