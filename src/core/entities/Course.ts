import { v4 as uuidV4 } from "uuid"
import { CourseModule } from "./CourseModule"
import { CourseProps } from "../../types/CourseProps"
import { CourseInfo } from "./CourseInfo"

export class Course {
    private _id: string
    private _name: string
    private _category: string
    private _modules: CourseModule[]
    private _author: {
        name: string 
        gravatar: string
    }
    private _price: string
    private _info: CourseInfo

    constructor({
        id,
        name,
        category,
        modules,
        author,
        price,
        info
    }: CourseProps) {
        this._id = id ?? uuidV4()
        this._name = name
        this._category = category
        this._modules = modules.map((module) => new CourseModule({
            id: module?.id,
            name: module.name,
            property: module.property
        }))
        this._author = author
        this._price = price
        this._info = new CourseInfo({
            courseName: name,
            body: info.body,
            resume: info.resume,
            curriculumDesc: info.curriculumDesc
        })
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

    public get author(): CourseProps['author'] {
        return this._author
    }
    
    public get price(): string {
        return this._price
    }

    public get info(): CourseInfo {
        return this._info
    }
    
    public addModule(courseModule: CourseModule): void {
        this._modules.push(courseModule);
    }
}