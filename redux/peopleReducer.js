const initialState = {
    data: {}
};

const peopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_PEOPLES':
            return {...state, data: action.payload};
        case 'FAIL':
            return state;
        default:
            return state;
    }
}

export default peopleReducer;