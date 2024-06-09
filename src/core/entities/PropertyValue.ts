import { v4 as uuidV4 } from 'uuid'

export class PropertyValue {
    private _id: string
    private _name: string
    private _value: string

    constructor({
        id,
        name,
        value
    }: {
        id?: string,
        name: string,
        value: string
    }) {
        this._id = id ?? uuidV4()
        this._name = name
        this._value = value
    }
    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get value(): string {
        return this._value
    }
}