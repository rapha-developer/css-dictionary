import { CourseModule } from "../core/entities/CourseModule";
import { PropertyViewModel } from "./PropertyViewModel";

export class CourseModuleViewModel {
    static viewCourseModule(courseModule: CourseModule) {
        return {
            id: courseModule.id,
            name: courseModule.name,
            property: PropertyViewModel.viewProperty(courseModule.property)
        }
    }
}