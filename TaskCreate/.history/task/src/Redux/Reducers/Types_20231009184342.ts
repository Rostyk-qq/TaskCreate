export interface User {
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    passwordSubmit: string
}
export enum Params{
    NAME = 'USER_NAME',
    LAST_NAME = 'LAST_NAME',
    EMAIL = 'USER_EMAIL',
    PASSWORD = 'USER_PASSWORD',
    PASSWORD_SUBMIT = 'USER_PASSWORD_SUBMIT'
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
export interface action