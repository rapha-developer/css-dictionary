import { PropertyLink } from "../entities/PropertyLink";

export class ListPropertyLinkUseCase {
    constructor(private listPropertyLinks: PropertyLink[]) {}

    execute(): PropertyLink[] {
        return this.listPropertyLinks
    }
}