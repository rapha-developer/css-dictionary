import { PropertyProps } from "../../types/PropertyProps";

export function createModulesList(modules: PropertyProps[]) {
    return modules.map((module, key) => {
        return {
            name: `módulo ${key+1}`,
            property: module
        }
    });
}