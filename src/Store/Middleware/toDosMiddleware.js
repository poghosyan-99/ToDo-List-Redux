import { actionResetEditItemValue }  from '../Slices/EditItem/editItemSlice';
import { actionEditingToDo } from '../Slices/ToDos/toDosSlice';


export const ignoreEmptyToDo = (store) => (next) => (action) => {
    if(action.type === 'AddTodoItem' && !store.getState().text.trim()) {
        return;
    }
    next(action);
};

export const EditingTodoItem = (store) => (next) => (action) => {
    if(action.type === 'AddTodoItem' && store.getState().editItem) {
        action.type = 'EditToDoItem';

        let editingItem = {
            editingId: store.getState().editItem.id,
            title: action.payload,
            isCompleted: store.getState().editItem.isCompleted,
        };
        store.dispatch(actionEditingToDo(editingItem));
        store.dispatch(actionResetEditItemValue());
    }
    next(action);
}