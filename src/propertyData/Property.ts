import { PropertyExample, PropertyValue } from "./PropertyInterfaces"

export abstract class Property {
    protected abstract definition: string
    protected abstract values: PropertyValue[]
    protected abstract examples: PropertyExample[]

    abstract showDefinition(): string
    abstract makeValues(): PropertyValue[]
    abstract showValues(): PropertyValue[]
    abstract showExamples(): PropertyExample[]
}