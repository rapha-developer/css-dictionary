import { Property } from "../propertyData/Property";
import { propertyAlphabeticType } from "../types/propertyAlphabeticType";
import { propertyWithATypes } from "./propertyList/propertyListBeginWithA";


const propertyAlphabetic: propertyAlphabeticType = {
    a: propertyWithATypes
}
export class RunPropertyInfoDynamically {
    protected firstLetter: string = "undefined";
    constructor(firstLetter: string) {
        this.firstLetter = firstLetter
    }
    public getProperty(propertyName: string): new () => Property {
        const propertyListTypes = propertyAlphabetic[this.firstLetter];
        return propertyListTypes[propertyName.toLocaleLowerCase()] as new () => Property;
    }
}