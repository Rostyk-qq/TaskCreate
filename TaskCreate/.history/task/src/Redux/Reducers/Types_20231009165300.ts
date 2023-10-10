export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    passwordSubmit: string
}
export enum Params{
    NAME = 'USER_NAME',
    EMAIL = 'USER_EMAIL',
    PASSWORD = 'USER_PASSWORD',
    PASSWORD_SUBMIT = 'USER_PASSWORD_SUBMIT'
}
export interface actionTypeName {
    type: Params.NAME,
    payload: string
}
export interface actionTypeEmail {
    type: Params.EMAIL,
    payload: string
}
export interface actionTypePassword {
    type: Params.EMAIL,
    payload: string
}