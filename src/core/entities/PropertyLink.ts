import { v4 as uuidV4 } from "uuid"

export class PropertyLink {
    private _id: string
    private _name: string
    private _courseID: string
    private _propertyID: string

    constructor({
        id,
        name,
        courseID,
        propertyID
    }: {
        id?: string
        name: string
        courseID: string
        propertyID:  string
    }) {
        this._id = id ?? uuidV4()
        this._name = name
        this._courseID = courseID
        this._propertyID = propertyID
    }

    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get propertyID(): string {
        return this._propertyID
    }

    public get courseID(): string {
        return this._courseID
    }
    propertyLinkViewModel(): {
        courseID: string
        name: string
        propertyID: string
    }{
        return {
            courseID: this._courseID,
            name: this._name,
            propertyID: this._propertyID
        }
    }
}