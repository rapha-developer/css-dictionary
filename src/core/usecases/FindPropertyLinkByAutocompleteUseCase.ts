import { PropertyLink } from "../entities/PropertyLink";

export class FindPropertyLinkByAutocompleteUseCase {
    constructor(private propertyLinks: PropertyLink[] | []) {}

    execute(): PropertyLink[] | [] {
        return this.propertyLinks
    }
}