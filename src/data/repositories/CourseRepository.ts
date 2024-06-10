import { Course } from "../../core/entities/Course";


export class CourseRepository {
    private courses: Course[] = []

    public create(course: Course) {
        this.courses.push(course)
    }

    public listAll(): Course[] {
        return this.courses
    }

    public findByName(courseName: string): Course | null {
        const course = this.courses.find((courseItem) => courseItem.name === courseName)

        if(!course) {
            return null
        }
        return course
    } 
}