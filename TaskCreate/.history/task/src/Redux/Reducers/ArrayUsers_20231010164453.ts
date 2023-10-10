import {ArrayType, RenderNewMassive, actionArrayType } from "./Types";

const UsersArray:ArrayType = {
    usersArray: []
}

export const ArrayUsersReducer = (state = UsersArray, action: actionArrayType): ArrayType => {
    switch (action.type) {
        case RenderNewMassive.ARRAY:
    
        default:
            return state;
    }
}