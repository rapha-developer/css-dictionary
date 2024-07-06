import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backfaceVisibilityData: PropertyProps = {
    name: "backface visibility",
    definition: "Define se a face posterior de um elemento deve ou não ficar visível quando estiver de frente para o usuário",
    category: "css property",
    values: [
        {
            name: "visible",
            value: "Valor padrão. A parte traseira é visível"
        },
        {
            name: "hidden",
            value: "A parte traseira não é visível"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "visible",
            code: "visible"
        },
        {
            name: "hidden",
            code: "hidden"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}