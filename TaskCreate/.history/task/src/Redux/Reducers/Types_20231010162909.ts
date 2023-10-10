export interface User {
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    passwordSubmit: string
}
export interface actionTypeName {
    type: Params.NAME,
    payload: string
}
export interface actionTypeLastName {
    type: Params.LAST_NAME,
    payload: string
}
export interface actionTypeEmail {
    type: Params.EMAIL,
    payload: string
}
export interface actionTypePassword {
    type: Params.PASSWORD,
    payload: string
}
export interface actionTypePasswordSubmit {
    type: Params.PASSWORD_SUBMIT,
    payload: string
}
export type ActionType = 
actionTypeName | actionTypeLastName | actionTypeEmail 
| actionTypePassword | actionTypePasswordSubmit

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