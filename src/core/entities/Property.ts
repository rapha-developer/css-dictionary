import { v4 as uuidV4 } from "uuid";
import { PropertyValue } from "./PropertyValue";
import { PropertyExample } from "./PropertyExample";
import { PropertyExampleProps, PropertyValueProps } from "../../types/PropertyProps";

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
        id?: string,
        name: string,
        category: "css property" | "css function" | string
        values: PropertyValueProps[]
        examples: PropertyExampleProps[]
    }) {
        this._id = id ?? uuidV4()
        this._name = name
        this._category = category
        this._values = values.map((item) => new PropertyValue({
            id: item?.id,
            name: item.name,
            value: item.value
        }))
        this._examples = examples.map((example) => new PropertyExample({
            id: example?.id,
            name: example.name,
            code: example.code
        }))
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

    public get values(): {
        id?: string,
        name: string,
        value: string
    }[] {
        return this._values
    }

    public get examples(): {
        id?: string
        name: string
        code: string
    }[] {
        return this._examples
    }
}