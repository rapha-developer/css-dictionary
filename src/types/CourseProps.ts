import { PropertyProps } from "./PropertyProps"


export type CourseProps = {
    id?: string
    name: string
    category: string
    modules: CourseModuleProps[]
}
export type CourseModuleProps = {
    id?: string
    name: string
    property: PropertyProps
}