
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


export interface User {
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    passwordSubmit: string
}
export interface RenderPage {
    render: boolean
} 
export enum RenderProps {
    RENDER = 'RENDER_PAGE'
}
export interface actionRenderType {
    type: RenderProps.RENDER,
    payload: boolean
}