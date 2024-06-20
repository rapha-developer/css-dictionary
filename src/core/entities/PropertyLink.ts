import { v4 as uuidV4 } from "uuid"

export class PropertyLink {
    private _id: string
    private _name: string
    private _courseID: string
    private _moduleID: string

    constructor({
        id,
        name,
        courseID,
        moduleID
    }: {
        id?: string
        name: string
        courseID: string
        moduleID:  string
    }) {
        this._id = id ?? uuidV4()
        this._name = name
        this._courseID = courseID
        this._moduleID = moduleID
    }

    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get moduleID(): string {
        return this._moduleID
    }

    public get courseID(): string {
        return this._courseID
    }
    propertyLinkViewModel(): {
        courseID: string
        name: string
        moduleID: string
    }{
        return {
            courseID: this._courseID,
            name: this._name,
            moduleID: this._moduleID
        }
    }
}