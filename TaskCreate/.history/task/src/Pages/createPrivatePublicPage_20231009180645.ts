import Posts from "../Components/PostsPage"
import Registration from "../Components/RegistrationPage"
import React from 'react'

enum PagesPath {
    REGISTRATION = '/register',
    POSTS = '/posts' 
}
interface Massive {
    element: a,
    path: string,
    exact?: boolean,
}

export const PrivateMassive: Massive[] = [
    {path: PagesPath.POSTS, exact: true, element: <Posts/>}
]

export const PublicMassive: Massive[] = [
    {path: PagesPath.POSTS, exact: true, element: <Registration/>}
]