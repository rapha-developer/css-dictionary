import { Property } from "../propertyData/Property"

export type propertyGenericType = {
    [key: string]: new() => Property
}