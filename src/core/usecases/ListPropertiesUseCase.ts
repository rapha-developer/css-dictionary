import { Property } from "../entities/Property";

export class ListPropertiesUseCase {
    constructor(private properties: Property[]) {}

    execute(): Property[] {
        return this.properties
    }
}