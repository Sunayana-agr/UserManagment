import { SAVE_USER_SUCCESS, SAVE_USER_ERROR, DISPLAY_USERS } from './userAction';

export const initialUsers = {
    userStatus: {
        status: "**Please enter valid details",
        data: [],
        error: null
    }
};

export const updateUserReducerState = (state, action) => {
    return {
        ...state,
        ...action.payload
    }
}
export const userReducer = (state = initialUsers, action) => {
    return updateUserReducerState(state, action)
}
