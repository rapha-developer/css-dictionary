import { v4 as uuidV4 } from "uuid"
import { GlossaryTermProps } from "../../types/GlossaryProps"

export class GlossaryTerm {
    private _id: string
    private _name: string
    private _definition: string
    private _references: GlossaryTermProps['references']

    constructor({
        id,
        name,
        definition,
        references
    }: GlossaryTermProps) {
        this._id = id ?? uuidV4()
        this._name = name
        this._definition = definition
        this._references = references
    }

    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get definition(): string {
        return this._definition
    }

    public get references(): GlossaryTermProps['references'] {
        return this._references
    }
}