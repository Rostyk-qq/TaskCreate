import Posts from "../Components/PostsPage"
import Registration from "../Components/RegistrationPage"
import React, {ReactComponentElement, ReactNode} from 'react'

enum PagesPath {
    REGISTRATION = '/register',
    POSTS = '/posts' 
}
interface Massive {
    path: string,
    exact?: boolean,
    element: ReactDOM
}

export const PrivateMassive: Massive[] = [
    {path: PagesPath.POSTS, exact: true, element: Posts}
]

export const PublicMassive: Massive[] = [
    {path: PagesPath.POSTS, exact: true, element: <Registration/>}
]