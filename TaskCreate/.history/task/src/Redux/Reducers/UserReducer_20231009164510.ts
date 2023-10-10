
interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    passwordSubmit: string
}

const user: Partial<User> = {};

export const 