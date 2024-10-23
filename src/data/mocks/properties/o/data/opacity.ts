import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const opacityData: PropertyProps = {
    name: "opacity",
    definition: "A propriedade opacity define o nível de opacidade de um elemento.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "O nível de opacidade descreve o nível de transparência, onde 1 não é nada transparente, 0,5 é 50% transparente e 0 é completamente transparente."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "0.2",
            code: "0.2"
        },
        {
            name: "0.4",
            code: "0.4"
        },
        {
            name: "0.6",
            code: "0.6"
        },
        {
            name: "0.8",
            code: "0.8"
        },
        {
            name: "1",
            code: "1"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}