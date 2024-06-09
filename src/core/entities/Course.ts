import { v4 as uuidV4 } from "uuid"
import { CourseModule } from "./CourseModule"

export class Course {
    private _id: string
    private _name: string
    private _category: string
    private _modules: CourseModule[]

    constructor({
        id,
        name,
        category,
        modules
    }: {
        id?: string
        name: string
        category: string
        modules: CourseModule[]
    }) {
        this._id = id ?? uuidV4()
        this._name = name
        this._category = category
        this._modules = modules
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

    public get modules(): CourseModule[] {
        return this._modules
    }
    public addModule(courseModule: CourseModule): void {
        this._modules.push(courseModule);
    }
}