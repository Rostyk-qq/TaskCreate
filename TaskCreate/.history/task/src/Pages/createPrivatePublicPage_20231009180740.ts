import Posts from "../Components/PostsPage"
import Registration from "../Components/RegistrationPage"
import React from 'react'

enum PagesPath {
    REGISTRATION = '/register',
    POSTS = '/posts' 
}
interface Massive {
    path: string,
    exact?: boolean,
    element: any
}

export const PrivateMassive: Massive[] = [
    {path: PagesPath.POSTS, exact: true, element: <Posts/>}
]

export const PublicMassive: Massive[] = [
    {path: PagesPath.POSTS, exact: true, element: <Registration/>}
]

interface PageParams {
    path: string,
    exact?: boolean,
    element: React.ReactNode
}
export enum PagePaths  {
    LoginPath = '/login',
    EventPath = '/event'
}
export const publicPageMassive:PageParams[] = [
    {path: PagePaths.LoginPath, exact: true, element: <Registration/>},
]
export const privatePageMassive:PageParams[] = [
    {path: PagePaths.EventPath, exact: true, element: <EventPage/>},
]