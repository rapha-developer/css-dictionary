import { Course } from "../core/entities/Course";
import { CourseInfoViewModel } from "./CourseInfoViewModel";
import { CourseModuleViewModel } from "./CourseModuleViewModel";

export class CourseViewModel {
    static viewCourse(course: Course) {
        return {
            id: course.id,
            name: course.name,
            category: course.category,
            modules: course.modules.map((module) => CourseModuleViewModel.viewCourseModule(module)),
            author: course.author,
            price: course.price,
            info: CourseInfoViewModel.viewCourseInfo(course.info)
        }
    }
}