export let initailaText = '';

export const textReducer = (state = initailaText, action) => {
    switch(action.type) {
        case 'ToggleText':
            return action.payload;
        case 'ResetText':
            return '';
        default:
            return state;
    }
}


export const selectText = (state) => state.text;
export const inputValueAction = (payload) => ({ type: 'ToggleText', payload });
export const selectResetText = () => ({type: "ResetText"})