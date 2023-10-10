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
            return {..state}
            break;
    
        default:
            return state;
    }
}