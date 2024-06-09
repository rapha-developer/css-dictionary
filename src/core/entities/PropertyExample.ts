import { v4 as uuidV4 } from "uuid"
import { PropertyExampleProps } from "../../types/PropertyProps"

export class PropertyExample {
    private _id: string
    private _name: string
    private _code: string

    constructor({
        id,
        name,
        code
    }: 
    PropertyExampleProps ) {
        this._id = id ?? uuidV4()
        this._name = name
        this._code = code
    }

    public get id(): string {
        return this._id
    }
    
    public get name(): string {
        return this._name
    }
    
    public get code(): string {
        return this._code
    }
}