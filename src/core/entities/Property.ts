import { v4 as uuidV4 } from "uuid";
import { PropertyValue } from "./PropertyValue";
import { PropertyExample } from "./PropertyExample";

export class Property {
    private _id: string;
    private _name: string;
    private _category: "css property" | "css function" | string
    private _values: PropertyValue[]
    private _examples: PropertyExample[]

    constructor({
        id, 
        name,
        category,
        values,
        examples,
    }: {
        id: string,
        name: string,
        category: "css property" | "css function" | string
        values: PropertyValue[]
        examples: PropertyExample[]
    }) {
        this._id = id ?? uuidV4()
        this._name = name
        this._category = category
        this._values = values
        this._examples = examples
    }

    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }
    
    public get category(): string {
        return this._category
    }

    public get values(): PropertyValue[] {
        return this._values
    }

    public get examples(): PropertyExample[] {
        return this._examples
    }
}