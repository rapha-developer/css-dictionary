import { v4 as uuidV4 } from "uuid"


export class CourseAreaUtil {
    private _id: string
    private _level: string
    private _numberModules: number
    private _language: string

    constructor({
        numberModules,
        level, 
        language,
        id
    }: {
        numberModules: number
        level?: string
        language?: string
        id?: string
    }) {
        this._id = id ?? uuidV4()
        this._level = level ?? "iniciante"
        this._numberModules = numberModules
        this._language = language ?? "português"
    }

    public get id(): string {
        return this._id
    }

    public get level(): string {
        return this._level
    }

    public get numberModules(): number {
        return this._numberModules
    }

    public get language(): string {
        return this._language
    }

    courseAreaViewModel() {
        return [
            {
                label: "level",
                value: this._level
            },
            {
                label: "módulos",
                value: this._numberModules
            },
            {
                label: "language",
                value: this._language
            }
        ]
    }
}