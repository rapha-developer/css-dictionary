
export type GlossaryProps = {
    id?: string
    name: string
    terms: GlossaryTermProps[]
}
export type GlossaryTermProps = {
    id?: string
    name: string
    definition: string
    references: GlossaryReference[]
}
export type GlossaryReference =  {
    name: string,
    url: string
}