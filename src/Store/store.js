import { applyMiddleware, combineReducers, createStore } from 'redux';
import { initailaText, textReducer } from './Slices/Text/textSlice';
import { initialaToDos, toDosReducer } from './Slices/ToDos/toDosSlice';
import { editItemReducer, initialEditItem } from './Slices/EditItem/editItemSlice';
import { EditingTodoItem, ignoreEmptyToDo } from './Middleware/toDosMiddleware';
import { editItemValue } from './Middleware/editItemMiddleware';


const store = createStore(
    combineReducers({
        text: textReducer,
        todos: toDosReducer,
        editItem: editItemReducer,
    }),
    {
        text: initailaText,
        todos: initialaToDos,
        editItem: initialEditItem,
    },
    applyMiddleware(ignoreEmptyToDo, editItemValue, EditingTodoItem)
);

export default store;



