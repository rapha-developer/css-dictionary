import { Property } from "../../core/entities/Property";


export class PropertyRepository {
    private properties: Property[] = []

    public create(property: Property) {
        this.properties.push(property)
    }

    public listAll(): Property[] {
        return this.properties
    }

    public findByName(propertyName: string): Property | null {
        const property = this.properties.find((property) => property.name === propertyName) 
        
        if(!property) {
            return null
        }
        return property
    }
}