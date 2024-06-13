import { CourseInfo } from "../entities/CourseInfo";


export class ListCoursesInfoUseCase {
    constructor(private coursesInfo: CourseInfo[]) {}

    execute(): CourseInfo[] {
        return this.coursesInfo
    }
}