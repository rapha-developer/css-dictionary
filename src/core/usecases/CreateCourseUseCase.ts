import { CourseInfoProps, CourseModuleProps } from "../../types/CourseProps";
import { Course } from "../entities/Course";


export class CreateCourseUseCase {
    constructor(
        private name: string,
        private category: string,
        private author: {
            name: string
            gravatar: string
        },
        private price: string,
        private modules: CourseModuleProps[],
        private info: CourseInfoProps,
        private id?: string
    ) {}

    execute(): Course {
        return new Course({
            id: this?.id,
            name: this.name,
            category: this.category,
            author: this.author,
            price: this.price,
            modules: this.modules,
            info: this.info
        });
    }
}