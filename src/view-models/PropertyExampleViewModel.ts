import { PropertyExample } from "../core/entities/PropertyExample";

export class PropertyExampleViewModel {
    static viewPropertyExample(propertyExample: PropertyExample) {
        return {
            id: propertyExample.id,
            name: propertyExample.name,
            code: propertyExample.code
        }
    }
}