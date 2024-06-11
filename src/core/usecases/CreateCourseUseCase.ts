import { CourseModuleProps } from "../../types/CourseProps";
import { Course } from "../entities/Course";


export class CreateCourseUseCase {
    constructor(
        private name: string,
        private category: string,
        private modules: CourseModuleProps[],
        private id?: string
    ) {}

    execute(): Course {
        return new Course({
            id: this?.id,
            name: this.name,
            category: this.category,
            modules: this.modules
        });
    }
}