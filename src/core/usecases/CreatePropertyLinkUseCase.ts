import { PropertyLink } from "../entities/PropertyLink";

export class CreatePropertyLinkUseCase {
    constructor(
        private courseID: string,
        private name: string,
        private moduleID: string,
        private id?: string
    ) {}

    execute(): PropertyLink {
        return new PropertyLink ({
            courseID: this.courseID,
            name: this.name,
            moduleID: this.moduleID,
            id: this?.id
        })
    }
}