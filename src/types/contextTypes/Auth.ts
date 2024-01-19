import { Dispatch, SetStateAction } from "react"


export type User = {
    id: number,
    email: string,
    name: string,
}

export interface AuthContext {
    AUTH: boolean,
    user: User | null,
    loading: boolean,
    retrieveToken: () => void,
    signup: (name: string, email:string, password: string, confirmPassword: string) => void,
    signin: (email:string, password: string) => void,
    logout: () => void
}


