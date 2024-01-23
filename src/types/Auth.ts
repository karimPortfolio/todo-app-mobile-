

export type SignupFormBox = {
    id: number,
    field?: string,
    value: string,
    changeFunction : (text: string) => void ,
    style:{},
    placeholder: string,
    inputSecure: boolean
}[]

