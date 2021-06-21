export interface InputProps {
    label: string
    value: string
    error: string | null
    onValueChange: (value: string) => void
    secret?: boolean
}

export interface InputState {
    error: string | null
    value: string
}
