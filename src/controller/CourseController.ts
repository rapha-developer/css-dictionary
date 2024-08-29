import { Course } from "../core/entities/Course";
import { PropertyLink } from "../core/entities/PropertyLink";
import { CreatePropertyLinkUseCase } from "../core/usecases/CreatePropertyLinkUseCase";
import { FindPropertyLinkByAutocompleteUseCase } from "../core/usecases/FindPropertyLinkByAutocompleteUseCase";
import { FindPropertyLinkByName } from "../core/usecases/FindPropertyLinkByNameUseCase";
import { ListCoursesUseCase } from "../core/usecases/ListCoursesUseCase";
import { ListPropertyLinkUseCase } from "../core/usecases/ListPropertyLinkUseCase";
import { CourseRepository } from "../data/repositories/CourseRepository";
import { PropertyLinkRepository } from "../data/repositories/PropertyLinkRepository";


export class CourseController {
    constructor(
        private courseRepository: CourseRepository,
        private propertyLinkRepository: PropertyLinkRepository
    ) {
        this.createPropertyLinkList()
    }

    public listCourses(): Course[] {
        const listCoursesUseCase = new ListCoursesUseCase(
            this.courseRepository.listAll()
        )
        return listCoursesUseCase.execute()
    }

    public createPropertyLinkList() {
        this.courseRepository.listAll().map((course) => {
            course.modules.map((module) => {
                const propertyLinkUseCase = new CreatePropertyLinkUseCase(
                    course.id,
                    module.property.name,
                    module.id,
                );
                this.propertyLinkRepository.create(propertyLinkUseCase.execute())
            })
        });
    }
    public listPropertyLinks(): PropertyLink[] {
        const listPropertyLinks = new ListPropertyLinkUseCase(
            this.propertyLinkRepository.listAll()
        );
        return listPropertyLinks.execute();
    }

    public findPropertyLinkByName(propertyName: string): PropertyLink | null {
        const findPropertyLinkByName = new FindPropertyLinkByName(
            this.propertyLinkRepository.findByName(propertyName)
        );
        return findPropertyLinkByName.execute()
    }

    public autocompleteFindPropertyLink(propertyName: string) {
        const autocompletePropertyLink = new FindPropertyLinkByAutocompleteUseCase(
            this.propertyLinkRepository.autocomplete(propertyName)
        )
        return autocompletePropertyLink
    }
} 
