import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const floatData: PropertyProps = {
    name: "float",
    definition: "A propriedade float especifica se um elemento deve flutuar para a esquerda, para a direita ou não deve flutuar. Elementos posicionados absolutamente ignoram a propriedade float!",
    category: "css property",
    values: [
        {
            name: "none",
            value: "O elemento não flutua, (será exibido apenas onde ocorre no texto). Este é o padrão"
        },
        {
            name: "left",
            value: "O elemento flutua à esquerda do seu contêiner"
        },
        {
            name: "right",
            value: "O elemento flutua à direita do seu contêiner"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "left",
            code: "left"
        },
        {
            name: "right",
            code: "right"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}