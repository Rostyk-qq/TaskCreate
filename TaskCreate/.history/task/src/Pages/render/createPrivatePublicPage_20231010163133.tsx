import Registration from '../pages/RegistrationPage'
import Posts from '../pages/PostsPage'
import React, {ReactNode} from 'react'

export enum PagesPath {
    REGISTRATION = '/register',
    POSTS = '/posts' 
}
interface Massive {
    path: string,
    element: ReactNode
}

export const PrivateMassive: Massive[] = [
    {path: PagesPath.POSTS, element: <Posts/>}
]

export const PublicMassive: Massive[] = [
    {path: PagesPath.POSTS, element: <Registration/>}
]
