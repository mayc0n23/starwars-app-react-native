const initialState = {
    data: {}
};

const planetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_PLANETS':
            return {...state, data: action.payload};
        case 'FAIL':
            return state;
        default:
            return state;
    }
}

export default planetReducer;