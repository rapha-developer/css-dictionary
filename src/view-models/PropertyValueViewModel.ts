import { PropertyValue } from "../core/entities/PropertyValue";

export class PropertyValueViewModel {
    static viewPropertyValue(propertyValue: PropertyValue) {
        return {
            id: propertyValue.id,
            name: propertyValue.name,
            value: propertyValue.value
        }
    }
}