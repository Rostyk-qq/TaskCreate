import {ArrayType, RenderNewMassive, actionArrayType } from "./Types";

const UsersArray:ArrayType = {
    usersArray: []
}

export const ArrayUsersReducer = (state = UsersArray, action: actionArrayType): ArrayType => {
    switch (action.type) {
        case value:
    
        default:
            return state;
    }
}