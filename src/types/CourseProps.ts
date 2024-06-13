import { PropertyProps } from "./PropertyProps"


export type CourseProps = {
    id?: string
    name: string
    category: string
    modules: CourseModuleProps[]
    author: {
        name: string
        gravatar: string
    }
    price: string
}
export type CourseModuleProps = {
    id?: string
    name: string
    property: PropertyProps
}

export type CourseInfoProps = {
    id?: string,
    courseName?: string
    resume: string
    body: {
        first: string,
        second: string,
    },
    curriculumDesc: string
}