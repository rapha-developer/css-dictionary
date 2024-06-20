import { PropertyLink } from "../entities/PropertyLink";

export class FindPropertyLinkByName {
    constructor(private propertyLink: PropertyLink | null) {}

    execute(): PropertyLink | null {
        return this.propertyLink
    }
}