import { Property } from "../core/entities/Property";
import { PropertyExampleViewModel } from "./PropertyExampleViewModel";
import { PropertyValueViewModel } from "./PropertyValueViewModel";

export class PropertyViewModel {
    static viewProperty(property: Property) {
        return {
            id: property.id,
            name: property.name,
            definition: property.definition,
            category: property.category,
            values: property.values.map((value) => PropertyValueViewModel.viewPropertyValue(value)),
            examples: property.examples.map((example) => PropertyExampleViewModel.viewPropertyExample(example)) 
        }
    }
}