
export 

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