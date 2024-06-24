import { v4 as uuidV4 } from "uuid"
import { GlossaryProps } from "../../types/GlossaryProps"
import { GlossaryTerm } from "./GlossaryTerm"

export class Glossary {
    private _id: string
    private _name: string
    private _terms: GlossaryTerm[]

    constructor({
        id,
        name,
        terms
    }: GlossaryProps) {
        this._id = id ?? uuidV4()
        this._name = name
        this._terms = terms.map((term) => new GlossaryTerm({
            id: term?.id,
            name: term.name,
            definition: term.definition,
            references: term.references
        }))
    }

    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get terms(): GlossaryTerm[] {
        return this._terms
    }
}