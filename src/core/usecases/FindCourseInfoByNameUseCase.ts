import { CourseInfo } from "../entities/CourseInfo";


export class FindCourseInfoByNameUseCase {
    constructor(private courseInfo: CourseInfo | null) {}

    execute(): CourseInfo | null {
        return this.courseInfo
    }
}