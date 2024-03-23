import { inputValueAction } from "../Slices/Text/textSlice"

export const editItemValue = (store) => (next) => (action) => {
    if(action.type === 'EditItemValue') {
        store.dispatch(inputValueAction(action.payload.title));
    }
    next(action);
}