import { Course } from "../core/entities/Course";

export class CourseViewModel {
    static viewCourse(course: Course) {
        return {
            id: course.id,
            name: course.name,
            category: course.category,
            modules: course.modules,
            author: course.author,
            price: course.price
        }
    }
}