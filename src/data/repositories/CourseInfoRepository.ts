import { CourseInfo } from "../../core/entities/CourseInfo";


export class CourseInfoRepository {
    private coursesInfo: CourseInfo[] = []

    public create(courseInfo: CourseInfo) {
        this.coursesInfo.push(courseInfo)
    }

    public listAll(): CourseInfo[] {
        return this.coursesInfo
    }

    public findByName(courseName: string): CourseInfo | null {
        const courseInfo = this.coursesInfo.find((courseInfoItem) => courseInfoItem.courseName === courseName)

        if(!courseInfo) {
            return null
        }
        return courseInfo
    } 
}
