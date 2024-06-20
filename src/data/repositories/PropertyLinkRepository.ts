import { PropertyLink } from "../../core/entities/PropertyLink";

export class PropertyLinkRepository {
    private propertyLinks: PropertyLink[] = []

    public create(propertyLink: PropertyLink) {
        this.propertyLinks.push(propertyLink)
    }
    
    public listAll(): PropertyLink[] {
        return this.propertyLinks
    }

    public findByName(propertyName: string): PropertyLink | null {
        const propertyLink = this.propertyLinks.find((propertyLinkItem) => propertyLinkItem.name === propertyName)

        if(!propertyLink) {
            return null
        }
        return propertyLink
    }

    public autocomplete(propertyName: string): PropertyLink[] | [] {
        const propertyListLinks = this.propertyLinks.filter((propertyLink) => propertyLink.name.includes(propertyName))
        if (propertyListLinks.length === 0) { return [] }
        return propertyListLinks
    }
}