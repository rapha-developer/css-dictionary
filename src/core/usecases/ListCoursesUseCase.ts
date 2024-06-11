import { Course } from "../entities/Course";

export class ListCoursesUseCase {
    constructor(private courses: Course[]) {}

    execute(): Course[] {
        return this.courses
    }
}