const initialState = {
    data: {}
};

const starshipReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_STARSHIPS':
            return {...state, data: action.payload};
        case 'FAIL':
            return state;
        default:
            return state;
    }
}

export default starshipReducer;