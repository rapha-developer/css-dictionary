import { v4 as uuidV4 } from "uuid"
import { CourseModule } from "./CourseModule"
import { CourseProps } from "../../types/CourseProps"

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
    }: CourseProps) {
        this._id = id ?? uuidV4()
        this._name = name
        this._category = category
        this._modules = modules.map((module) => new CourseModule({
            id: module?.id,
            name: module.name,
            property: module.property
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

    public get modules(): CourseModule[] {
        return this._modules
    }
    public addModule(courseModule: CourseModule): void {
        this._modules.push(courseModule);
    }
}