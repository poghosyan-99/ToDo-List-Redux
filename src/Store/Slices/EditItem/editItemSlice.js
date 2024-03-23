export let initialEditItem = null;

export const editItemReducer = (state = initialEditItem, action) => {
    switch(action.type) {
        case 'EditItemValue':
            return action.payload;
        case 'ResetEditValue':
            return null;
        default:
            return state;
    }
};

export const selectEditItem = (state) => state.editItem;
export const actionEditItemValue = (payload) => ({type: 'EditItemValue', payload});
export const actionResetEditItemValue = () => ({type: 'ResetEditValue'});