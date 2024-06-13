import { CourseInfo } from "../entities/CourseInfo"


export class CreateCourseInfoUseCase {
    constructor(
        private resume: string,
        private body: {
            first: string
            second: string
        },
        private curriculumDesc: string,
        private courseName?: string,
        private id?: string
    ) {}

    execute(): CourseInfo {
        return new CourseInfo({
            id: this?.id,
            courseName: this?.courseName,
            resume: this.resume,
            body: this.body,
            curriculumDesc: this.curriculumDesc
        })
    }
}