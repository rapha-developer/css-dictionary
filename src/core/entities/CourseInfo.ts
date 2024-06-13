import { v4 as uuidV4 } from "uuid"
import { CourseInfoProps } from "../../types/CourseProps"

export class CourseInfo {
    private _id: string
    private _courseName: string
    private _resume: string
    private _body: {
        first: string
        second: string
    }
    private _curriculumDesc: string

    constructor({
        id,
        courseName,
        resume,
        body,
        curriculumDesc,
    }: CourseInfoProps) {
        this._id = id ?? uuidV4()
        this._courseName = courseName ?? 'undefined course name'
        this._resume = resume
        this._body = body
        this._curriculumDesc = curriculumDesc
    }
    
    public get id(): string {
        return this._id
    }
    
    public get courseName(): string {
        return this._courseName
    }

    public get resume(): string {
        return this._resume
    }

    public get body(): CourseInfoProps['body'] {
        return this._body
    }

    public get curriculumDesc(): string {
        return this._curriculumDesc
    }
}