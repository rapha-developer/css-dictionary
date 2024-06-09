import { v4 as uuidV4 } from "uuid"
import { Property } from "./Property"

export class CourseModule {
    private _id: string
    private _name: string
    private _property: Property

    constructor({
        id,
        name,
        property
    }: {
        id?: string
        name: string
        property: Property
    }) {
        this._id = id ?? uuidV4()
        this._name = name
        this._property = property
    }

    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get property(): Property {
        return this._property
    }
}