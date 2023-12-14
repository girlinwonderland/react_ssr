export const FETCH_USERS = 'fetch_users';
export const FETCH_USERS_LOADING = 'fetch_users_loading';

export const FETCH_USERS_ERROR = 'fetch_users_error';
export const FETCH_CURRENT_USER = 'fetch_current_user';
export const FETCH_ADMINS = 'fetch_admins';
export const fetchUsers = () => async (dispatch, getState, api) => {
    dispatch({
        type: FETCH_USERS_LOADING,
    })
    try {
        const res = await api.get('/users');
        dispatch({
            type: FETCH_USERS,
            payload: res
        });
    } catch (e) {
        dispatch({
            type: FETCH_USERS_ERROR,
        })
    }
}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
}

export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = await api.get('/admins');
    dispatch({
        type: FETCH_ADMINS,
        payload: res
    });
}
