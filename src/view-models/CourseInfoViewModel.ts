import { CourseInfo } from "../core/entities/CourseInfo";

export class CourseInfoViewModel {
    static viewCourseInfo(courseInfo: CourseInfo) {
        return {
            id: courseInfo.id,
            resume: courseInfo.resume,
            courseName: courseInfo.courseName,
            body: courseInfo.body,
            curriculumDesc: courseInfo.curriculumDesc
        }
    }
    static viewError404() {
        return {
            id: "id null",
            resume: "resume null",
            courseName: "courseName null",
            body: {
                first: "null",
                second: "null"
            },
            curriculumDesc: "curriculum null"
        }
    }
}