import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_LOADING } from '../actions';

export default (state = { loading: true, error: false, data: [] }, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
            }
        case FETCH_USERS_LOADING:
            return {
                ...state,
                error: false,
                loading: true,
            };
        case FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}
