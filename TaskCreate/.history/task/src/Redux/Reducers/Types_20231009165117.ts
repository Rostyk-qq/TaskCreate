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
    PASSWORD
}