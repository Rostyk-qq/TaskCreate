import Posts from "../Components/PostsPage"
import Registration from "../Components/RegistrationPage"
import ReactNode from 'react'

enum PagesPath {
    REGISTRATION = '/register',
    POSTS = '/posts' 
}
interface Massive {
    path: string,
    element: ReactN
}


export const PrivateMassive = [
    {path: PagesPath.POSTS, element: <Posts/>}
]
export const PublicMassive = [
    
]