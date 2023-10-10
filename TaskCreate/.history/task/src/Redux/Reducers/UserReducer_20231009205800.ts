import { ActionType, User, Params } from "./Types";

const user: User = {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordSubmit: ''
};

export const UserReducer = (state = user, action: ActionType): User => {
    switch (action.type) {
        case Params.NAME:
            return {...state, name: na action.payload}
        case Params.LAST_NAME:
            return {...state, lastName: action.payload}
        case Params.EMAIL:
            return {...state, email: action.payload}
        case Params.PASSWORD:
            return {...state, password: action.payload}
        case Params.PASSWORD_SUBMIT:
            return {...state, passwordSubmit: action.payload}
        default:
            return state;
    }
}