
export type PropertyProps = {
    id?: string,
    name: string,
    category: "css property" | "css function" | string
    values: PropertyValueProps[]
    examples: PropertyExampleProps[]
}

export type PropertyValueProps = {
    id?: string,
    name: string,
    value: string
}
export type PropertyExampleProps = {
    id?: string
    name: string
    code: string
}