import { actionRenderType, RenderProps, ArrayUsers } from "./Types";

export const pageRenderCreator = {
    CreatorRender: (payload: boolean): actionRenderType => ({ type: RenderProps.RENDER, payload })
}
export const usersArrayCreator = {
    CreatorArrayUsers: (payload: boolean): actionRenderType => ({ type: RenderProps.RENDER, payload })
}

export interface ArrayUsers {
    id: number, 
    name: string, 
    email: string, 
    password: string
}
export interface ArrayType{
    usersArray: ArrayUsers[]
} 
export enum RenderNewMassive {
    ARRAY = 'NEW_ARRAY'
}
export interface actionArrayType {
    type: RenderNewMassive.ARRAY,
    payload: ArrayUsers[]
}