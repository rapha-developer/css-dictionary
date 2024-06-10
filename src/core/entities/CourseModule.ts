import { v4 as uuidV4 } from "uuid"
import { Property } from "./Property"
import { CourseModuleProps } from "../../types/CourseProps"

export class CourseModule {
    private _id: string
    private _name: string
    private _property: Property

    constructor({
        id,
        name,
        property
    }: CourseModuleProps) {
        this._id = id ?? uuidV4()
        this._name = name
        this._property = new Property({
            id: property?.id,
            name: property.name,
            category: property.category,
            values: property.values,
            examples: property.examples
        })
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