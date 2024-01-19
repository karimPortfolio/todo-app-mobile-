

export type SignupFormBox = {
    id: number,
    value: string,
    changeFunction : (text: string) => void ,
    style:{},
    placeholder: string,
    inputSecure: boolean
}[]

