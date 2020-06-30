export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

const initialState = {
    fetching: false,
    error: null,
    listLichChay: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                listLichChay: action.data
            }
        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;