import { ActionType, User, Params } from "./Types";

const user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    passwordSubmit: ''
};

export const UserReducer = (state = user, action: ActionType): User => {
    switch (action.type) {
        case Params.NAME:
            return {...state, name: action.payload}
            break;
        case Params.NAME:
            return {...state, name: action.payload}
            break;
        default:
            return state;
    }
}